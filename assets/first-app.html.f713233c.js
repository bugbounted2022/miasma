import{_ as c,r,o as i,c as l,b as e,d as t,w as p,e as n,a as s}from"./app.02a9e6a4.js";const h={},d=e("h1",{id:"create-your-first-app",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#create-your-first-app","aria-hidden":"true"},"#"),n(" Create Your First App")],-1),u=e("p",null,"If you haven't already, follow the install instructions to spin up a Miasma Server and install the CLI.",-1),_=e("p",null,[n("We'll assume you're running the server on you dev machine, and access everything via "),e("code",null,"localhost"),n(".")],-1),m={class:"table-of-contents"},g=n("Connect to the Miasma Server"),k=n("Creating an App"),f=s(`<h2 id="connect-to-the-miasma-server" tabindex="-1"><a class="header-anchor" href="#connect-to-the-miasma-server" aria-hidden="true">#</a> Connect to the Miasma Server</h2><p>Before managing any apps, you first need to tell the CLI where your server is at:</p><div class="language-bash ext-sh"><pre class="language-bash"><code>$ miasma connect localhost:3000

Connected to miasma<span class="token operator">!</span>
  Miasma Server Version: <span class="token number">1.1</span>.0
  Docker Version: <span class="token number">20.10</span>.17
  Cluster Enabled? <span class="token boolean">true</span>
  Join Command: <span class="token function">docker</span> swarm <span class="token function">join</span> --token <span class="token operator">&lt;</span>some-token<span class="token operator">&gt;</span> <span class="token number">192.168</span>.0.3:2377

\u2714 Connected to server
</code></pre></div><p>Nice! We&#39;re connected, so lets create an app.</p><h2 id="creating-an-app" tabindex="-1"><a class="header-anchor" href="#creating-an-app" aria-hidden="true">#</a> Creating an App</h2>`,5),v=n("Let's deploy an example web app that just responds with information about the incoming request using the "),b={href:"https://hub.docker.com/r/ealen/echo-server",target:"_blank",rel:"noopener noreferrer"},x=e("code",null,"ealen/echo-server",-1),y=n(" image."),w={class:"custom-container tip"},q=e("p",{class:"custom-container-title"},[n("Why "),e("code",null,"ealen/echo-server"),n("?")],-1),C=n("Because it runs on the port specified by the "),L=e("code",null,"PORT",-1),I=n(" environment variable. For more details, learn how Miasma "),S={href:"/guide/port-management",target:"_blank",rel:"noopener noreferrer"},N=n("manages ports automatically"),V=n("."),E=s(`<div class="language-bash ext-sh"><pre class="language-bash"><code>$ miasma apps:create example-web-app -i ealen/echo-server

Creating example-web-app<span class="token punctuation">..</span>.
\u2714 example-web-app started
</code></pre><div class="highlight-lines"><div class="highlight-line">\xA0</div><br><br><br></div></div><p>List the apps. We now have one app, and it&#39;s deployed to at <code>http://&lt;server-ip&gt;:3001</code>.</p><div class="language-text ext-text"><pre class="language-text"><code>$ miasma apps

Apps
 \u25CF example-web-app (http://localhost:3001, 1/1 running)

(1 total)
</code></pre></div><div class="custom-container tip"><p class="custom-container-title">TIP</p><p>If you see <code>0/1 running</code>, wait a few seconds and run <code>misama apps</code> again.</p></div>`,4),M=n("Visit "),j={href:"http://localhost:3001",target:"_blank",rel:"noopener noreferrer"},A=n("http://localhost:3001"),B=n(" in your browser, and you should see a JSON response."),T=s(`<div class="language-json ext-json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;http&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;originalUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/some/path&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;protocol&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token comment">// ...</span>
<span class="token punctuation">}</span>
</code></pre></div><p>The app is up and running with a single CLI command!</p><hr><h4 id="next-steps" tabindex="-1"><a class="header-anchor" href="#next-steps" aria-hidden="true">#</a> Next Steps</h4>`,4),R=n("Read how Miasma "),W={href:"/guide/port-management",target:"_blank",rel:"noopener noreferrer"},$=n("automatically manages ports"),z=n("Learn how to "),F={href:"/guide/app-communication",target:"_blank",rel:"noopener noreferrer"},J=n("communicate between apps"),O=n("See more complex, common "),P={href:"/guide/examples",target:"_blank",rel:"noopener noreferrer"},U=n("example apps"),D=n("Learn about "),G={href:"/plugins",target:"_blank",rel:"noopener noreferrer"},Y=n("plugins"),H=n("Checkout the "),K={href:"/reference/cli",target:"_blank",rel:"noopener noreferrer"},Q=n("CLI reference"),X=n(" for advanced usage"),Z=n("Enable "),ee={href:"/authorization",target:"_blank",rel:"noopener noreferrer"},ne=n("authorization");function te(ae,se){const o=r("RouterLink"),a=r("ExternalLinkIcon");return i(),l("div",null,[d,u,_,e("nav",m,[e("ul",null,[e("li",null,[t(o,{to:"#connect-to-the-miasma-server"},{default:p(()=>[g]),_:1})]),e("li",null,[t(o,{to:"#creating-an-app"},{default:p(()=>[k]),_:1})])])]),f,e("p",null,[v,e("a",b,[x,t(a)]),y]),e("div",w,[q,e("p",null,[C,L,I,e("a",S,[N,t(a)]),V])]),E,e("p",null,[M,e("a",j,[A,t(a)]),B]),T,e("ul",null,[e("li",null,[R,e("a",W,[$,t(a)])]),e("li",null,[z,e("a",F,[J,t(a)])]),e("li",null,[O,e("a",P,[U,t(a)])]),e("li",null,[D,e("a",G,[Y,t(a)])]),e("li",null,[H,e("a",K,[Q,t(a)]),X]),e("li",null,[Z,e("a",ee,[ne,t(a)])])])])}var re=c(h,[["render",te],["__file","first-app.html.vue"]]);export{re as default};
