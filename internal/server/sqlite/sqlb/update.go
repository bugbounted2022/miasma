package sqlb

import (
	"fmt"
	"strings"

	"github.com/aklinker1/miasma/internal/server"
	fmt2 "github.com/aklinker1/miasma/internal/server/fmt"
)

type updateBuilder struct {
	table   string
	columns []string
	args    []any
	idField string
	logger  server.Logger
}

func Update(table string, idField string, id any, record map[string]any) *updateBuilder {
	columns := []string{}
	args := []any{}
	for column, value := range record {
		columns = append(columns, column)
		args = append(args, value)
	}
	args = append(args, id)
	return &updateBuilder{
		table:   table,
		columns: columns,
		args:    args,
		idField: idField,
		logger:  &fmt2.Logger{},
	}
}

func (b *updateBuilder) ToSQL() (sql string, args []any) {
	args = b.args
	setters := []string{}
	for _, column := range b.columns {
		setters = append(setters, fmt.Sprintf(`"%s" = ?`, column))
	}
	sql = fmt.Sprintf(
		`UPDATE %s SET %s WHERE "%s" = ?`,
		b.table,
		strings.Join(setters, ", "),
		b.idField,
	)
	b.logger.V("SQL Update: %s %v", sql, args)
	return sql, args
}
