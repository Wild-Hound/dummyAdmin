_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[13],{MDeD:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),a=n.n(r),i=n("v0uu"),o=n("hdTg"),u=n("3fz3"),s=n("/SnW"),c=n("MhZx"),l=n("zJxU"),f=n.n(l),d=n("gX1m"),h=n.n(d),m=n("vTQp");function v(e){var t=new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()));return t.setUTCFullYear(e.getFullYear()),e.getTime()-t.getTime()}function g(e,t){if(t.length<e)throw new TypeError(e+" argument"+(e>1?"s":"")+" required, but only "+t.length+" present")}function p(e){g(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===typeof e&&"[object Date]"===t?new Date(e.getTime()):"number"===typeof e||"[object Number]"===t?new Date(e):("string"!==typeof e&&"[object String]"!==t||"undefined"===typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://git.io/fjule"),console.warn((new Error).stack)),new Date(NaN))}function y(e,t){g(2,arguments);var n=p(e),r=p(t),a=n.getTime()-r.getTime();return a<0?-1:a>0?1:a}function b(e){return function(e,t){if(null==e)throw new TypeError("assign requires that input parameter not be null or undefined");for(var n in t=t||{})Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}({},e)}var w={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},_=function(e,t,n){var r,a=w[e];return r="string"===typeof a?a:1===t?a.one:a.other.replace("{{count}}",t.toString()),null!==n&&void 0!==n&&n.addSuffix?n.comparison&&n.comparison>0?"in "+r:r+" ago":r};function M(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t.width?String(t.width):e.defaultWidth,r=e.formats[n]||e.formats[e.defaultWidth];return r}}var O={date:M({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:M({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:M({formats:{full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})},S={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"};function T(e){return function(t,n){var r,a=n||{};if("formatting"===(a.context?String(a.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,o=a.width?String(a.width):i;r=e.formattingValues[o]||e.formattingValues[i]}else{var u=e.defaultWidth,s=a.width?String(a.width):e.defaultWidth;r=e.values[s]||e.values[u]}return r[e.argumentCallback?e.argumentCallback(t):t]}}function j(e){return function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=n.width,a=r&&e.matchPatterns[r]||e.matchPatterns[e.defaultMatchWidth],i=t.match(a);if(!i)return null;var o,u=i[0],s=r&&e.parsePatterns[r]||e.parsePatterns[e.defaultParseWidth],c=Array.isArray(s)?D(s,(function(e){return e.test(u)})):x(s,(function(e){return e.test(u)}));o=e.valueCallback?e.valueCallback(c):c,o=n.valueCallback?n.valueCallback(o):o;var l=t.slice(u.length);return{value:o,rest:l}}}function x(e,t){for(var n in e)if(e.hasOwnProperty(n)&&t(e[n]))return n}function D(e,t){for(var n=0;n<e.length;n++)if(t(e[n]))return n}var k,W={code:"en-US",formatDistance:_,formatLong:O,formatRelative:function(e,t,n,r){return S[e]},localize:{ordinalNumber:function(e,t){var n=Number(e),r=n%100;if(r>20||r<10)switch(r%10){case 1:return n+"st";case 2:return n+"nd";case 3:return n+"rd"}return n+"th"},era:T({values:{narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},defaultWidth:"wide"}),quarter:T({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:T({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},defaultWidth:"wide"}),day:T({values:{narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},defaultWidth:"wide"}),dayPeriod:T({values:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},defaultFormattingWidth:"wide"})},match:{ordinalNumber:(k={matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}},function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(k.matchPattern);if(!n)return null;var r=n[0],a=e.match(k.parsePattern);if(!a)return null;var i=k.valueCallback?k.valueCallback(a[0]):a[0];i=t.valueCallback?t.valueCallback(i):i;var o=e.slice(r.length);return{value:i,rest:o}}),era:j({matchPatterns:{narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(a|c)/i]},defaultParseWidth:"any"}),quarter:j({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:j({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:j({matchPatterns:{narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},defaultParseWidth:"any"}),dayPeriod:j({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})},options:{weekStartsOn:0,firstWeekContainsDate:1}};function E(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};g(2,arguments);var r=n.locale||W;if(!r.formatDistance)throw new RangeError("locale must contain localize.formatDistance property");var a=y(e,t);if(isNaN(a))throw new RangeError("Invalid time value");var i,o,u=b(n);u.addSuffix=Boolean(n.addSuffix),u.comparison=a,a>0?(i=p(t),o=p(e)):(i=p(e),o=p(t));var s,c=null==n.roundingMethod?"round":String(n.roundingMethod);if("floor"===c)s=Math.floor;else if("ceil"===c)s=Math.ceil;else{if("round"!==c)throw new RangeError("roundingMethod must be 'floor', 'ceil' or 'round'");s=Math.round}var l,f=o.getTime()-i.getTime(),d=f/6e4,h=v(o)-v(i),m=(f-h)/6e4;if("second"===(l=null==n.unit?d<1?"second":d<60?"minute":d<1440?"hour":m<43200?"day":m<525600?"month":"year":String(n.unit))){var w=s(f/1e3);return r.formatDistance("xSeconds",w,u)}if("minute"===l){var _=s(d);return r.formatDistance("xMinutes",_,u)}if("hour"===l){var M=s(d/60);return r.formatDistance("xHours",M,u)}if("day"===l){var O=s(m/1440);return r.formatDistance("xDays",O,u)}if("month"===l){var S=s(m/43200);return 12===S&&"month"!==n.unit?r.formatDistance("xYears",1,u):r.formatDistance("xMonths",S,u)}if("year"===l){var T=s(m/525600);return r.formatDistance("xYears",T,u)}throw new RangeError("unit must be 'second', 'minute', 'hour', 'day', 'month' or 'year'")}var P=n("wx14"),N=n("Ff2n"),C=n("XRbw"),R=n.n(C),B=n("TSYQ"),V=n.n(B),z=n("TuJg"),A=["children","className"],I=a.a.createElement;var q=function(e){var t=e.children,n=e.className,r=Object(N.a)(e,A);return I(z.a,Object(P.a)({className:V()(R.a.iconButton,n)},r),t)},F=n("dhEp"),J=a.a.createElement;var X=function(e){var t=e.dateTime,n=e.created_at,a=e.retweet_count,i=e.favorite_count,o=(e.favorited,e.text),u=e.user;return J("article",{className:h.a.tweetBox},J("div",{className:h.a.avatar},J(m.a,{src:r.useReducer.profile_image_url_https})),J("div",{className:h.a.tweetBody},J("header",{className:h.a.header},J("span",{className:h.a.name},u?u.name:"mertcan")," ",J("span",null," @",u?u.screen_name:"mertcankose_")," \xb7"," ",J("span",null,function(e,t){return g(1,arguments),E(e,Date.now(),t)}(new Date(n||t)))),J("div",{className:h.a.content},o),J("footer",{className:h.a.footer},J("div",{className:h.a.footerButton},J(q,{className:h.a.actionButton},J(F.j,null)),J("span",null,"3")),J("div",{className:h.a.footerButton},J(q,{className:h.a.actionButton},J(F.k,null)),a&&J("span",null,a)),J("div",{className:h.a.footerButton},J(q,{className:h.a.actionButton},J(F.e,null)),i&&J("span",null,i)),J("div",{className:h.a.footerButton},J(q,{className:h.a.actionButton},J(F.o,null))))))},K=Object.prototype.hasOwnProperty;var L=new WeakMap,Y=0;var H={isOnline:function(){return"undefined"===typeof navigator.onLine||navigator.onLine},isDocumentVisible:function(){return"undefined"===typeof document||"undefined"===typeof document.visibilityState||"hidden"!==document.visibilityState},fetcher:function(e){return fetch(e).then((function(e){return e.json()}))}},Q=new(function(){function e(e){void 0===e&&(e={}),this.__cache=new Map(Object.entries(e)),this.__listeners=[]}return e.prototype.get=function(e){var t=this.serializeKey(e)[0];return this.__cache.get(t)},e.prototype.set=function(e,t){var n=this.serializeKey(e)[0];this.__cache.set(n,t),this.notify()},e.prototype.keys=function(){return Array.from(this.__cache.keys())},e.prototype.has=function(e){var t=this.serializeKey(e)[0];return this.__cache.has(t)},e.prototype.clear=function(){this.__cache.clear(),this.notify()},e.prototype.delete=function(e){var t=this.serializeKey(e)[0];this.__cache.delete(t),this.notify()},e.prototype.serializeKey=function(e){var t=null;if("function"===typeof e)try{e=e()}catch(n){e=""}return Array.isArray(e)?(t=e,e=function(e){if(!e.length)return"";for(var t="arg",n=0;n<e.length;++n)if(null!==e[n]){var r=void 0;"object"!==typeof e[n]&&"function"!==typeof e[n]?r="string"===typeof e[n]?'"'+e[n]+'"':String(e[n]):L.has(e[n])?r=L.get(e[n]):(r=Y,L.set(e[n],Y++)),t+="@"+r}else t+="@null";return t}(e)):e=String(e||""),[e,t,e?"err@"+e:"",e?"validating@"+e:""]},e.prototype.subscribe=function(e){var t=this;if("function"!==typeof e)throw new Error("Expected the listener to be a function.");var n=!0;return this.__listeners.push(e),function(){if(n){n=!1;var r=t.__listeners.indexOf(e);r>-1&&(t.__listeners[r]=t.__listeners[t.__listeners.length-1],t.__listeners.length--)}}},e.prototype.notify=function(){for(var e=0,t=this.__listeners;e<t.length;e++){(0,t[e])()}},e}());var U="undefined"!==typeof window&&navigator.connection&&-1!==["slow-2g","2g"].indexOf(navigator.connection.effectiveType),Z={onLoadingSlow:function(){},onSuccess:function(){},onError:function(){},onErrorRetry:function(e,t,n,r,a){if(n.isDocumentVisible()&&!("number"===typeof n.errorRetryCount&&a.retryCount>n.errorRetryCount)){var i=Math.min(a.retryCount||0,8),o=~~((Math.random()+.5)*(1<<i))*n.errorRetryInterval;setTimeout(r,o,a)}},errorRetryInterval:1e3*(U?10:5),focusThrottleInterval:5e3,dedupingInterval:2e3,loadingTimeout:1e3*(U?5:3),refreshInterval:0,revalidateOnFocus:!0,revalidateOnReconnect:!0,refreshWhenHidden:!1,refreshWhenOffline:!1,shouldRetryOnError:!0,suspense:!1,compare:function e(t,n){var r,a;if(t===n)return!0;if(t&&n&&(r=t.constructor)===n.constructor){if(r===Date)return t.getTime()===n.getTime();if(r===RegExp)return t.toString()===n.toString();if(r===Array){if((a=t.length)===n.length)for(;a--&&e(t[a],n[a]););return-1===a}if(!r||"object"===typeof t){for(r in a=0,t){if(K.call(t,r)&&++a&&!K.call(n,r))return!1;if(!(r in n)||!e(t[r],n[r]))return!1}return Object.keys(n).length===a}}return t!==t&&n!==n},fetcher:H.fetcher,isOnline:H.isOnline,isDocumentVisible:H.isDocumentVisible},G=Object(r.createContext)({});G.displayName="SWRConfigContext";var $=G,ee=function(e,t,n,r){return new(n||(n=Promise))((function(a,i){function o(e){try{s(r.next(e))}catch(t){i(t)}}function u(e){try{s(r.throw(e))}catch(t){i(t)}}function s(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,u)}s((r=r.apply(e,t||[])).next())}))},te=function(e,t){var n,r,a,i,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(i){return function(u){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!(a=(a=o.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=t.call(e,o)}catch(u){i=[6,u],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,u])}}},ne="undefined"===typeof window||!!("undefined"!==typeof Deno&&Deno&&Deno.version&&Deno.version.deno),re=ne?null:window.requestAnimationFrame||function(e){return setTimeout(e,1)},ae=ne?r.useEffect:r.useLayoutEffect,ie={},oe={},ue={},se={},ce={},le={},fe={},de=function(){var e=0;return function(){return++e}}();if(!ne&&window.addEventListener){var he=function(e){if(Z.isDocumentVisible()&&Z.isOnline())for(var t in e)e[t][0]&&e[t][0]()};window.addEventListener("visibilitychange",(function(){return he(ue)}),!1),window.addEventListener("focus",(function(){return he(ue)}),!1),window.addEventListener("online",(function(){return he(se)}),!1)}var me=function(e,t){void 0===t&&(t=!0);var n=Q.serializeKey(e),r=n[0],a=n[2],i=n[3];if(!r)return Promise.resolve();var o=ce[r];if(r&&o){for(var u=Q.get(r),s=Q.get(a),c=Q.get(i),l=[],f=0;f<o.length;++f)l.push(o[f](t,u,s,c,f>0));return Promise.all(l).then((function(){return Q.get(r)}))}return Promise.resolve(Q.get(r))},ve=function(e,t,n,r){var a=ce[e];if(e&&a)for(var i=0;i<a.length;++i)a[i](!1,t,n,r)},ge=function(e,t,n){return void 0===n&&(n=!0),ee(void 0,void 0,void 0,(function(){var r,a,i,o,u,s,c,l,f,d,h,m,v;return te(this,(function(g){switch(g.label){case 0:if(r=Q.serializeKey(e),a=r[0],i=r[2],!a)return[2];if("undefined"===typeof t)return[2,me(e,n)];if(le[a]=de()-1,fe[a]=0,o=le[a],u=oe[a],l=!1,t&&"function"===typeof t)try{t=t(Q.get(a))}catch(p){c=p}if(!t||"function"!==typeof t.then)return[3,5];l=!0,g.label=1;case 1:return g.trys.push([1,3,,4]),[4,t];case 2:return s=g.sent(),[3,4];case 3:return f=g.sent(),c=f,[3,4];case 4:return[3,6];case 5:s=t,g.label=6;case 6:return(d=function(){if(o!==le[a]||u!==oe[a]){if(c)throw c;return!0}})()?[2,s]:("undefined"!==typeof s&&Q.set(a,s),Q.set(i,c),fe[a]=de()-1,l?[3,8]:[4,0]);case 7:if(g.sent(),d())return[2,s];g.label=8;case 8:if(h=ce[a]){for(m=[],v=0;v<h.length;++v)m.push(h[v](!!n,s,c,void 0,v>0));return[2,Promise.all(m).then((function(){if(c)throw c;return Q.get(a)}))]}if(c)throw c;return[2,s]}}))}))};$.Provider;var pe=function(){for(var e=this,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];var a,i,o={};t.length>=1&&(a=t[0]),t.length>2?(i=t[1],o=t[2]):"function"===typeof t[1]?i=t[1]:"object"===typeof t[1]&&(o=t[1]);var u=Q.serializeKey(a),s=u[0],c=u[1],l=u[2],f=u[3];o=Object.assign({},Z,Object(r.useContext)($),o);var d=Object(r.useRef)(o);ae((function(){d.current=o})),"undefined"===typeof i&&(i=o.fetcher);var h=function(){var e=Q.get(s);return"undefined"===typeof e?o.initialData:e},m=h(),v=Q.get(l),g=!!Q.get(f),p=Object(r.useRef)({data:!1,error:!1,isValidating:!1}),y=Object(r.useRef)({data:m,error:v,isValidating:g});Object(r.useDebugValue)(y.current.data);var b=Object(r.useState)(null)[1],w=Object(r.useCallback)((function(e){var t=!1;for(var n in e)y.current[n]!==e[n]&&(y.current[n]=e[n],p.current[n]&&(t=!0));if(t||o.suspense){if(_.current||!O.current)return;b({})}}),[]),_=Object(r.useRef)(!1),M=Object(r.useRef)(s),O=Object(r.useRef)(!1),S=Object(r.useRef)({emit:function(e){for(var t,n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r];_.current||O.current&&(t=d.current)[e].apply(t,n)}}),T=Object(r.useCallback)((function(e,t){return ge(M.current,e,t)}),[]),j=function(e,t){t&&(e[s]?e[s].push(t):e[s]=[t])},x=function(e,t){if(e[s]){var n=e[s],r=n.indexOf(t);r>=0&&(n[r]=n[n.length-1],n.pop())}},D=Object(r.useCallback)((function(t){return void 0===t&&(t={}),ee(e,void 0,void 0,(function(){var e,n,r,a,u,d,h;return te(this,(function(m){switch(m.label){case 0:if(!s||!i)return[2,!1];if(_.current)return[2,!1];t=Object.assign({dedupe:!1},t),e=!0,n="undefined"!==typeof ie[s]&&t.dedupe,m.label=1;case 1:return m.trys.push([1,6,,7]),w({isValidating:!0}),Q.set(f,!0),n||ve(s,y.current.data,y.current.error,!0),r=void 0,a=void 0,n?(a=oe[s],[4,ie[s]]):[3,3];case 2:return r=m.sent(),[3,5];case 3:return o.loadingTimeout&&!Q.get(s)&&setTimeout((function(){e&&S.current.emit("onLoadingSlow",s,o)}),o.loadingTimeout),ie[s]=null!==c?i.apply(void 0,c):i(s),oe[s]=a=de(),[4,ie[s]];case 4:r=m.sent(),setTimeout((function(){delete ie[s],delete oe[s]}),o.dedupingInterval),S.current.emit("onSuccess",r,s,o),m.label=5;case 5:return oe[s]>a||le[s]&&(a<=le[s]||a<=fe[s]||0===fe[s])?(w({isValidating:!1}),[2,!1]):(Q.set(s,r),Q.set(l,void 0),Q.set(f,!1),u={isValidating:!1},"undefined"!==typeof y.current.error&&(u.error=void 0),o.compare(y.current.data,r)||(u.data=r),w(u),n||ve(s,r,u.error,!1),[3,7]);case 6:return d=m.sent(),delete ie[s],delete oe[s],Q.set(l,d),y.current.error!==d&&(w({isValidating:!1,error:d}),n||ve(s,void 0,d,!1)),S.current.emit("onError",d,s,o),o.shouldRetryOnError&&(h=(t.retryCount||0)+1,S.current.emit("onErrorRetry",d,s,o,D,Object.assign({dedupe:!0},t,{retryCount:h}))),[3,7];case 7:return e=!1,[2,!0]}}))}))}),[s]);ae((function(){if(s){_.current=!1,O.current=!0;var e=y.current.data,t=h();M.current!==s&&(M.current=s),o.compare(e,t)||w({data:t});var n=function(){return D({dedupe:!0})};(o.revalidateOnMount||!o.initialData&&void 0===o.revalidateOnMount)&&("undefined"!==typeof t?re(n):n());var r=!1,a=function(){!r&&d.current.revalidateOnFocus&&(r=!0,n(),setTimeout((function(){return r=!1}),d.current.focusThrottleInterval))},i=function(){d.current.revalidateOnReconnect&&n()},u=function(e,t,r,a,i){void 0===e&&(e=!0),void 0===i&&(i=!0);var u={},s=!1;return"undefined"===typeof t||o.compare(y.current.data,t)||(u.data=t,s=!0),y.current.error!==r&&(u.error=r,s=!0),"undefined"!==typeof a&&y.current.isValidating!==a&&(u.isValidating=a,s=!0),s&&w(u),!!e&&(i?n():D())};return j(ue,a),j(se,i),j(ce,u),function(){w=function(){return null},_.current=!0,x(ue,a),x(se,i),x(ce,u)}}}),[s,D]),ae((function(){var t=null,n=function(){return ee(e,void 0,void 0,(function(){return te(this,(function(e){switch(e.label){case 0:return y.current.error||!d.current.refreshWhenHidden&&!d.current.isDocumentVisible()||!d.current.refreshWhenOffline&&!d.current.isOnline()?[3,2]:[4,D({dedupe:!0})];case 1:e.sent(),e.label=2;case 2:return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),[2]}}))}))};return d.current.refreshInterval&&(t=setTimeout(n,d.current.refreshInterval)),function(){t&&clearTimeout(t)}}),[o.refreshInterval,o.refreshWhenHidden,o.refreshWhenOffline,D]);var k=Object(r.useMemo)((function(){var e={revalidate:D,mutate:T};return Object.defineProperties(e,{error:{get:function(){return p.current.error=!0,M.current===s?y.current.error:v},enumerable:!0},data:{get:function(){return p.current.data=!0,M.current===s?y.current.data:m},enumerable:!0},isValidating:{get:function(){return p.current.isValidating=!0,!!s&&y.current.isValidating},enumerable:!0}}),e}),[D]);if(o.suspense){var W=Q.get(s),E=Q.get(l);if("undefined"===typeof W&&(W=m),"undefined"===typeof E&&(E=v),"undefined"===typeof W&&"undefined"===typeof E){if(ie[s]||D(),ie[s]&&"function"===typeof ie[s].then)throw ie[s];W=ie[s]}if("undefined"===typeof W&&E)throw E;return{error:E,data:W,revalidate:D,mutate:T,isValidating:y.current.isValidating}}return k};var ye=pe,be=function(e){return fetch(e).then((function(e){return e.json()}))},we=a.a.createElement;var _e=function(e){var t=e.size,n=void 0===t?30:t,r=e.stroke;return we("svg",{width:n,height:n,viewBox:"0 0 38 38",xmlns:"http://www.w3.org/2000/svg",stroke:"#007aff"},we("g",{fill:"none",fillRule:"evenodd"},we("g",{transform:"translate(1 1)",strokeWidth:void 0===r?4:r},we("circle",{strokeOpacity:".5",cx:"18",cy:"18",r:"18"}),we("path",{d:"M36 18c0-9.94-8.06-18-18-18"},we("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))},Me=a.a.createElement;var Oe=function(){var e=ye("/api/tweet",be).data;return Me("div",null,!e&&Me("div",{className:f.a.loading},Me(_e,null)),Me(X,{name:"Mertcan Kose",slug:"mertcankose_",dateTime:new Date("2020-08-20"),text:"selam nabersadasdasd   asdsad:))\n                    \nsadasdsadsadas  das         das. .  ...  "}),Me(X,{name:"Mertcan Kose",slug:"mertcankose_",dateTime:new Date("2020-08-20"),text:"     Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente delectus esse ut, repudiandae quibusdam facilis laboriosam incidunt harum, voluptatem at itaque libero beatae perferendis fugiat suscipit quidem est nemo asperiores! "}))},Se=a.a.createElement;t.default=function(){var e=Object(c.a)();return Se(o.a,null,Se(u.a,null,Se(Oe,null)),e.width>i.c.DESKTOP_SIZE&&Se(s.a,{id:"conversation"},"Extra"))}},gX1m:function(e,t,n){e.exports={tweetBox:"tweet_tweetBox__3zvru",avatar:"tweet_avatar__2Ecl8",tweetBody:"tweet_tweetBody__oRuNx",header:"tweet_header__1kd5N",name:"tweet_name__2uEI5",content:"tweet_content__1552g",footer:"tweet_footer__RXq6T",footerButton:"tweet_footerButton__s8z28",actionButton:"tweet_actionButton__1LnAk"}},phKz:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/conversation",function(){return n("MDeD")}])},zJxU:function(e,t,n){e.exports={loading:"main-content-fourth_loading__1vxST"}}},[["phKz",1,0,3,2,4]]]);