(function(){"use strict";let e=0,t=0;onmessage=function(a){a.data.type==="start"?(e=a.data.countdown,t&&clearInterval(t),t=setInterval(()=>{e--,postMessage({type:"tick",countdown:e}),e===0&&(clearInterval(t),postMessage({type:"expired"}))},1e3)):a.data.type==="stop"&&clearInterval(t)}})();
