(function(t){function e(e){for(var r,o,s=e[0],l=e[1],c=e[2],u=0,m=[];u<s.length;u++)o=s[u],n[o]&&m.push(n[o][0]),n[o]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);d&&d(e);while(m.length)m.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],r=!0,s=1;s<a.length;s++){var l=a[s];0!==n[l]&&(r=!1)}r&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var r={},n={app:0},i=[];function o(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=r,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)o.d(a,r,function(e){return t[e]}.bind(null,r));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var d=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var r=a("4b43"),n=a.n(r);n.a},2479:function(t,e,a){},"4b43":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("cadf"),a("551c"),a("097d");var r=a("2b0e"),n=a("bb71");a("da64"),a("5363");r["a"].use(n["a"],{iconfont:"mdi"});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",{attrs:{dark:"dark"===t.theme}},[a("v-content",{staticClass:"zindex"},[a("v-slide-y-transition",{attrs:{mode:"out-in"}},[a("router-view")],1)],1),a("my-footer",{staticClass:"zindex",attrs:{breakpointName:t.breakpointName,breakpointWidth:t.breakpointWidth,breakpointHeight:t.breakpointHeight}})],1)},o=[],s=(a("7f7f"),a("cebc")),l=a("2f62"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-footer",{staticStyle:{height:"36px"},attrs:{app:""}},[a("v-layout",{staticStyle:{"justify-content":"space-between"},attrs:{row:""}},[a("v-flex",{staticStyle:{"align-self":"center"},attrs:{xs3:"","text-xs-left":""}},[a("v-btn",{staticStyle:{"margin-left":"0px"},attrs:{flat:""},on:{click:function(e){t.switchTheme()}}},[t._v("Switch Theme")])],1),a("v-flex",{staticStyle:{"align-self":"center"},attrs:{xs6:"","text-xs-center":""}},[t._v("\n      ©2019 — "),a("strong",[t._v("Tind")]),t._v(" - built by VueJS, FireStore, Vuetify\n    ")]),a("v-flex",{staticStyle:{"align-self":"center","padding-right":"4px"},attrs:{xs3:"","text-xs-right":""}},[a("div",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}]},[t._v(t._s(t.breakpointName)+" "+t._s(t.breakpointWidth)+" x "+t._s(t.breakpointHeight))])])],1)],1)},d=[],u={name:"my-footer",props:["breakpointName","breakpointHeight","breakpointWidth"],methods:Object(s["a"])({},Object(l["b"])("global",{switchTheme:"changeTheme"}))},m=u,v=a("0c7c"),p=a("6544"),f=a.n(p),h=a("8336"),g=a("0e8f"),b=a("553a"),y=a("a722"),x=Object(v["a"])(m,c,d,!1,null,null,null);x.options.__file="MyFooter.vue";var _=x.exports;f()(x,{VBtn:h["a"],VFlex:g["a"],VFooter:b["a"],VLayout:y["a"]});var k={name:"app",components:{MyFooter:_},computed:Object(s["a"])({breakpointName:function(){return this.$vuetify.breakpoint.name},breakpointWidth:function(){return this.$vuetify.breakpoint.width},breakpointHeight:function(){return this.$vuetify.breakpoint.height}},Object(l["c"])({theme:"global/theme",loggedIn:"user/loggedIn"}))},C=k,w=(a("034f"),a("7496")),S=a("549c"),T=a("0789"),I=Object(v["a"])(C,i,o,!1,null,null,null);I.options.__file="App.vue";var j=I.exports;f()(I,{VApp:w["a"],VContent:S["a"],VSlideYTransition:T["c"]});var V=a("8c4f"),A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-layout",{attrs:{row:""}},[a("vue-particles",{staticClass:"particles-js",attrs:{color:"#dedede",particleOpacity:.7,particlesNumber:80,shapeType:"circle",particleSize:4,linesColor:"#dedede",linesWidth:1,lineLinked:!0,lineOpacity:.4,linesDistance:150,moveSpeed:3,hoverEffect:!0,hoverMode:"grab",clickEffect:!0}}),a("v-flex",{attrs:{xs4:"","offset-xs4":"",md4:"","offset-md4":""}},[a("v-form",{ref:"form",staticStyle:{"margin-top":"200px"},attrs:{"lazy-validation":""},on:{submit:t.submit},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[a("v-text-field",{attrs:{label:"Key",rules:t.keyRules,counter:5,required:""},model:{value:t.key,callback:function(e){t.key=e},expression:"key"}}),a("v-btn",{attrs:{outline:"",color:"indigo",type:"submit",disabled:!t.valid}},[t._v("\n          Go\n          "),a("v-icon",{staticClass:"ml-1",attrs:{right:"",dark:""}},[t._v("keyboard_tab")])],1)],1),""!==t.error_message?a("v-alert",{attrs:{color:"green lighten-2",icon:"info",value:!0}},[t._v("\n          "+t._s(t.error_message)+"\n        ")]):t._e()],1)],1)},O=[],P={name:"login",data:function(){return{valid:!1,key:"",keyRules:[function(t){return!!t||"Key is required"},function(t){return t&&5===t.length||"Key must be equal 5 characters"}]}},updated:function(){this.checkCurrentLogin()},methods:{submit:function(t){t.preventDefault(),this.$store.dispatch("user/login",this.key)},checkCurrentLogin:function(){this.loggedIn||"/"===this.$router.path?this.loggedIn&&this.$router.push("/cv"):this.$router.push("/")}},computed:Object(s["a"])({},Object(l["c"])({loggedIn:"user/loggedIn",error_message:"user/error_message"}))},M=P,L=(a("b1f9"),a("0798")),N=a("4bd4"),E=a("132d"),D=a("2677"),F=Object(v["a"])(M,A,O,!1,null,"2bfaf555",null);F.options.__file="Login.vue";var H=F.exports;f()(F,{VAlert:L["a"],VBtn:h["a"],VFlex:g["a"],VForm:N["a"],VIcon:E["a"],VLayout:y["a"],VTextField:D["a"]});var J=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"home",attrs:{fluid:""}},[t.loggedIn?a("div",[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"personal",attrs:{xs12:"",sm12:"",md10:"","offset-md1":"",lg8:"","offset-lg2":"",xl6:"","offset-xl3":""}},[a("personal-info")],1)],1),a("v-layout",[a("v-flex",{staticClass:"career",attrs:{xs12:"",sm12:"",md10:"","offset-md1":"",lg8:"","offset-lg2":"",xl6:"","offset-xl3":""}},[a("career-info")],1)],1)],1):a("div",[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs4:"","offset-xs4":"",md4:"","offset-md4":""}},[a("v-btn",{attrs:{large:"",outline:"",color:"indigo"},on:{click:function(e){t.backToLogin()}}},[a("v-icon",{staticClass:"ml-1",attrs:{left:"",dark:""}},[t._v("keyboard_return")]),t._v("\n          Not login yet, back to login\n        ")],1)],1)],1)],1)])},R=[],$=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:""}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xl3:""}},[a("v-avatar",{attrs:{size:"180"}},[a("img",{attrs:{src:t.baseUrl+"img/avatar.jpg",alt:"Hoang's avatar"}})])],1),a("v-flex",{attrs:{"pt-5":"","pb-2":"",xl3:""}},[a("v-card",{attrs:{flat:""}},[a("v-card-title",{attrs:{"primary-title":""}},[a("div",[a("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.name))]),a("div",[t._v(t._s(t.jobTitle))])])])],1)],1),a("v-flex",{attrs:{"hidden-xs-only":"",xl6:"","text-xs-right":""}},[a("v-card",{attrs:{elevation:"0"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"day of birth"}},[t._v("mdi mdi-cake-variant")]),a("div",[t._v(t._s(t.dob))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"gender"}},[t._v("mdi mdi-gender-male-female")]),a("div",[t._v("Male")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"phone"}},[t._v("mdi mdi-phone")]),a("div",[t._v(t._s(t.phone))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"address"}},[t._v("mdi mdi-map-marker")]),a("div",[t._v(t._s(t.addr))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"email"}},[t._v("mdi mdi-email-outline")]),a("a",{attrs:{href:"mailto:"+t.email,target:"_top"}},[t._v(t._s(t.email))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"github"}},[t._v("mdi mdi-github-circle")]),a("a",{attrs:{href:t.github}},[t._v(t._s(t.github))])],1)],1)],1)],1)],1)},G=[],z=(a("37ce"),{name:"personal-info",data:function(){return{baseUrl:"/",name:"",jobTitle:"",dob:"",phone:"",addr:"",email:"",github:""}},created:function(){this.name="Nguyễn Thái Hoàng",this.jobTitle="Sernior Automation QC",this.dob="06 Jan 1985",this.phone="0905815657",this.addr="Thạnh Mỹ Lợi apartment, District 2, Ho Chi Minh city",this.email="thaihoang85@gmail.com",this.github="https://github.com/tindecken"}}),B=z,U=(a("5dc4"),a("8212")),W=a("b0af"),Q=a("12b2"),K=a("a523"),q=Object(v["a"])(B,$,G,!1,null,"56586ea3",null);q.options.__file="PersonalInfo.vue";var Z=q.exports;f()(q,{VAvatar:U["a"],VCard:W["a"],VCardTitle:Q["a"],VContainer:K["a"],VFlex:g["a"],VIcon:E["a"],VLayout:y["a"]});var X=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{attrs:{fluid:"","mb-10":""}},[a("v-layout",{attrs:{row:"","hidden-sm-and-up":""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0",fluid:""}},[a("v-card-text",[a("div",[a("v-divider"),a("h3",{staticClass:"headline mb-0 text-xs-left"},[t._v("Personal Information")]),a("v-divider")],1)]),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"day of birth"}},[t._v("mdi mdi-cake-variant")]),a("div",[t._v(t._s(t.dob))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"gender"}},[t._v("mdi mdi-gender-male-female")]),a("div",[t._v("Male")])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"phone"}},[t._v("mdi mdi-phone")]),a("div",[t._v(t._s(t.phone))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"address"}},[t._v("mdi mdi-map-marker")]),a("div",[t._v(t._s(t.addr))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"email"}},[t._v("mdi mdi-email-outline")]),a("a",{attrs:{href:"mailto:"+t.email,target:"_top"}},[t._v(t._s(t.email))])],1),a("v-card-title",{attrs:{"primary-title":""}},[a("v-icon",{staticClass:"icon",attrs:{title:"github"}},[t._v("mdi mdi-github-circle")]),a("a",{attrs:{href:t.github}},[t._v(t._s(t.github))])],1)],1)],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("div",{staticClass:"panal"},[a("v-divider"),a("h3",{staticClass:"headline mb-0 text-xs-left"},[t._v("Education")]),a("v-divider")],1)]),t._l(t.education,function(e){return a("v-card-title",{key:e.index,staticClass:"text-xs-left",attrs:{"primary-title":""}},[a("ul",[a("li",{domProps:{innerHTML:t._s(e)}})])])})],2)],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("div",{staticClass:"panal"},[a("v-divider"),a("h3",{staticClass:"headline mb-0 text-xs-left"},[t._v("Experience Summary")]),a("v-divider")],1)]),t._l(t.expSums,function(e){return a("v-card-title",{key:e.index,staticClass:"text-xs-left",attrs:{"primary-title":""}},[a("ul",[a("li",{domProps:{innerHTML:t._s(e)}})])])})],2)],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("div",{staticClass:"panal"},[a("v-divider"),a("h3",{staticClass:"headline mb-0 text-xs-left"},[t._v("Career Profile")]),a("v-divider")],1)]),t._l(t.workingExp,function(e){return a("div",{key:e.index,staticStyle:{"margin-bottom":"10px"}},[a("v-card-title",{attrs:{"primary-title":""}},[a("h3",{staticClass:"text-xs-left"},[a("v-icon",{staticClass:"icon"},[t._v("mdi mdi-circle-medium")]),t._v(" From "+t._s(e.from)+" - "+t._s(e.to)+": "+t._s(e.jobTitle)+" at "),a("span",{domProps:{innerHTML:t._s(e.companyName)}})],1)]),a("v-card-title",{staticClass:"text-xs-left"},[a("span",{staticStyle:{"padding-left":"20px"}},[a("u",[t._v("Job Description:")])])]),t._l(e.jobDes,function(e){return a("v-card-title",{key:e,staticClass:"text-xs-left",staticStyle:{"padding-left":"40px"}},[a("ul",[a("li",[t._v("\n                "+t._s(e)+"\n              ")])])])}),a("v-card-title",{staticClass:"text-xs-left"},[a("span",{staticStyle:{"padding-left":"20px"}},[a("u",[t._v("Key Achivements:")])])]),t._l(e.jobAchivements,function(e){return a("v-card-title",{key:e,staticClass:"text-xs-left",staticStyle:{"padding-left":"40px"}},[a("ul",[a("li",[t._v("\n                "+t._s(e)+"\n              ")])])])})],2)})],2)],1)],1),a("v-layout",{attrs:{row:""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("div",{staticClass:"panal"},[a("v-divider"),a("h3",{staticClass:"headline mb-0 text-xs-left"},[t._v("Pet Projects")]),a("v-divider")],1)]),t._l(t.petProjects,function(e){return a("v-card-text",{key:e.index,staticStyle:{"padding-left":"20px","padding-bottom":"10px","padding-top":"0px"}},[a("ul",[a("li",[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-left",staticStyle:{"align-self":"center","margin-right":"5px"}},[a("strong",[t._v(t._s(e.name))])])],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-left",staticStyle:{"padding-left":"40px"}},[a("a",{attrs:{href:e.link}},[t._v(t._s(e.link))])])],1),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-left",staticStyle:{"padding-left":"40px"}},[a("span",[t._v(t._s(e.des))])])],1)],1)])])})],2)],1)],1),a("v-layout",{attrs:{row:"","mb-4":""}},[a("v-flex",[a("v-card",{attrs:{elevation:"0"}},[a("v-card-text",[a("div",{staticClass:"panal"},[a("v-divider"),a("h3",{staticClass:"headline mb-0 text-xs-left"},[t._v("Skills")]),a("v-divider")],1)]),t._l(t.skills,function(e){return a("v-card-title",{key:e.index,staticStyle:{"padding-left":"20px","padding-bottom":"0px"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-left",staticStyle:{"align-self":"center","margin-right":"5px"},attrs:{xs2:""}},[a("span",[t._v(t._s(e.name))])]),a("v-flex",{staticClass:"text-xs-left",staticStyle:{"align-self":"center"}},[a("v-rating",{attrs:{"half-increments":"",readonly:""},model:{value:e.rate,callback:function(a){t.$set(e,"rate",a)},expression:"skill.rate"}})],1)],1)],1)})],2)],1)],1)],1)},Y=[],tt=(a("37ce"),{name:"career-info",data:function(){return{name:"",jobTitle:"",dob:"",phone:"",addr:"",email:"",github:"",education:[],expSums:[],workingExp:[],skills:[],petProjects:[],habbits:[],companyName:""}},created:function(){this.name="Nguyễn Thái Hoàng",this.jobTitle="Sernior Automation QC",this.dob="06 Jan 1985",this.phone="0905815657",this.addr="Thạnh Mỹ Lợi apartment, District 2, Ho Chi Minh city",this.email="thaihoang85@gmail.com",this.github="https://github.com/tindecken",this.education.push("2003 – 2007: Student of Information Technical Department of Hue Science University.","2004 – 2005: Study ACNA – Computer network at Hue Aptech.","2007 – 2008: Study CCNA of Hue Cisco Network Institute (Mark: 987/1000).","2010 – 2011: Study Linux LPI 1, 2 & Advanced at Nhat Nghe Networking Traning Center, HCM City. Checkout my stick thread about OpenVPN on Nhat Nghe's forum <a href='http://forum.nhatnghe.com/showthread.php?t=136475' target='_blank' rel='noopener noreferrer'>http://forum.nhatnghe.com/showthread.php?t=136475</a>"),this.expSums.push("Five years of experience in software development.","Good knowledge in automation testing.","Strong on System administration (both Linux & Windows)","Have knowledge at many area: hardware, software, network…","Strong knowledge on Hosting, Domain, VPS","Able to develop automation framework, website, desktop application for work","Family with source control: GIT, SVN","Family with bug tracking system: Jira, VSTS, HP QC"),this.petProjects.push({name:"Reminder Tool",link:"https://tindecken.github.io/ReminderTool2",des:"A simple remider tool built on VueJS, ElectronJS"},{name:"Automation Test Case Management",link:"https://github.com/tindecken/element-tcm",des:"In developing Automation Test Case Management Tool build on VueJS (Vue CLI 3), ElectronJS, PouchDB, ElementUI"}),this.workingExp.push({from:"October 2015",to:"Present",jobTitle:"Senior Automation Tester",companyName:"EZIT Solutions Corporation (<a href='http://www.ezitsol.com' target='_blank' rel='noopener noreferrer'>http://www.ezitsol.com/</a>)",jobDes:["Develop Selenium Automation Framework (including: Java, C#, Maven, SikuliX, TestNG, Electron App, Build JarRunAble for deployment on Azure Cloud).","Maintenance and Develop UFT(QTP) Automation Framework","Develop automation test case both UFT and Selenium","Deploy Load Test with Jmeter (including distributed testing)","Deploy RestAPI testing with SOAP UI","CI configuration on Microsoft Azure.","Integrate Appium in to Selenium Automation Framework for testing on Emulator and Real device","Training new member about Automation, GIT"],jobAchivements:["Employee of year 2016 (QC Team)","EZIT Point Award on 2018"]},{from:"January 2013",to:"October 2015",jobTitle:"Automation Prime & Lab Prime",companyName:"TMA Solutions Corporation (<a href='http://tma.com.vn' target='_blank' rel='noopener noreferrer'>http://tma.com.vn</a>)",jobDes:["Manage automation team (team size: 3).","Created planning, working QC process.","Supported technical and help team member troubleshoot issues.","Collected reports and reported current progress to upper level manager.","Manage VMWare system (Vsphere Client, Vcenter, setup and configure RAID …), manage all Testing devices in team.","CI configuratiabout Automation, GIT"],jobAchivements:["Promote to Automation Leader after one year.","Promote to Lab Prime after one year."]},{from:"March 2010",to:"Oct 2012",jobTitle:"System Engineer",companyName:"VNG Corporation (<a href='http://vng.com.vn' target='_blank' rel='noopener noreferrer'>http://vng.com.vn</a>)",jobDes:["Improve technical support for the platform and game products.","24/7 monitoring & maintenance all most systems of VNG.","Comply with operation process/policy & SLA.","Follow of the process of ITIL.","Work at Service Desk Department for single contact point."],jobAchivements:["Build load balancing & failover for servers with Heartbeat technology.","Build MRTG system (monitoring CCU of almost games) using MySQL database & Perl script."]},{from:"March 2009",to:"March 2010",jobTitle:"Datacenter Administration & IT Supporter",companyName:"PA Vietnam (<a href='http://pavietnam.vn' target='_blank' rel='noopener noreferrer'>http://pavietnam.vn</a>)",jobDes:["At PA Vietnam datacenter: build Cacti, MRTG, IPMonitor for monitoring almost server; config virtual IP for the transport from all colocation server (at Viettel, FPT, VDC) to PA Vietnam Datacenter.","At Software support department: support customer over call center, support ticket about all service at PA Vietnam: hosting, domain, vps, dedicated server, mail server; monitoring & backup over 30 servers."],jobAchivements:["Many times got highest support to customers/month."]}),this.skills.push({name:"Selenium",rate:3.5},{name:"UFT",rate:3.5},{name:"Java",rate:3},{name:"C#",rate:3},{name:"NodeJS",rate:2},{name:"VueJS",rate:2.5},{name:"ElectronJS",rate:2.5},{name:"Linux",rate:2.5})}}),et=tt,at=(a("7c2d"),a("99d9")),rt=a("ce7e6"),nt=a("1d4d"),it=Object(v["a"])(et,X,Y,!1,null,"31702db6",null);it.options.__file="CareerInfo.vue";var ot=it.exports;f()(it,{VCard:W["a"],VCardText:at["a"],VCardTitle:Q["a"],VContainer:K["a"],VDivider:rt["a"],VFlex:g["a"],VIcon:E["a"],VLayout:y["a"],VRating:nt["a"]});var st={name:"home",components:{PersonalInfo:Z,CareerInfo:ot},data:function(){return{}},created:function(){this.checkCurrentLogin()},methods:Object(s["a"])({},Object(l["b"])("user",{login:"login",logout:"logout"}),{backToLogin:function(){this.$router.push("/")},print:function(){return window.print(),!1},checkCurrentLogin:function(){console.log("this.loggedIn",this.loggedIn),this.loggedIn||"/"===this.$router.path?this.loggedIn&&this.$router.push("/cv"):this.$router.push("/")}}),computed:Object(s["a"])({},Object(l["c"])({loggedIn:"user/loggedIn",error_message:"user/error_message"}))},lt=st,ct=(a("8b71"),Object(v["a"])(lt,J,R,!1,null,null,null));ct.options.__file="Home.vue";var dt=ct.exports;f()(ct,{VBtn:h["a"],VContainer:K["a"],VFlex:g["a"],VIcon:E["a"],VLayout:y["a"]}),r["a"].use(V["a"]);var ut=new V["a"]({mode:"history",base:"/",routes:[{path:"/",name:"Login",component:H},{path:"/cv",name:"Home",component:dt},{path:"*",redirect:"/"}]}),mt=(a("ac6a"),a("96cf"),a("3b8d")),vt=a("bd86"),pt=a("c23d"),ft=a.n(pt);a("b7aa"),a("e89a");ft.a.initializeApp({apiKey:"AIzaSyDgg_Odpwlpzi-rQAhZCBiHaOBWdMGKf9s",authDomain:"tind-61.firebaseapp.com",databaseURL:"https://tind-61.firebaseio.com",projectId:"tind-61",storageBucket:"tind-61.appspot.com",messagingSenderId:"348922098198"});var ht=ft.a,gt=ht.firestore(),bt={timestampsInSnapshots:!0};gt.settings(bt);var yt,xt=gt,_t="SET_LOGIN",kt="SET_LOGOUT",Ct="SET_ERROR_MESSAGE",wt={loggedIn:!1,error_message:""},St={loggedIn:function(t){return t.loggedIn},error_message:function(t){return t.error_message}},Tt=(yt={},Object(vt["a"])(yt,_t,function(t,e){t.loggedIn=e}),Object(vt["a"])(yt,Ct,function(t,e){t.error_message=e}),Object(vt["a"])(yt,kt,function(t){t.loggedIn=!1}),yt),It={login:function(){var t=Object(mt["a"])(regeneratorRuntime.mark(function t(e,a){var r,n;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(5===a.length){t.next=2;break}return t.abrupt("return");case 2:return e.commit(Ct,""),r=[],n=xt.collection("keys"),t.next=7,n.get().then(function(t){t.forEach(function(t){r=t.data().keys})});case 7:-1!==r.indexOf(a)?(e.commit(_t,!0),sessionStorage.setItem("loggedIn",!0),ut.push("/cv")):(sessionStorage.removeItem("loggedIn"),e.commit(_t,!1),e.commit(Ct,"Invalid key, try again."));case 8:case"end":return t.stop()}},t,this)}));function e(e,a){return t.apply(this,arguments)}return e}(),logout:function(){var t=Object(mt["a"])(regeneratorRuntime.mark(function t(e){var a;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:a=e.commit,a(kt),sessionStorage.removeItem("loggedIn");case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},jt={namespaced:!0,state:wt,getters:St,mutations:Tt,actions:It},Vt={theme:"dark"},At={theme:function(t){return t.theme}},Ot={changeTheme:function(t,e){"light"===t.theme?t.theme="dark":t.theme="light"}},Pt={changeTheme:function(t,e){var a=t.commit;a("changeTheme",e)}},Mt={namespaced:!0,state:Vt,getters:At,mutations:Ot,actions:Pt},Lt=a("0e44");r["a"].use(l["a"]);var Nt=new l["a"].Store({plugins:[Object(Lt["a"])()],modules:{user:jt,global:Mt}}),Et=Nt,Dt=a("1dce"),Ft=a.n(Dt),Ht=a("98c9"),Jt=a("5f30"),Rt=a.n(Jt),$t=a("9483");Object($t["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),r["a"].use(Ht["a"]),r["a"].use(Rt.a),r["a"].use(Ft.a),r["a"].config.productionTip=!1,new r["a"]({router:ut,store:Et,render:function(t){return t(j)}}).$mount("#app")},"5dc4":function(t,e,a){"use strict";var r=a("ceb7"),n=a.n(r);n.a},"7c2d":function(t,e,a){"use strict";var r=a("2479"),n=a.n(r);n.a},"8b71":function(t,e,a){"use strict";var r=a("e186"),n=a.n(r);n.a},9187:function(t,e,a){},b1f9:function(t,e,a){"use strict";var r=a("9187"),n=a.n(r);n.a},ceb7:function(t,e,a){},e186:function(t,e,a){}});
//# sourceMappingURL=app.52a92a4b.js.map