(function(t){function e(e){for(var n,i,o=e[0],c=e[1],u=e[2],h=0,f=[];h<o.length;h++)i=o[h],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&f.push(s[i][0]),s[i]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);l&&l(e);while(f.length)f.shift()();return r.push.apply(r,u||[]),a()}function a(){for(var t,e=0;e<r.length;e++){for(var a=r[e],n=!0,o=1;o<a.length;o++){var c=a[o];0!==s[c]&&(n=!1)}n&&(r.splice(e--,1),t=i(i.s=a[0]))}return t}var n={},s={app:0},r=[];function i(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=t,i.c=n,i.d=function(t,e,a){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(a,n,function(e){return t[e]}.bind(null,n));return a},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/weather-app/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var u=0;u<o.length;u++)e(o[u]);var l=c;r.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"07ea":function(t,e,a){},"0d0e":function(t,e,a){"use strict";a("5791")},"17a3":function(t,e,a){},"1d05":function(t,e,a){},"2fa3":function(t,e,a){"use strict";a("35be")},"33fb":function(t,e,a){"use strict";a("1d05")},"35be":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d"),a("4de4");var n=a("2b0e"),s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",[a("router-view")],1)},r=[],i={name:"App",components:{}},o=i,c=a("2877"),u=Object(c["a"])(o,s,r,!1,null,null,null),l=u.exports,h=a("8c4f"),f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app",style:t.loading?"height: 100vh":"height: auto"},[a("dot-loader",{attrs:{color:"#e7e7eb",size:100,loading:t.loading,margin:"0 8px"}}),!1===t.loading?a("div",{staticClass:"todayWeather-container"},[a("browser",{attrs:{left:t.openBrowser,history:t.history},on:{close:t.toogleBrowser,search:t.searchLocation}}),a("today-weather",{attrs:{weather:t.weatherInfo,celsius:t.celsius},on:{open:t.toogleBrowser,currentWeather:t.searchCurrentWeather}})],1):t._e(),!1===t.loading?a("main",[a("degrees",{staticClass:"degrees",attrs:{celsius:t.celsius},on:{fahrenheit:t.convertToFahrenheit,celsius:t.convertToCelsius}}),a("div",{staticClass:"future-weather"},t._l(t.weatherInfo.consolidated_weather.slice(1),(function(e,n){return a("weather-card",{key:e.id,staticClass:"future-card",attrs:{min:e.min_temp,max:e.max_temp,img:e.weather_state_name,aplicable_date:0===n?"Tomorrow":e.applicable_date,celsius:t.celsius}})})),1),a("h2",{staticClass:"title"},[t._v("Today's Highlights")]),a("div",{staticClass:"today-highlights"},[a("wind-status",{attrs:{"wind-speed":t.weatherInfo.consolidated_weather[0].wind_speed}}),a("humidity",{attrs:{humidity:t.weatherInfo.consolidated_weather[0].humidity}}),a("basic-card",{attrs:{name:"Visibility",number:t.weatherInfo.consolidated_weather[0].visibility,magnitude:"miles"}}),a("basic-card",{attrs:{name:"Air Pressure",number:t.weatherInfo.consolidated_weather[0].air_pressure,magnitude:"mb"}})],1),a("px-footer")],1):t._e()],1)},d=[],p=a("5530"),m=(a("caad"),a("2532"),a("d81d"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"highlights"},[a("div",{staticClass:"actions"},[a("button",{on:{click:function(e){return t.$emit("open")}}},[t._v("Search for places")]),a("button",{staticClass:"current-weather",on:{click:function(e){return t.$emit("currentWeather")}}},[a("img",{staticClass:"target",attrs:{src:"assets/target.svg",alt:"target"}})])]),a("div",{staticClass:"highlights-details"},[a("img",{staticClass:"weather-img",attrs:{src:"assets/"+t.weather.consolidated_weather[0].weather_state_name.replace(" ","")+".png",alt:"weather image"}}),a("p",{staticClass:"white temp"},[t._v(" "+t._s(t.weather.consolidated_weather[0].the_temp.toFixed(0))),a("span",{staticClass:"magnitude"},[t._v(t._s(t.celsius?"°C":"°F"))])]),a("h3",{staticClass:"small-text"},[t._v(" "+t._s(t.weather.consolidated_weather[0].weather_state_name)+" ")]),a("p",{staticClass:"small-text"},[t._v(" Today • "+t._s(t._f("date")(t.weather.consolidated_weather[0].applicable_date))+" ")]),a("p",{staticClass:"small-text",attrs:{id:"location"}},[t._v(" "+t._s(t.weather.title)+" "),a("span",{staticClass:"location-logo"})])])])}),_=[],v={name:"TodayWeather",props:{weather:{type:Object,default:function(){}},celsius:{type:Boolean,default:!0}}},w=v,g=(a("75af"),Object(c["a"])(w,m,_,!1,null,"01fff72a",null)),y=g.exports,b=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",{staticClass:"normal-text"},[t._v("Wind status")]),a("p",{staticClass:"wind-status",attrs:{id:"windStatus"}},[t._v(" "+t._s(t.windSpeed.toFixed(1))),a("span",{staticClass:"magnitude"},[t._v("mph")])]),a("p",{staticClass:"normal-text"},[t._v("WSW")])])},C=[],x=(a("a9e3"),{name:"WindStatus",props:{windSpeed:{type:Number,default:0}}}),W=x,j=(a("33fb"),Object(c["a"])(W,b,C,!1,null,"33cf3284",null)),O=j.exports,S=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",{staticClass:"normal-text font-white"},[t._v("Humidity")]),a("p",{staticClass:"humidity font-white"},[t._v(" "+t._s(t.humidity)),a("span",{staticClass:"humidity-percentage-symbol"},[t._v("%")])]),t._m(0),a("div",{staticClass:"humidity-percentage-container"},[a("div",{staticClass:"humidity-percentage",style:"width: "+t.humidity+"%"})]),a("p",{staticClass:"percentage-symbol"},[t._v("%")])])},$=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"percentage-scale"},[a("p",[t._v("0")]),a("p",[t._v("50")]),a("p",[t._v("100")])])}],T={name:"Humidity",props:{humidity:{type:Number,default:0}}},k=T,F=(a("5a84"),Object(c["a"])(k,S,$,!1,null,"29ceb0ed",null)),E=F.exports,I=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},B=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("p",[t._v(" created by "),a("a",{attrs:{href:"https://github.com/C-137DTS",target:"_blank"}},[t._v("C-137DTS")]),t._v(" - devChallenges.io ")])])}],P={name:"PxFooter"},q=P,H=(a("9eaf"),Object(c["a"])(q,I,B,!1,null,"5dbc44e4",null)),L=H.exports,D=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container"},[a("p",{staticClass:"name"},[t._v(t._s(t.name))]),a("p",{staticClass:"weather"},[t._v(" "+t._s(t.number>999?t.number.toFixed(0):t.number.toFixed(1))),a("span",{staticClass:"magnitude"},[t._v(" "+t._s(t.magnitude)+" ")])])])},N=[],A={name:"basic-card",props:{name:{type:String,default:""},number:{type:Number,default:0},magnitude:{type:String,default:""}}},M=A,J=(a("7f9f"),Object(c["a"])(M,D,N,!1,null,"6222a2d7",null)),V=J.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"search",style:t.left?"left: 0":"left: -327px"},[a("button",{staticClass:"closeButton",on:{click:t.close}},[t._v("X")]),a("div",{staticClass:"search__actions"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.query,expression:"query"}],attrs:{type:"text",placeholder:"🔍 Search location"},domProps:{value:t.query},on:{input:function(e){e.target.composing||(t.query=e.target.value)}}}),a("button",{staticClass:"button",on:{click:t.search}},[t._v("Search")])]),t._l(t.history,(function(e,n){return a("history-item",{key:n,attrs:{name:e},on:{searchLocation:t.searchLocation}})}))],2)},X=[],G=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{on:{click:function(e){return t.$emit("searchLocation",t.name)}}},[t._v(" "+t._s(t.name)+" ")])},K=[],Q={name:"HistoryItem",props:{name:{type:String,default:""}}},R=Q,U=(a("0d0e"),Object(c["a"])(R,G,K,!1,null,"4b74148e",null)),Y=U.exports,Z={name:"browser",components:{HistoryItem:Y},props:{left:{type:Boolean,default:!1},history:{type:Array,default:function(){return[]}}},data:function(){return{query:""}},methods:{search:function(){this.$emit("search",this.query),this.query=""},searchLocation:function(t){this.$emit("search",t),this.query=""},close:function(){this.$emit("close")}}},tt=Z,et=(a("a15d"),Object(c["a"])(tt,z,X,!1,null,"fb3b2584",null)),at=et.exports,nt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"futureWeather__card"},["Tomorrow"==t.aplicable_date?a("p",{staticClass:"futureWeather__card--day"},[t._v(" "+t._s(t.aplicable_date)+" ")]):a("p",{staticClass:"futureWeather__card--day"},[t._v(t._s(t._f("date")(t.aplicable_date)))]),a("img",{staticClass:"futureWeather__card--img",attrs:{src:"assets/"+t.img.replace(" ","")+".png",alt:"weather"}}),a("div",{staticClass:"temps"},[a("p",{staticClass:"futureWeather__card--temperature"},[t._v(" "+t._s(t.min.toFixed(1))),a("span",[t._v(t._s(t.celsius?"°C":"°F"))])]),a("p",{staticClass:"futureWeather__card--temperature max-temp"},[t._v(" "+t._s(t.max.toFixed(1))),a("span",[t._v(t._s(t.celsius?"°C":"°F"))])])])])},st=[],rt={name:"WeatherCard",props:{min:{type:Number,default:0},img:{type:String,default:""},aplicable_date:{type:String,default:""},max:{type:Number,default:0},celsius:{type:Boolean,default:!0}}},it=rt,ot=(a("5cc5"),Object(c["a"])(it,nt,st,!1,null,"4440b5df",null)),ct=ot.exports,ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"degrees"},[a("button",{class:{activate:t.celsius},on:{click:function(e){return t.$emit("celsius")}}},[t._v("°C")]),a("button",{class:{activate:!t.celsius},on:{click:function(e){return t.$emit("fahrenheit")}}},[t._v(" °F ")])])},lt=[],ht={name:"Degrees",props:{celsius:{type:Boolean,default:!0}}},ft=ht,dt=(a("d060"),Object(c["a"])(ft,ut,lt,!1,null,"009248d4",null)),pt=dt.exports;a("d3b7"),a("99af");function mt(t){var e="https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/".concat(t,"/");return fetch(e).then((function(t){return t.json()})).then((function(t){return t}))}function _t(t,e){var a="https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location/search/?lattlong=".concat(t,",").concat(e);return fetch(a).then((function(t){return t.json()})).then((function(t){return t[0].woeid}))}function vt(t){var e="https://cors-anywhere.herokuapp.com/https://www.metaweather.com//api/location/search/?query=".concat(t);return fetch(e).then((function(t){return t.json()})).then((function(t){return t[0].woeid}))}var wt={getWeather:mt,getWoeid:_t,getLocationWoeid:vt},gt={name:"Home",components:{TodayWeather:y,WindStatus:O,Humidity:E,PxFooter:L,BasicCard:V,Browser:at,WeatherCard:ct,Degrees:pt},data:function(){return{weatherInfo:{},openBrowser:!1,history:[],loading:!0,celsius:!0}},methods:{success:function(t){var e=this;this.loading=!0;var a=t.coords;wt.getWoeid(a.latitude,a.longitude).then((function(t){return wt.getWeather(t)})).then((function(t){e.weatherInfo=Object(p["a"])({},t),e.loading=!1}))},error:function(t){console.warn(t)},toogleBrowser:function(){this.openBrowser=!this.openBrowser},searchLocation:function(t){var e=this;this.loading=!0,this.celsius=!0,wt.getLocationWoeid(t.toLowerCase()).then((function(t){return wt.getWeather(t)})).then((function(a){e.toogleBrowser(),e.weatherInfo=Object(p["a"])({},a),e.history.includes(t)||e.history.push(t),e.loading=!1})).catch((function(t){e.$router.push("/error404"),console.warn(t)}))},searchCurrentWeather:function(){this.celsius=!0,navigator.geolocation.getCurrentPosition(this.success,this.error)},convertToFahrenheit:function(){var t=this;this.celsius&&(this.weatherInfo.consolidated_weather.map((function(e){e.the_temp=t.celsiusToFarenheit(e.the_temp),e.min_temp=t.celsiusToFarenheit(e.min_temp),e.max_temp=t.celsiusToFarenheit(e.max_temp)})),this.celsius=!1)},celsiusToFarenheit:function(t){return 1.8*t+32},convertToCelsius:function(){var t=this;this.celsius||(this.weatherInfo.consolidated_weather.map((function(e){e.the_temp=t.fahrenheitToCelsius(e.the_temp),e.min_temp=t.fahrenheitToCelsius(e.min_temp),e.max_temp=t.fahrenheitToCelsius(e.max_temp)})),this.celsius=!0)},fahrenheitToCelsius:function(t){return(t-32)/1.8}},created:function(){this.searchCurrentWeather()}},yt=gt,bt=(a("fe9c"),Object(c["a"])(yt,f,d,!1,null,"2947565a",null)),Ct=bt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("Oops... Error 404")]),a("p",[t._v("Sorry, the location you're searching dosen't exist.")]),a("router-link",{staticClass:"back-to-home",attrs:{to:"/"}},[t._v("Home")])],1)},Wt=[],jt={name:"Error404"},Ot=jt,St=(a("2fa3"),Object(c["a"])(Ot,xt,Wt,!1,null,"9cf11130",null)),$t=St.exports;n["a"].use(h["a"]);var Tt=new h["a"]({mode:"history",routes:[{path:"/",name:"Home",component:Ct},{path:"/error404",name:"Error404",component:$t,meta:{title:"About - MyApp"}}]}),kt=a("05c2");a("ac1f"),a("1276"),a("fb6a");function Ft(t){t=t.split("-");var e=parseInt(t[0]),a=parseInt(t[1]-1),n=parseInt(t[2]),s=new Date(e,a,n);return s.toDateString().slice(0,-4)}n["a"].use(kt["VueSpinners"]),n["a"].config.productionTip=!1,n["a"].filter("date",Ft),new n["a"]({router:Tt,render:function(t){return t(l)}}).$mount("#app")},5791:function(t,e,a){},"5a84":function(t,e,a){"use strict";a("82fc")},"5cc5":function(t,e,a){"use strict";a("8e6c")},"5eb3":function(t,e,a){},"75af":function(t,e,a){"use strict";a("cb49")},"7f9f":function(t,e,a){"use strict";a("5eb3")},"82fc":function(t,e,a){},"8e6c":function(t,e,a){},"8fe2":function(t,e,a){},"9eaf":function(t,e,a){"use strict";a("17a3")},a15d:function(t,e,a){"use strict";a("8fe2")},aa97:function(t,e,a){},cb49:function(t,e,a){},d060:function(t,e,a){"use strict";a("07ea")},fe9c:function(t,e,a){"use strict";a("aa97")}});
//# sourceMappingURL=app.2b766384.js.map