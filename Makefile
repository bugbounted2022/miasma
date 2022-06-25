API_VERSION=$(shell node -p -e "require('./meta.json').apiVersion")
CLI_VERSION=$(shell node -p -e "require('./meta.json').cliVersion")
BUILD=$(shell TZ=UTC git --no-pager show --quiet --abbrev=40 --format='%h')
BUILD_HASH=$(shell TZ=UTC git --no-pager show --quiet --abbrev=8 --format='%h')
BUILD_DATE=$(shell TZ=UTC git --no-pager show --quiet --date='format-local:%Y%m%d%H%M%S' --format='%cd')
BUILD_VAR_PATH=main
DATA_DIR=$(shell pwd)/data

# Build the production docker image
build:
	@docker build . -f Dockerfile \
		-t aklinker1/miasma \
		--build-arg VERSION="${API_VERSION}" \
		--build-arg BUILD="${BUILD}" \
		--build-arg BUILD_HASH="${BUILD_HASH}" \
		--build-arg BUILD_DATE="${BUILD_DATE}" \
		--build-arg BUILD_VAR_PATH="${BUILD_VAR_PATH}"

# Run the production docker image
preview: build
	@echo "Starting Miasma Server..."
	@echo
	@docker run \
		-i \
		--rm \
		--env-file .env \
		-p 3000:3000 \
		-v "${DATA_DIR}":/data/miasma \
		-v /var/run/docker.sock:/var/run/docker.sock \
		aklinker1/miasma

# Run the GraphQL API in dev mode
api:
	@docker build . -f Dockerfile.dev \
		-t aklinker1/miasma:local \
		--build-arg VERSION="${API_VERSION}" \
		--build-arg BUILD="${BUILD}" \
		--build-arg BUILD_HASH="${BUILD_HASH}" \
		--build-arg BUILD_DATE="${BUILD_DATE}" \
		--build-arg BUILD_VAR_PATH="${BUILD_VAR_PATH}"
	@echo
	@echo "Starting Miasma Server..."
	@echo
	@docker run \
		-i \
		--rm \
		--env-file .env \
		-p 3000:3000 \
		-v "${DATA_DIR}":/data/miasma \
		-v /var/run/docker.sock:/var/run/docker.sock \
		aklinker1/miasma:local

# Run the web UI in dev mode
ui:
	@cd web && pnpm dev

# Compile the CLI and install it to $GOPATH
cli:
	@go build \
		-ldflags "-X ${BUILD_VAR_PATH}.VERSION=${CLI_VERSION} -X ${BUILD_VAR_PATH}.BUILD=${BUILD} -X ${BUILD_VAR_PATH}.BUILD_HASH=${BUILD_HASH} -X ${BUILD_VAR_PATH}.BUILD_DATE=${BUILD_DATE}" \
		-o bin/cli \
		cmd/cli/main.go
	@cp bin/cli "${GOPATH}/bin/miasma-dev"

# Run just the docs website in dev mode
doc:
	@cd docs && pnpm dev

# Generate code (GQLGen)
gen:
	go generate ./...

# Publish to Docker Hub
publish:
	@docker login
	@docker buildx build . -f Dockerfile \
		--push \
		--platform linux/arm/v7,linux/arm64/v8,linux/amd64 \
		--tag aklinker1/miasma:nightly \
		--build-arg VERSION="${API_VERSION}" \
		--build-arg BUILD="${BUILD}" \
		--build-arg BUILD_HASH="${BUILD_HASH}" \
		--build-arg BUILD_DATE="${BUILD_DATE}" \
		--build-arg BUILD_VAR_PATH="${BUILD_VAR_PATH}"

# Remove generated files
clean:
	@rm -rf "${DATA_DIR}/apps".* ; echo "Cleaned local database..."
	@rm -rf ./bin ; echo "Cleaned output directory..."
	@echo "Done!"
