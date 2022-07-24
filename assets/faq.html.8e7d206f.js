import{_ as s,r,o as i,c as d,b as e,d as o,w as n,e as t,a as l}from"./app.02a9e6a4.js";const c={},h=e("h1",{id:"frequently-asked-questions",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#frequently-asked-questions","aria-hidden":"true"},"#"),t(" Frequently Asked Questions")],-1),u={class:"table-of-contents"},m=t("Why not Kubernetes?"),p=t("Why not just use Docker Swarm directly?"),y=t("What about Portainer?"),w=l('<h3 id="why-not-kubernetes" tabindex="-1"><a class="header-anchor" href="#why-not-kubernetes" aria-hidden="true">#</a> Why not Kubernetes?</h3><p>I don&#39;t need Kubernetes in my closest. I made Miasma as a little project to host test and IoT applications for my home. Nothing extremely complex, so solutions like Kubernetes are just over the top.</p><p>In the end, <strong>Miasma is just crazy simple</strong> and I learned a lot about Docker while working on it. So it was a win-win.</p><h3 id="why-not-just-use-docker-swarm-directly" tabindex="-1"><a class="header-anchor" href="#why-not-just-use-docker-swarm-directly" aria-hidden="true">#</a> Why not just use Docker Swarm directly?</h3><p>I don&#39;t want to SSH into my device every time I want to update the app version or change an environment variable. Ideally, apps should just update auto-magically (watchtower plugin incoming).</p><p>I also was really bad at managing traefik routing labels by hand, I always seemed to misspell something or mess something else up, meaning my routing was very flaky. Now, Miasma manages routes consistently and more easily then when I did it by hand.</p><p>Plus there was inconsistency in more than just routing, <code>.env</code> file formatting, <code>docker-compose.yml</code> format errors, etc. <strong>Lots of things were inconsistent and now aren&#39;t thanks to Miasma</strong>.</p><h3 id="what-about-portainer" tabindex="-1"><a class="header-anchor" href="#what-about-portainer" aria-hidden="true">#</a> What about Portainer?</h3><p>Portainer gives you access to every thing Docker can do on a UI, but I wanted to simplify things, most apps don&#39;t need all that configuration.</p><p>Having miasma manage ports and routing for me is huge, it&#39;s so easy to mistype a traefik label and be stuck for hours.</p>',10);function f(g,_){const a=r("RouterLink");return i(),d("div",null,[h,e("nav",u,[e("ul",null,[e("li",null,[o(a,{to:"#why-not-kubernetes"},{default:n(()=>[m]),_:1})]),e("li",null,[o(a,{to:"#why-not-just-use-docker-swarm-directly"},{default:n(()=>[p]),_:1})]),e("li",null,[o(a,{to:"#what-about-portainer"},{default:n(()=>[y]),_:1})])])]),w])}var k=s(c,[["render",f],["__file","faq.html.vue"]]);export{k as default};
