(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[112],{59112:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>x});var i=n(34001),r=n(57749),l=n(42800),a=n.n(l);n(83946);var o=n(74466),s=n(76677),d=n(3961),c=n(35837);let u={dateTimeDelimiter:/[T ]/,timeZoneDelimiter:/[Z ]/i,timezone:/([Z+-].*)$/},m=/^-?(?:(\d{3})|(\d{2})(?:-?(\d{2}))?|W(\d{2})(?:-?(\d{1}))?|)$/,h=/^(\d{2}(?:[.,]\d*)?)(?::?(\d{2}(?:[.,]\d*)?))?(?::?(\d{2}(?:[.,]\d*)?))?$/,g=/^([+-])(\d{2})(?::?(\d{2}))?$/;function f(e){return e?parseInt(e):1}function p(e){return e&&parseFloat(e.replace(",","."))||0}let v=[31,null,31,30,31,30,31,31,30,31,30,31];function b(e){return e%400==0||e%4==0&&e%100!=0}var w=n(41593);class y extends a().GridLayer{createTile(e){let t=document.createElement("div");if(t.style.width="100%",t.style.height="100%",t.style.border="1px solid rgba(0,0,0,0.1)",t.style.position="relative",(e.x+e.y)%3==0){let e=document.createElement("div");e.style.position="absolute",e.style.top="50%",e.style.left="50%",e.style.width="10px",e.style.height="10px",e.style.transform="translate(-50%, -50%)",e.innerHTML='<svg width="10" height="10" viewBox="0 0 10 10">\n        <path d="M5,0 L5,10 M0,5 L10,5" stroke="rgba(0,0,0,0.3)" stroke-width="1"/>\n      </svg>',t.appendChild(e)}return t}}function x(e){let{flightPath:t,abnormalLocations:n,droneName:l="Drone"}=e,s=(0,r.useRef)(null),d=(0,r.useRef)(null);return(0,r.useEffect)(()=>{if(!d.current)return;if(!s.current){let e=t.points.length>0?[t.points[0].lat,t.points[0].lng]:[40.7128,-74.006];s.current=a().map(d.current).setView(e,13),a().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',maxZoom:19}).addTo(s.current),new y({tileSize:128,opacity:.2}).addTo(s.current)}let e=s.current;e.eachLayer(t=>{(t instanceof a().Marker||t instanceof a().Polyline)&&e.removeLayer(t)});let i=new Map;t.points.forEach(e=>{var t;i.has(e.mission)||i.set(e.mission,[]),null===(t=i.get(e.mission))||void 0===t||t.push(new(a()).LatLng(e.lat,e.lng))});let r=["#2563eb","#9333ea","#db2777"];if(i.forEach((t,n)=>{let i=n%r.length;a().polyline(t,{color:r[i],weight:3,opacity:.8,dashArray:"5, 10"}).addTo(e)}),t.chargingPointIndices.forEach(n=>{let i=t.points[n];if(i){let t=a().divIcon({html:'<div class="flex items-center justify-center w-full h-full">\n                   <div class="h-3 w-3 bg-green-500 rounded-full border border-white shadow-lg"></div>\n                 </div>',className:"charging-point-marker",iconSize:[20,20],iconAnchor:[10,10]});a().marker([i.lat,i.lng],{icon:t}).addTo(e).bindTooltip("Charging Event<br>Mission: ".concat(i.mission+1,"<br>Time: ").concat(N(i.timestamp)),{className:"bg-white text-black p-2 rounded shadow-md text-xs"})}}),t.points.length>0){let n=t.points[t.points.length-1],i=a().divIcon({html:'<div class="flex items-center justify-center">\n                 <div class="h-4 w-4 bg-blue-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center animate-pulse">\n                   <div class="h-1 w-1 bg-white rounded-full"></div>\n                 </div>\n               </div>',className:"drone-marker",iconSize:[24,24],iconAnchor:[12,12]});a().marker([n.lat,n.lng],{icon:i}).addTo(e).bindTooltip("".concat(l,"<br>Latest Position<br>Mission: ").concat(n.mission+1,"<br>Time: ").concat(N(n.timestamp)),{className:"bg-white text-black p-2 rounded shadow-md text-xs"})}if(n.forEach(t=>{var n,i;let r="amber",o=3,s="";void 0!==t.voltage&&t.voltage<30&&(r="red",o=4,s+="Low Voltage: ".concat(null===(n=t.voltage)||void 0===n?void 0:n.toFixed(1),"V<br>")),void 0!==t.heat&&t.heat>70&&(r="red",o=4,s+="High Heat: ".concat(null===(i=t.heat)||void 0===i?void 0:i.toFixed(1),"\xb0C<br>"));let d='<div class="flex items-center justify-center w-full h-full">\n                          <div class="h-'.concat(o," w-").concat(o," bg-").concat(r,'-500 rounded-full border border-white shadow-lg"></div>\n                        </div>'),c=a().divIcon({html:d,className:"abnormal-point-marker",iconSize:[20,20],iconAnchor:[10,10]});a().marker([t.lat,t.lng],{icon:c}).addTo(e).bindTooltip("".concat(l,"<br>Abnormal Reading<br>").concat(s,"Time: ").concat(N(t.timestamp)),{className:"bg-white text-black p-2 rounded shadow-md text-xs"})}),t.points.length>0){let n=a().latLngBounds(t.points.map(e=>[e.lat,e.lng]));e.fitBounds(n,{padding:[50,50]})}let o=a().Control.extend({onAdd:function(){let e=a().DomUtil.create("div","legend bg-white p-2 rounded shadow-md text-xs");return e.innerHTML='<div class="font-bold mb-1">Missions</div>',i.forEach((t,n)=>{let i=n%r.length;e.innerHTML+='\n            <div class="flex items-center mb-1">\n              <div class="h-2 w-5 mr-1" style="background-color: '.concat(r[i],'"></div>\n              <span>Mission ').concat(n+1,"</span>\n            </div>\n          ")}),e.innerHTML+='\n          <div class="mt-2 font-bold">Markers</div>\n          <div class="flex items-center mb-1">\n            <div class="h-2 w-2 mr-1 rounded-full bg-green-500"></div>\n            <span>Charging</span>\n          </div>\n          <div class="flex items-center">\n            <div class="h-2 w-2 mr-1 rounded-full bg-amber-500"></div>\n            <span>Voltage/Heat Anomaly</span>\n          </div>\n        ',e}});document.querySelectorAll(".legend").forEach(e=>e.remove());let c=new o;return c.setPosition("bottomright"),c.addTo(e),()=>{}},[t,n,l]),(0,i.jsx)("div",{className:(0,o.cn)("h-full w-full rounded-md border overflow-hidden"),ref:d})}function N(e){try{let t=function(e,t){var n;let i,r;let l=()=>(0,d.w)(void 0,NaN),a=(n=void 0,void 0!==n)?n:2,o=function(e){let t;let n={},i=e.split(u.dateTimeDelimiter);if(i.length>2)return n;if(/:/.test(i[0])?t=i[0]:(n.date=i[0],t=i[1],u.timeZoneDelimiter.test(n.date)&&(n.date=e.split(u.timeZoneDelimiter)[0],t=e.substr(n.date.length,e.length))),t){let e=u.timezone.exec(t);e?(n.time=t.replace(e[1],""),n.timezone=e[1]):n.time=t}return n}(e);if(o.date){let e=function(e,t){let n=RegExp("^(?:(\\d{4}|[+-]\\d{"+(4+t)+"})|(\\d{2}|[+-]\\d{"+(2+t)+"})$)"),i=e.match(n);if(!i)return{year:NaN,restDateString:""};let r=i[1]?parseInt(i[1]):null,l=i[2]?parseInt(i[2]):null;return{year:null===l?r:100*l,restDateString:e.slice((i[1]||i[2]).length)}}(o.date,a);i=function(e,t){if(null===t)return new Date(NaN);let n=e.match(m);if(!n)return new Date(NaN);let i=!!n[4],r=f(n[1]),l=f(n[2])-1,a=f(n[3]),o=f(n[4]),s=f(n[5])-1;if(i)return o>=1&&o<=53&&s>=0&&s<=6?function(e,t,n){let i=new Date(0);i.setUTCFullYear(e,0,4);let r=i.getUTCDay()||7;return i.setUTCDate(i.getUTCDate()+((t-1)*7+n+1-r)),i}(t,o,s):new Date(NaN);{let e=new Date(0);return l>=0&&l<=11&&a>=1&&a<=(v[l]||(b(t)?29:28))&&r>=1&&r<=(b(t)?366:365)?(e.setUTCFullYear(t,l,Math.max(r,a)),e):new Date(NaN)}}(e.restDateString,e.year)}if(!i||isNaN(+i))return l();let w=+i,y=0;if(o.time&&isNaN(y=function(e){let t=e.match(h);if(!t)return NaN;let n=p(t[1]),i=p(t[2]),r=p(t[3]);return(24===n?0===i&&0===r:r>=0&&r<60&&i>=0&&i<60&&n>=0&&n<25)?n*s.s0+i*s.Cg+1e3*r:NaN}(o.time)))return l();if(o.timezone){if(isNaN(r=function(e){if("Z"===e)return 0;let t=e.match(g);if(!t)return 0;let n="+"===t[1]?-1:1,i=parseInt(t[2]),r=t[3]&&parseInt(t[3])||0;return r>=0&&r<=59?n*(i*s.s0+r*s.Cg):NaN}(o.timezone)))return l()}else{let e=new Date(w+y),t=(0,c.a)(0,void 0);return t.setFullYear(e.getUTCFullYear(),e.getUTCMonth(),e.getUTCDate()),t.setHours(e.getUTCHours(),e.getUTCMinutes(),e.getUTCSeconds(),e.getUTCMilliseconds()),t}return(0,c.a)(w+y+r,null==t?void 0:t.in)}(e);return(0,w.GP)(t,"HH:mm:ss")}catch(e){return console.error("Error formatting timestamp:",e),"Unknown time"}}},83946:()=>{}}]);