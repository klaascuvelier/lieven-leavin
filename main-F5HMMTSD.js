import{a as T}from"./chunk-JZCF7BGW.js";import{a as C,b as c,d as y,e as z,g as M,h as E}from"./chunk-5PEYB6A4.js";import{l as w,n as S}from"./chunk-ALSQQQB2.js";import{Ja as f,La as b,Ma as x,Pa as r,Qa as o,R as g,Ra as l,T as u,Ua as v,Ya as d,a as p,ab as k,o as h,u as m,ya as s}from"./chunk-2A4GZZHU.js";var L=[{path:"home",loadComponent:()=>import("./chunk-ARDPUOJH.js").then(e=>e.HomescreenContainer)},{path:"photos",loadComponent:()=>import("./chunk-PTOHXPXX.js").then(e=>e.PhotosContainer),children:[{path:"list",loadComponent:()=>import("./chunk-4MCVVYYQ.js").then(e=>e.PhotoListComponent),data:{statusBar:{background:"#fff",color:"#000"}}},{path:"detail/:id",loadComponent:()=>import("./chunk-OSK73XMO.js").then(e=>e.PhotoDetailComponent),data:{statusBar:{background:"#f8f8f8",color:"#000"}}},{path:"**",redirectTo:"list"}]},{path:"youtube",loadComponent:()=>import("./chunk-JRVNRURV.js").then(e=>e.YoutubeContainer),data:{statusBar:{background:"#000",color:"#fff"}}},{path:"slack",loadComponent:()=>import("./chunk-ZJLWYUFA.js").then(e=>e.SlackContainer),data:{statusBar:{background:"#000",color:"#fff"}}},{path:"showpad",loadComponent:()=>import("./chunk-RQIPKOM5.js").then(e=>e.ShowpadContainer),data:{statusBar:{background:"#f8f8f8",color:"#000"}}},{path:"safari",loadComponent:()=>import("./chunk-6BNKQI4Q.js").then(e=>e.SafariContainer),data:{statusBar:{background:"#fff",color:"#000"}}},{path:"mail",loadComponent:()=>import("./chunk-YZEZSDZP.js").then(e=>e.MailContainer),data:{statusBar:{background:"#f8f8f8",color:"#000"}}},{path:"settings",loadComponent:()=>import("./chunk-CEW5EOJT.js").then(e=>e.SettingBaseComponent),children:[{path:"",loadComponent:()=>import("./chunk-GPMJ3Z6E.js").then(e=>e.SettingsContainer),data:{statusBar:{background:"#fefefe",color:"#000"}}},{path:"profile",loadComponent:()=>import("./chunk-NKJJMW27.js").then(e=>e.ProfileContainer),data:{statusBar:{background:"#f8f8f8",color:"#000"}}},{path:"cell",loadComponent:()=>import("./chunk-7PLY6V5S.js").then(e=>e.SettingCellComponent),data:{statusBar:{background:"#fefefe",color:"#000"}}},{path:"general",loadComponent:()=>import("./chunk-TXT6XX4Z.js").then(e=>e.SettingGeneralComponent),data:{statusBar:{background:"#fefefe",color:"#000"}}}]},{path:"notes",loadComponent:()=>import("./chunk-3ZL6FXJ2.js").then(e=>e.NotesComponent),data:{statusBar:{background:"#f8f8f8",color:"#000"}}},{path:"**",redirectTo:"home"}];var V={providers:[M(L)]};function j(e,t){e&1&&(r(0,"div",5),l(1,"iframe",6),o())}var H=(()=>{let t=class t{constructor(){this.router=g(z),this.statusBar$=this.router.events.pipe(m(i=>i instanceof c),h(i=>{let n=this.router.routerState.root,a="";for(;n.firstChild;)n=n.firstChild;return p({color:"#fff",background:"#000"},n.snapshot.data.statusBar)})),this.clickCounter=0,this.statusBar=T(this.statusBar$),this.specialTrick=!1,this.router.events.pipe(m(i=>i instanceof c)).subscribe(()=>{this.clickTimer&&window.clearTimeout(this.clickTimer)})}onHomebuttonClick(){if(!this.specialTrick){if(this.clickTimer&&window.clearTimeout(this.clickTimer),this.clickCounter++,this.clickCounter===3){this.specialTrick=!0;return}this.clickTimer=window.setTimeout(()=>{this.clickCounter=0,this.router.navigate(["/"])},300)}}};t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=u({type:t,selectors:[["lieven-leavin-root"]],standalone:!0,features:[k],decls:11,vars:2,consts:[["src","./assets/iphone.png","alt",""],[2,"background-image","url('./assets/wallpaper.jpg')"],[3,"ngStyle"],["class","overlay"],[1,"homebutton",3,"click"],[1,"overlay"],["width","100%","height","100%","src","https://www.youtube.com/embed/-bzWSJG93P8?autoplay=1","title","","frameBorder","0","allowFullScreen","","au",""]],template:function(n,a){n&1&&(l(0,"img",0),r(1,"section",1)(2,"header",2)(3,"div"),d(4,"Showpad"),o(),r(5,"div"),d(6,"9:41"),o()(),r(7,"main"),l(8,"router-outlet"),b(9,j,2,0,"div",3),o()(),r(10,"button",4),v("click",function(){return a.onHomebuttonClick()}),o()),n&2&&(s(2),f("ngStyle",a.statusBar()),s(7),x(9,a.specialTrick?9:-1))},dependencies:[E,y,S,w],styles:["img[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);height:100vh;z-index:0}section[_ngcontent-%COMP%]{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:43.4061135371vh;height:65.2401746725vh;background:#fff no-repeat center center;background-size:cover;z-index:1}header[_ngcontent-%COMP%]{height:3%;display:flex;flex-direction:row;justify-content:space-between;align-items:center;padding:1%;background:#000000;color:#fff;font-size:12px;cursor:default}main[_ngcontent-%COMP%]{height:97%}.homebutton[_ngcontent-%COMP%]{position:absolute;left:50%;transform:translate(-50%);bottom:5%;display:block;width:10vh;height:10vh;border-radius:100%;background:transparent;border:none;cursor:pointer;z-index:1}.overlay[_ngcontent-%COMP%]{position:absolute;inset:0;background:pink;z-index:5}"]});let e=t;return e})();C(H,V).catch(e=>console.error(e));
