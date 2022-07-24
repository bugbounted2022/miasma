import{_ as i,r as l,o,c as p,b as a,d as t,w as s,e,a as r}from"./app.02a9e6a4.js";const d={},c=a("h1",{id:"cli",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#cli","aria-hidden":"true"},"#"),e(" CLI")],-1),g=a("p",null,"The Miasma CLI should be installed on any computer that you would deploy/manage application from. It's very similar to Heroku's CLI, but also takes inspiration from the Docker CLI.",-1),h=a("p",null,[e("Learn how to "),a("a",{href:"/guide/installation#install-cli"},"install the CLI"),e(".")],-1),u={class:"table-of-contents"},f=e("miasma"),m=e("apps"),x=e("apps:create"),v=e("apps:delete"),_=e("apps:edit"),b=e("apps:restart"),y=e("apps:start"),F=e("apps:stop"),E=e("apps:upgrade"),M=e("connect"),k=e("env"),U=e("env:edit"),O=e("plugins"),H=e("plugins:disable"),S=e("plugins:enable"),C=e("traefik:set"),T=r(`<h2 id="miasma" tabindex="-1"><a class="header-anchor" href="#miasma" aria-hidden="true">#</a> <code>miasma</code></h2><div class="language-text ext-text"><pre class="language-text"><code>Manage and deploy dockerized applications to a docker swarm

Usage:
  miasma [flags]
  miasma [command]

Available Commands:
  apps            List apps
  apps:create     Create and deploy a new application
  apps:delete     Delete an existing application
  apps:edit       Update an app&#39;s display properties
  apps:restart    Restart an application or start it if it&#39;s not already running
  apps:start      Start an application
  apps:stop       Stop a running application
  apps:upgrade    Pull the latest version of the application&#39;s image and restart the app
  connect         Connect to a Miasma Server
  env             Print all the environment variables for an application
  env:edit        Edit the environment variables for the application
  plugins         List plugins
  plugins:disable Stop and disable a plugin
  plugins:enable  Enable and start a pre-defined plugin
  traefik:set     Set routing rules for an app

Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
  -v, --version         Print the CLI version

Use &quot;miasma [command] --help&quot; for more information about a command.
</code></pre></div><h3 id="apps" tabindex="-1"><a class="header-anchor" href="#apps" aria-hidden="true">#</a> <code>apps</code></h3><div class="language-text ext-text"><pre class="language-text"><code>List apps

Usage:
  miasma apps [flags]

Flags:
  -A, --all   List all apps, including hidden ones

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="apps-create" tabindex="-1"><a class="header-anchor" href="#apps-create" aria-hidden="true">#</a> <code>apps:create</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Create and deploy a new application

Usage:
  miasma apps:create [flags]

Flags:
      --hidden         Whether or not the app is hidden
  -i, --image string   Application&#39;s docker image that is ran

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="apps-delete" tabindex="-1"><a class="header-anchor" href="#apps-delete" aria-hidden="true">#</a> <code>apps:delete</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Delete an existing application. If the app is running, it is stopped first

Usage:
  miasma apps:delete [flags]

Flags:
  -a, --app string   The app to perform the action on

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="apps-edit" tabindex="-1"><a class="header-anchor" href="#apps-edit" aria-hidden="true">#</a> <code>apps:edit</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Update an app&#39;s properties such as name, group, and target ports:

  miasma apps:edit --app app-name --group some-group

See the list of flags for all the properties that can be set for an application.
  
It is worth noting that for properties that are lists, there is no add or remove. Instead, include all the values for an array property you would like to change:
  
  miasma apps:configure --app app-name --ports 80,22
	  
Only the properties specified in the flags will update be updated. To remove a property, pass in an empty string for the value:
  
  miasma apps:configure --app app-name --ports &quot;&quot;

Usage:
  miasma apps:edit [flags]

Flags:
      --add-placement-constraint strings   Add to the list of constraints specifying which nodes can run the app
      --add-published-ports int32Slice     Add to the list of ports the app can be accessed through (default [])
      --add-target-ports int32Slice        Add to the list of ports that the app is listening to inside the container (default [])
      --add-volume strings                 Add a bound volume to the host machine
  -a, --app string                         The app to perform the action on
  -g, --group string                       Change the app&#39;s group
      --hidden                             Make the app hidden
  -n, --name string                        Change the app&#39;s name
      --rm-placement-constraint strings    Remove from the list of constraints specifying which nodes can run the app
      --rm-published-ports int32Slice      Remove from the list of ports the app can be accessed through (default [])
      --rm-target-ports int32Slice         Remove from the list of ports that the app is listening to inside the container (default [])
      --rm-volume strings                  Remove a bound volume to the host machine
      --visible                            Remove the hidden flag from the app

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="apps-restart" tabindex="-1"><a class="header-anchor" href="#apps-restart" aria-hidden="true">#</a> <code>apps:restart</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Restart an application or start it if it&#39;s not already running

Usage:
  miasma apps:restart [flags]

Flags:
  -a, --app string   The app to perform the action on

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="apps-start" tabindex="-1"><a class="header-anchor" href="#apps-start" aria-hidden="true">#</a> <code>apps:start</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Start an application

Usage:
  miasma apps:start [flags]

Flags:
  -a, --app string   The app to perform the action on

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="apps-stop" tabindex="-1"><a class="header-anchor" href="#apps-stop" aria-hidden="true">#</a> <code>apps:stop</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Stop a running application

Usage:
  miasma apps:stop [flags]

Flags:
  -a, --app string   The app to perform the action on

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="apps-upgrade" tabindex="-1"><a class="header-anchor" href="#apps-upgrade" aria-hidden="true">#</a> <code>apps:upgrade</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Pull the latest version of the application&#39;s image and restart the app. To change the image to a different tag or different image altogether, use apps:edit instead

Usage:
  miasma apps:upgrade [flags]

Flags:
  -a, --app string   The app to perform the action on

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="connect" tabindex="-1"><a class="header-anchor" href="#connect" aria-hidden="true">#</a> <code>connect</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Connect to a Miasma Server

Usage:
  miasma connect [flags]

Examples:
miasma connect localhost:3000

Flags:
      --auth string   The server&#39;s access token if one is setup

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="env" tabindex="-1"><a class="header-anchor" href="#env" aria-hidden="true">#</a> <code>env</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Print all the environment variables for an application

Usage:
  miasma env [flags]

Flags:
  -a, --app string   The app to perform the action on

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="env-edit" tabindex="-1"><a class="header-anchor" href="#env-edit" aria-hidden="true">#</a> <code>env:edit</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Edit the environment variables for the application

Usage:
  miasma env:edit [flags]

Flags:
  -a, --app string   The app to perform the action on

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="plugins" tabindex="-1"><a class="header-anchor" href="#plugins" aria-hidden="true">#</a> <code>plugins</code></h3><div class="language-text ext-text"><pre class="language-text"><code>List plugins

Usage:
  miasma plugins [flags]

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="plugins-disable" tabindex="-1"><a class="header-anchor" href="#plugins-disable" aria-hidden="true">#</a> <code>plugins:disable</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Stop and disable a plugins. Plugins are simple, pre-configured, reusable applications that have custom integrations with Miasma.

Usage:
  miasma plugins:disable [flags]

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="plugins-enable" tabindex="-1"><a class="header-anchor" href="#plugins-enable" aria-hidden="true">#</a> <code>plugins:enable</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Enable one of the pre-defined plugins. Plugins are simple, pre-configured, reusable applications that have custom integrations with Miasma.

Usage:
  miasma plugins:enable [flags]

Flags:
  -c, --plugin-config string   JSON string representing the plugin&#39;s config. Example: --plugin-config &#39;{ &quot;key&quot;: &quot;value&quot; }&#39;

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div><h3 id="traefik-set" tabindex="-1"><a class="header-anchor" href="#traefik-set" aria-hidden="true">#</a> <code>traefik:set</code></h3><div class="language-text ext-text"><pre class="language-text"><code>Set routing rules for an app

Usage:
  miasma traefik:set [flags]

Flags:
  -a, --app string    The app to perform the action on
      --host string   The hostname of the app. EX: test.home.io
      --path string   The path at the host the app will live at. EX: /api
      --rule string   Custom traefik routing rule

Global Flags:
      --config string   config file (default is $HOME/.miasma.yaml)
</code></pre></div>`,32);function $(w,G){const n=l("RouterLink");return o(),p("div",null,[c,g,h,a("nav",u,[a("ul",null,[a("li",null,[t(n,{to:"#miasma"},{default:s(()=>[f]),_:1}),a("ul",null,[a("li",null,[t(n,{to:"#apps"},{default:s(()=>[m]),_:1})]),a("li",null,[t(n,{to:"#apps-create"},{default:s(()=>[x]),_:1})]),a("li",null,[t(n,{to:"#apps-delete"},{default:s(()=>[v]),_:1})]),a("li",null,[t(n,{to:"#apps-edit"},{default:s(()=>[_]),_:1})]),a("li",null,[t(n,{to:"#apps-restart"},{default:s(()=>[b]),_:1})]),a("li",null,[t(n,{to:"#apps-start"},{default:s(()=>[y]),_:1})]),a("li",null,[t(n,{to:"#apps-stop"},{default:s(()=>[F]),_:1})]),a("li",null,[t(n,{to:"#apps-upgrade"},{default:s(()=>[E]),_:1})]),a("li",null,[t(n,{to:"#connect"},{default:s(()=>[M]),_:1})]),a("li",null,[t(n,{to:"#env"},{default:s(()=>[k]),_:1})]),a("li",null,[t(n,{to:"#env-edit"},{default:s(()=>[U]),_:1})]),a("li",null,[t(n,{to:"#plugins"},{default:s(()=>[O]),_:1})]),a("li",null,[t(n,{to:"#plugins-disable"},{default:s(()=>[H]),_:1})]),a("li",null,[t(n,{to:"#plugins-enable"},{default:s(()=>[S]),_:1})]),a("li",null,[t(n,{to:"#traefik-set"},{default:s(()=>[C]),_:1})])])])])]),T])}var I=i(d,[["render",$],["__file","cli.html.vue"]]);export{I as default};
