"use strict";(self.webpackChunk_open_sauced_docs_opensauced_pizza=self.webpackChunk_open_sauced_docs_opensauced_pizza||[]).push([[887],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=i.createContext({}),c=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return i.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},d=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||r;return n?i.createElement(h,o(o({ref:t},l),{},{components:n})):i.createElement(h,o({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4471:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return d}});var i=n(7462),a=n(3366),r=(n(7294),n(3905)),o=["components"],s={id:"setting-up-a-new-repository",title:"Setting up a new repository",sidebar_label:"Setting up a new repository",keywords:["setting up a new repository"]},p=void 0,c={unversionedId:"maintainers/setting-up-a-new-repository",id:"maintainers/setting-up-a-new-repository",isDocsHomePage:!1,title:"Setting up a new repository",description:"How do I Join the Maintainers Team?",source:"@site/docs/maintainers/setting-up-a-new-repository.md",sourceDirName:"maintainers",slug:"/maintainers/setting-up-a-new-repository",permalink:"/maintainers/setting-up-a-new-repository",editUrl:"https://github.com/open-sauced/docs.opensauced.pizza/edit/main/docs/maintainers/setting-up-a-new-repository.md",tags:[],version:"current",lastUpdatedBy:"Sadie",lastUpdatedAt:1678833635,formattedLastUpdatedAt:"3/14/2023",frontMatter:{id:"setting-up-a-new-repository",title:"Setting up a new repository",sidebar_label:"Setting up a new repository",keywords:["setting up a new repository"]},sidebar:"docs",previous:{title:"Resolve merge conflicts",permalink:"/technical/resolve-merge-conflicts"},next:{title:"@open-sauced/check-engines",permalink:"/maintainers/check-engines"}},l=[{value:"How do I Join the Maintainers Team?",id:"how-do-i-join-the-maintainers-team",children:[],level:2},{value:"Requirements",id:"requirements",children:[],level:2},{value:"Creating a new repo",id:"creating-a-new-repo",children:[],level:2},{value:"Syncing settings with opensauced.pizza",id:"syncing-settings-with-opensaucedpizza",children:[],level:2},{value:"Syncing labels with opensauced.pizza",id:"syncing-labels-with-opensaucedpizza",children:[],level:2},{value:"Syncing branch protections with opensauced.pizza",id:"syncing-branch-protections-with-opensaucedpizza",children:[],level:2},{value:"Setting up workflows",id:"setting-up-workflows",children:[],level:2},{value:"Setting up environments and secrets",id:"setting-up-environments-and-secrets",children:[],level:2}],u={toc:l};function d(e){var t=e.components,s=(0,a.Z)(e,o);return(0,r.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"how-do-i-join-the-maintainers-team"},"How do I Join the Maintainers Team?"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Sign up for ",(0,r.kt)("a",{parentName:"li",href:"https://opensauced.pizza"},"opensauced.pizza")),(0,r.kt)("li",{parentName:"ol"},"Join ",(0,r.kt)("a",{parentName:"li",href:"https://discord.gg/gZMKK5q"},"discord"),"."),(0,r.kt)("li",{parentName:"ol"},"Prove your pizza worth!")),(0,r.kt)("h2",{id:"requirements"},"Requirements"),(0,r.kt)("p",null,"For the purpose of this tutorial, our target demo repository will be called ",(0,r.kt)("inlineCode",{parentName:"p"},"open-sauced/npx-check-engines"),"."),(0,r.kt)("p",null,"The steps described here mirror ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/check-engines"},"open-sauced/check-engines"),"."),(0,r.kt)("p",null,"The octoherd scripts assume you have exported a programatic token similar to:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'export GH_TOKEN="ghp_Q8TZZT9ypgqw3EeABoCWPcwZBHpjZJ9hI42n"\n')),(0,r.kt)("h2",{id:"creating-a-new-repo"},"Creating a new repo"),(0,r.kt)("p",null,"Don't spend too much time thinking of a name or a catchy description, just set license to MIT and rocket jump!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create a new repository",src:n(6811).Z})),(0,r.kt)("h2",{id:"syncing-settings-with-opensaucedpizza"},"Syncing settings with opensauced.pizza"),(0,r.kt)("p",null,"Squashing pull requests is the minimum requirement but the other options are quite useful at various stages of development."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"minimum merge settings",src:n(6721).Z})),(0,r.kt)("p",null,"Copy most of the relevant settings with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'npx octoherd-script-sync-repo-settings \\\n  --template "open-sauced/open-sauced" \\\n  -T $GH_TOKEN \\\n  -R "open-sauced/check-engines"\n')),(0,r.kt)("p",null,'Otherwise you can disable "Projects" and "Wikis" for the selected repository as we are handling them on a larger scale.'),(0,r.kt)("h2",{id:"syncing-labels-with-opensaucedpizza"},"Syncing labels with opensauced.pizza"),(0,r.kt)("p",null,"The default labels have some missing emojis. Copy the rest with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'npx octoherd-script-copy-labels \\\n  --template "open-sauced/open-sauced" \\\n  -T $GH_TOKEN \\\n  -R "open-sauced/check-engines"\n')),(0,r.kt)("p",null,"Then go back to your repository and delete:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"documentation"),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udc40 needs-triage (green background one)"),(0,r.kt)("li",{parentName:"ul"},"other potential duplicates if the above race condition is different")),(0,r.kt)("h2",{id:"syncing-branch-protections-with-opensaucedpizza"},"Syncing branch protections with opensauced.pizza"),(0,r.kt)("p",null,'This topic is more complex but in a sense tap the main branch and enable\neverything except "Restrict who can dismiss pull request reviews" and "Restrict who can push to matching branches" in the first section.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"maximum merge protections",src:n(4244).Z})),(0,r.kt)("p",null,'The "Rules applied to everyone including administrators" is more on an unused override.'),(0,r.kt)("p",null,"Most of the time this process is super manual but in the limited cases where we need this run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'npx @octoherd/script-sync-branch-protections \\\n  --template "open-sauced/open-sauced" \\\n  -T $GH_TOKEN \\\n  -R "open-sauced/check-engines"\n')),(0,r.kt)("h2",{id:"setting-up-workflows"},"Setting up workflows"),(0,r.kt)("p",null,"Most collaborative projects require ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/compliance.yml"},"compliance flows")," powered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/amannn/action-semantic-pull-request"},"amannn/action-semantic-pull-request")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/actions/first-interaction"},"actions/first-interaction"),"."),(0,r.kt)("p",null,"Pull requests require ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/triage.yml"},"triage")," powered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bdougie/take-action"},"bdougie/take-action"),"."),(0,r.kt)("p",null,"Most ",(0,r.kt)("inlineCode",{parentName:"p"},"node")," projects will require ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/blob/main/.github/workflows/release.yml"},"release automation")," powered by ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/semantic-release-conventional-config"},"@open-sauced/semantic-release-conventional-config"),"."),(0,r.kt)("p",null,"Other ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/open-sauced/open-sauced/tree/main/.github/workflows"},"development workflows")," are less common and opinionated towards decentralised collaboration. Use these as example backbones for your new repository."),(0,r.kt)("h2",{id:"setting-up-environments-and-secrets"},"Setting up environments and secrets"),(0,r.kt)("p",null,"As you may have noticed in the previous step or in the actions visualisations, the release workflows enable named environments."),(0,r.kt)("p",null,"These have to be manually set up, along with their secrets and branch protections."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create environment",src:n(8403).Z})),(0,r.kt)("p",null,"If using ",(0,r.kt)("inlineCode",{parentName:"p"},"npm")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"ghcr")," it is likely you will add a couple variables here."))}d.isMDXComponent=!0},6811:function(e,t,n){t.Z=n.p+"assets/images/contributing-maintainers-create-repository-019a03ca1c27a2c68c269e5c2bfdbb83.png"},8403:function(e,t,n){t.Z=n.p+"assets/images/contributing-maintainers-env-505e845511ddadfdd8f3ba49c44eba5b.png"},4244:function(e,t,n){t.Z=n.p+"assets/images/contributing-maintainers-merge-protections-86eb5e515e264396c194af7ade02e05c.png"},6721:function(e,t,n){t.Z=n.p+"assets/images/contributing-maintainers-merge-settings-980ef1e3f50c9fae47edf1411924c124.png"}}]);