"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[391],{8391:function(t,n,e){e.r(n),e.d(n,{default:function(){return d}});var c=e(2791),a=e(8596),o=e(5501),i=e(708),r=e(184),l=(0,a.Z)((function(t){return{container:{position:"fixed",top:0,left:0,width:"100%",height:"100vh",display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:t.palette.secondary.main,zIndex:1e4},content:{margin:"0 auto"}}})),s=function(t){var n=t.children,e=(0,c.useContext)(i.Z).setIsLoading,a=l();return(0,r.jsx)(o.E.div,{initial:{y:0},animate:{y:"-100vh"},transition:{delay:1,duration:.3},onAnimationComplete:function(t){e(!1)},className:a.container,children:(0,r.jsx)("div",{className:a.content,children:n})})},u=e(9133),p=e.n(u),d=function(){return(0,r.jsx)(s,{children:(0,r.jsx)(p(),{color:"#fff",speedMultiplier:"1.25"})})}},9133:function(t,n,e){var c=this&&this.__assign||function(){return c=Object.assign||function(t){for(var n,e=1,c=arguments.length;e<c;e++)for(var a in n=arguments[e])Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a]);return t},c.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(t,n,e,c){void 0===c&&(c=e);var a=Object.getOwnPropertyDescriptor(n,e);a&&!("get"in a?!n.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return n[e]}}),Object.defineProperty(t,c,a)}:function(t,n,e,c){void 0===c&&(c=e),t[c]=n[e]}),o=this&&this.__setModuleDefault||(Object.create?function(t,n){Object.defineProperty(t,"default",{enumerable:!0,value:n})}:function(t,n){t.default=n}),i=this&&this.__importStar||function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var e in t)"default"!==e&&Object.prototype.hasOwnProperty.call(t,e)&&a(n,t,e);return o(n,t),n},r=this&&this.__rest||function(t,n){var e={};for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&n.indexOf(c)<0&&(e[c]=t[c]);if(null!=t&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(t);a<c.length;a++)n.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(t,c[a])&&(e[c[a]]=t[c[a]])}return e};Object.defineProperty(n,"__esModule",{value:!0});var l=i(e(2791)),s=e(779),u=e(8945),p=e(7074);n.default=function(t){var n=t.loading,e=void 0===n||n,a=t.color,o=void 0===a?"#000000":a,i=t.speedMultiplier,d=void 0===i?1:i,f=t.cssOverride,h=void 0===f?{}:f,v=t.size,x=void 0===v?50:v,b=r(t,["loading","color","speedMultiplier","cssOverride","size"]),m=(0,u.parseLengthAndUnit)(x),y=m.value,g=m.unit,w=c({display:"inherit",position:"relative",width:(0,u.cssValue)(x),height:(0,u.cssValue)(x),transform:"rotate(165deg)"},h),F=y/5,O=(y-F)/2,j=O-F,_=(0,s.calculateRgba)(o,.75),P=(0,p.createAnimation)("HashLoader","0% {width: ".concat(F,"px; box-shadow: ").concat(O,"px ").concat(-j,"px ").concat(_,", ").concat(-O,"px ").concat(j,"px ").concat(_,"}\n    35% {width: ").concat((0,u.cssValue)(x),"; box-shadow: 0 ").concat(-j,"px ").concat(_,", 0 ").concat(j,"px ").concat(_,"}\n    70% {width: ").concat(F,"px; box-shadow: ").concat(-O,"px ").concat(-j,"px ").concat(_,", ").concat(O,"px ").concat(j,"px ").concat(_,"}\n    100% {box-shadow: ").concat(O,"px ").concat(-j,"px ").concat(_,", ").concat(-O,"px ").concat(j,"px ").concat(_,"}"),"before"),M=(0,p.createAnimation)("HashLoader","0% {height: ".concat(F,"px; box-shadow: ").concat(j,"px ").concat(O,"px ").concat(o,", ").concat(-j,"px ").concat(-O,"px ").concat(o,"}\n    35% {height: ").concat((0,u.cssValue)(x),"; box-shadow: ").concat(j,"px 0 ").concat(o,", ").concat(-j,"px 0 ").concat(o,"}\n    70% {height: ").concat(F,"px; box-shadow: ").concat(j,"px ").concat(-O,"px ").concat(o,", ").concat(-j,"px ").concat(O,"px ").concat(o,"}\n    100% {box-shadow: ").concat(j,"px ").concat(O,"px ").concat(o,", ").concat(-j,"px ").concat(-O,"px ").concat(o,"}"),"after"),C=function(t){return{position:"absolute",top:"50%",left:"50%",display:"block",width:"".concat(y/5).concat(g),height:"".concat(y/5).concat(g),borderRadius:"".concat(y/10).concat(g),transform:"translate(-50%, -50%)",animationFillMode:"none",animation:"".concat(1===t?P:M," ").concat(2/d,"s infinite")}};return e?l.createElement("span",c({style:w},b),l.createElement("span",{style:C(1)}),l.createElement("span",{style:C(2)})):null}},7074:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.createAnimation=void 0;n.createAnimation=function(t,n,e){var c="react-spinners-".concat(t,"-").concat(e);if("undefined"==typeof window||!window.document)return c;var a=document.createElement("style");document.head.appendChild(a);var o=a.sheet,i="\n    @keyframes ".concat(c," {\n      ").concat(n,"\n    }\n  ");return o&&o.insertRule(i,0),c}},779:function(t,n){var e;Object.defineProperty(n,"__esModule",{value:!0}),n.calculateRgba=void 0,function(t){t.maroon="#800000",t.red="#FF0000",t.orange="#FFA500",t.yellow="#FFFF00",t.olive="#808000",t.green="#008000",t.purple="#800080",t.fuchsia="#FF00FF",t.lime="#00FF00",t.teal="#008080",t.aqua="#00FFFF",t.blue="#0000FF",t.navy="#000080",t.black="#000000",t.gray="#808080",t.silver="#C0C0C0",t.white="#FFFFFF"}(e||(e={}));n.calculateRgba=function(t,n){if(Object.keys(e).includes(t)&&(t=e[t]),"#"===t[0]&&(t=t.slice(1)),3===t.length){var c="";t.split("").forEach((function(t){c+=t,c+=t})),t=c}var a=(t.match(/.{2}/g)||[]).map((function(t){return parseInt(t,16)})).join(", ");return"rgba(".concat(a,", ").concat(n,")")}},8945:function(t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.cssValue=n.parseLengthAndUnit=void 0;var e={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function c(t){if("number"===typeof t)return{value:t,unit:"px"};var n,c=(t.match(/^[0-9.]*/)||"").toString();n=c.includes(".")?parseFloat(c):parseInt(c,10);var a=(t.match(/[^0-9]*$/)||"").toString();return e[a]?{value:n,unit:a}:(console.warn("React Spinners: ".concat(t," is not a valid css value. Defaulting to ").concat(n,"px.")),{value:n,unit:"px"})}n.parseLengthAndUnit=c,n.cssValue=function(t){var n=c(t);return"".concat(n.value).concat(n.unit)}}}]);
//# sourceMappingURL=391.d2390051.chunk.js.map