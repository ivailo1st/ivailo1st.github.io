import{_ as u}from"./CY4l-EFV.js";import{_ as f}from"./2z2dQ9Rt.js";import{p as m,m as b,r as d,G as w,o as g,c as y,n as v,a as e,b as a,u as k,W as _,w as T,_ as G}from"./R_THYl62.js";import{_ as I}from"./8jI4J0LC.js";const C=m("/images/E-Bike Guardian.jpg"),B={class:"content"},P={class:"bottomContent"},L={class:"gallery"},j=b({__name:"EBikeGuardian",setup(N){const c=d(0),n=d({title:"E-Bike Guardian Gallery",images:["/images/Map.jpg","/images/TheWebsite.JPG","/images/Roles.png","/images/Login.jpg"],position:c.value,onClose(){l()}}),{open:h,close:l}=w({component:I,attrs:n.value,slots:{default:""}}),o=r=>{n.value.position=r,h()};return(r,t)=>{const s=u,p=f;return g(),y("div",B,[t[6]||(t[6]=v('<div class="topContent" data-v-3b8c6c0d><img src="'+C+'" style="width:100%;" data-v-3b8c6c0d></div><div class="middleContent" data-v-3b8c6c0d><p data-v-3b8c6c0d> This is my Year 1 last project, which was titled &quot;E-Bike Guardian&quot;. The premise of this project was to use the <a href="https://pycom.io/product/pytrack/" data-v-3b8c6c0d>PyTrack</a> device combined with the micro-controller <a href="https://pycom.io/product/fipy/" data-v-3b8c6c0d>FiPy</a> to track electronical bikes (E-Bikes) or normal bikes around Aarhus, Denmark and then present the data in a webpage by our design. The way I tackled the project was by seeing how the devices operate and to make them work by showing locally the data. At first that wasn&#39;t hard to do, because the <a href="https://pycom.io/product/pytrack/" data-v-3b8c6c0d>PyTrack</a> and <a href="https://pycom.io/product/fipy/" data-v-3b8c6c0d>FiPy</a> both use Python, but when it came down to connecting them to the <a href="https://en.wikipedia.org/wiki/LoRa" data-v-3b8c6c0d>LoRa</a> network it was a bit hard. It turned out in the end that it took a little while for the devices to establish connection to the network due to it being their first time, but after that connection to the network was faster. Here is the code that I used to make that connection happen: <a href="https://drive.google.com/file/d/1eDJ3az0toP0gePzy7qtodN38NUY1ECmf/view?usp=sharing" data-v-3b8c6c0d> The Code </a> . </p><p data-v-3b8c6c0d> Afterwards, I began working on the <a href="https://en.wikipedia.org/wiki/LoRa" data-v-3b8c6c0d>LoRa</a> network so that I can transfer data from the network to a IoT Database in my case being <a href="https://cloud.google.com/sql/" data-v-3b8c6c0d>Google Cloud</a>. At first it wasn&#39;t easy finding a clear and a simple method of doing this task, but after a while I found <a href="https://nodered.org/" data-v-3b8c6c0d>Node-Red</a> which was a tool that had the capibilities to transfer data from one thing to another one and is also part of <a href="https://nodejs.org/en/" data-v-3b8c6c0d>Node.JS</a>. The way this tool works is by prompting the user to draw his own schematic, which enables him to have a clear overview of his work. The user interface is very user friendly and <a href="https://nodered.org/" data-v-3b8c6c0d>Node-Red</a> itself is very easy to pick up and use. It also supports different modules that help the user accomplish more tasks easier. Here is my schematic: <a href="https://drive.google.com/file/d/1HKV7nthhwC501hJFrWfE2nOuMuYnHLgq/view?usp=sharing" data-v-3b8c6c0d>JSON</a> and <a href="https://drive.google.com/open?id=1tPD79sFoptnAuq9znZtQ4piXKsVulzuc" data-v-3b8c6c0d>Picture</a>. </p><p data-v-3b8c6c0d> Lastly, it was the last part of the project and that was to show the data on a map. The way I did it was by using <a href="https://openlayers.org/" data-v-3b8c6c0d>OpenLayers</a> and <a href="http://flask.pocoo.org/" data-v-3b8c6c0d>Python-Flask</a>. <a href="http://flask.pocoo.org/" data-v-3b8c6c0d>Python-Flask</a> was used to deploy the website and also to extract the data from the IoT database, while <a href="https://openlayers.org/" data-v-3b8c6c0d>OpenLayers</a> was used to display the data on a map. On top of that I created a few more functionalities that helped improve the website. The first one was connected with the map. It made it so that <a href="https://openlayers.org/" data-v-3b8c6c0d>OpenLayers</a> only showed the last received coordinates of the bikes rather than their whole path and also enabled the user to be able to look up a specific bike.The second functionality was connected with the website as a whole. It was the ability of users to register and login with which access was restricted to those who didn&#39;t register and where only guest. From there on I created a role based system on where normal users could only look up the last position of the bikes while the admins could see the whole bike paths. The last functionality I created was connected with the bikes. It was the ability of users to rent different bikes by telling them if they are free or they are rented by another user and if they are free they rent them. Here is the code: <a href="https://drive.google.com/file/d/1FbQGYRGo98QpkGyrtaT4TJ_V-LU4u-4z/view?usp=sharing" data-v-3b8c6c0d>Code</a>. </p></div>',2)),e("div",P,[t[5]||(t[5]=e("h1",null,"Pictures of The Project",-1)),e("div",L,[e("button",{class:"galleryButton",onClick:t[0]||(t[0]=i=>o(0)),title:"Open Gallery"},[a(s,{src:"/images/Map.jpg"})]),e("button",{class:"galleryButton",onClick:t[1]||(t[1]=i=>o(1)),title:"Open Gallery"},[a(s,{src:"/images/TheWebsite.JPG"})]),e("button",{class:"galleryButton",onClick:t[2]||(t[2]=i=>o(2)),title:"Open Gallery"},[a(s,{src:"/images/Roles.png"})]),e("button",{class:"galleryButton",onClick:t[3]||(t[3]=i=>o(3)),title:"Open Gallery"},[a(s,{src:"/images/Login.jpg"})])]),a(k(_)),a(p,{to:"myCV",class:"topBorder"},{default:T(()=>t[4]||(t[4]=[e("button",{class:"backButton",style:{"vertical-align":"middle"}},[e("span",null,"Back To CV ")],-1)])),_:1})])])}}}),F=G(j,[["__scopeId","data-v-3b8c6c0d"]]);export{F as default};