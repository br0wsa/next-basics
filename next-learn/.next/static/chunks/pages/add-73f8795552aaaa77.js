(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[121],{1010:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/add",function(){return n(3738)}])},3738:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return d}});var r=n(5893),o=n(7294);function d(){let e=(0,o.useRef)(),t=(0,o.useRef)(),n=n=>{n.preventDefault();let r={en:e.current.value,fr:t.current.value};fetch("/api/vocapi",{method:"POST",body:JSON.stringify(r),headers:{"Content-Type":"application/json"}}).then(e=>e.json()).then(e=>{console.log(e)}),e.current.value="",t.current.value=""};return(0,r.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",height:"100vh"},children:(0,r.jsxs)("form",{style:{backgroundColor:"#fff",borderRadius:"10px",padding:"20px",boxShadow:"0px 0px 10px #888888"},onSubmit:n,children:[(0,r.jsx)("label",{style:{display:"block",marginBottom:"10px"},htmlFor:"addEn",children:"Ajouter un mot en Anglais"}),(0,r.jsx)("input",{style:{width:"70%",padding:"10px",borderRadius:"5px",marginBottom:"20px"},ref:e,type:"text",id:"addEn"}),(0,r.jsx)("label",{style:{display:"block",marginBottom:"10px"},htmlFor:"addFr",children:"Ajouter un mot en Fran\xe7ais"}),(0,r.jsx)("input",{style:{width:"70%",padding:"10px",borderRadius:"5px",marginBottom:"20px"},ref:t,type:"text",id:"addFr"}),(0,r.jsx)("button",{style:{backgroundColor:"#00c4cc",color:"#fff",padding:"10px 20px",borderRadius:"5px",border:"none"},children:"Ajouter"})]})})}}},function(e){e.O(0,[774,888,179],function(){return e(e.s=1010)}),_N_E=e.O()}]);