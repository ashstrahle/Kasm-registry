(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return t(5790)}])},5790:function(e,a,t){"use strict";t.r(a),t.d(a,{__N_SSG:function(){return u},default:function(){return p}});var s=t(5893),l=t(9008),r=t.n(l),i=t(7294),n=t(3162),o=t(8813),c=t(3157),d=t(1163),m=JSON.parse('{"wZ":[{"description":"Ubuntu Codespace Environment","docker_registry":"https://index.docker.io/v1/","image_src":"docker-ubuntu.png","name":"astrahle/ubuntu-codespace:latest","run_config":{"hostname":"kasm","user":"root"},"categories":["Desktop","Development"],"friendly_name":"Codespace","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":0,"sha":"22f3ec4d566bc73507ddedb1d90a9ecb723c21bc"},{"description":"3D printing software","docker_registry":"https://index.docker.io/v1/","categories":["Productivity"],"image_src":"cura.png","name":"astrahle/cura:latest","run_config":{"hostname":"kasm"},"friendly_name":"Cura","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":0,"sha":"55b65d84f0405e7ce1fcb58bad673282f99ca320"},{"description":"Legcord is the easiest way to talk over voice, video, and text. Talk, chat, hang out, and stay","docker_registry":"https://index.docker.io/v1/","categories":["Communication"],"image_src":"ac_plug_colored.png","name":"astrahle/legcord:latest","run_config":{"hostname":"kasm"},"friendly_name":"Legcord","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":0,"sha":"9f94db5ace85df23d7e08c8eaf3ab7535f158246"},{"description":"Pacman","docker_registry":"https://index.docker.io/v1/","categories":["Games"],"image_src":"pacman.png","name":"astrahle/pacman:latest","run_config":{"hostname":"kasm"},"friendly_name":"Pacman","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":0,"sha":"1ef25c119b88cd5386edf70d86dcfbfb87e0e399"},{"description":"Personal photo management","docker_registry":"https://index.docker.io/v1/","categories":["Multimedia"],"image_src":"shotwell.png","name":"astrahle/shotwell:latest","run_config":{"hostname":"kasm"},"friendly_name":"Shotwell","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":0,"sha":"963be5c322262c89e7e15275666415e822572b8d"},{"description":"Chat app supporting end-to-end encryption.","docker_registry":"https://index.docker.io/v1/","categories":["Communication"],"image_src":"signal.png","name":"astrahle/signal:latest","run_config":{"hostname":"kasm"},"friendly_name":"Signal","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":0,"sha":"4f48da25e9916a8d08a09462280892eb817f673a"},{"description":"Chat app supporting end-to-end encryption.","docker_registry":"https://index.docker.io/v1/","categories":["Communication"],"image_src":"teams.png","name":"astrahle/teams:latest","run_config":{"hostname":"kasm"},"friendly_name":"Teams","architecture":["arm64"],"compatibility":["1.13.x","1.14.x","1.15.x","1.16.x"],"uncompressed_size_mb":0,"sha":"07b15cd589571bfe0f36c2e150001e57aee42fee"}]}'),u=!0;function p(e){let{workspace:a}=e,l=(0,i.useRef)(null),u=(0,i.useRef)(null),p=(0,i.useRef)(null),[f,x]=(0,i.useState)(null),[b,g]=(0,i.useState)(null),[v,_]=(0,i.useState)(null),[y,w]=(0,i.useState)("png"),[j,N]=(0,i.useState)(null),k={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[C,S]=(0,i.useState)(k);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===a)p.current.value="",l.current.value="",u.current.value="",x(null),g(null),_(null),S(k);else if(a&&a[0]){let e=m.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,l.current.value=e.name,u.current.value=e.friendly_name,e.categories){let t=[];e.categories.map(e=>t.push({label:e,value:e})),x(t)}if(e.architecture){let s=[];e.architecture.map(e=>s.push({label:e,value:e})),g(s)}N("../../icons/"+e.image_src),S({...C,...e})}},[a]);let z={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:t}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(C&&C.friendly_name){let e={...C};e.image_src=D(e.friendly_name)+"."+y,S(e)}},[y]);let P=e=>{let a={...C};a.categories=e.map(e=>e.value),S(a);let t=[];a.categories.map(e=>t.push({label:e,value:e})),x(t)},R=e=>{let a={...C};a.architecture=e.map(e=>e.value),S(a);let t=[];a.architecture.map(e=>t.push({label:e,value:e})),g(t)};function D(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let E=()=>{var e=t(5733);let a=new e,s=a.folder(C.friendly_name);if(s.file("workspace.json",JSON.stringify(C,null,2)),v)s.file(C.image_src,v.file);else if(j){let l=fetch(j).then(e=>e.blob());s.file(C.image_src,l)}a.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,D(C.friendly_name)+".zip")})},L=e=>{let a={...C};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,_({value:e.target.value,file:e.target.files[0]}),w(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),N(null)),a.friendly_name&&(a.image_src=D(a.friendly_name)+"."+y),S(a)};return(0,s.jsxs)("div",{className:"",children:[(0,s.jsxs)(r(),{children:[(0,s.jsx)("title",{children:"Kasm Workspaces"}),(0,s.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,s.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,s.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,s.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,s.jsxs)("div",{className:"flex flex-col",children:[(0,s.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,s.jsx)("input",{type:"file",name:"icon",onChange:L,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,s.jsx)("input",{ref:u,name:"friendly_name",onChange:L,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,s.jsx)(o.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:P,styles:z,value:f}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,s.jsx)("input",{ref:p,name:"description",onChange:L,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,s.jsx)("input",{ref:l,name:"name",onChange:L,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,s.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,s.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,s.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,s.jsx)(c.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:R,styles:z,value:b}),(0,s.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,s.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,s.jsx)(h,{workspace:C,icon:v,inlineImage:j}),(0,s.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...C},null,2)}),(0,s.jsx)("button",{onClick:E,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:a,icon:t,inlineImage:l}=e,[r,n]=(0,i.useState)(!1),o=null;if(t){let c=new Blob([t.file]);o=URL.createObjectURL(c),a.image_src=o}return(0,s.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,s.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,s.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,s.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==l&&(e.target.src=l)},alt:a.friendly_name}),(0,s.jsxs)("div",{className:"flex-col pl-28",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,s.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["AshStrahle ARM64 Kasm Registry"," ",(0,s.jsx)("span",{children:void 0})]}),(0,s.jsx)("div",{className:" h-8"})]}),(0,s.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,s.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,s.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,s.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,s.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,s.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,s.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,s.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,s.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,s.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,s.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);