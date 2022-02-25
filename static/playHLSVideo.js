!function(){if(Hls.isSupported()){var e=document.querySelectorAll("video source[type='application/vnd.apple.mpegurl']")
e.forEach(function(e){function r(){l.removeEventListener("play",r)
var e=new Hls({autoStartLoad:!1})
e.loadSource(a),e.attachMedia(l),e.on(Hls.Events.MANIFEST_PARSED,function(){e.loadLevel=e.levels.length-1,e.startLoad(),l.play()}),e.on(Hls.Events.ERROR,function(r,a){var o=a.type,t=a.fatal
if(t)switch(o){case Hls.ErrorType.NETWORK_ERROR:e.startLoad()
break
case Hls.ErrorType.MEDIA_ERROR:e.recoverMediaError()
break
default:e.destroy()}console.error("HLS error",a)})}var a=e.src,o=e.parentNode,t=o.classList.contains("hls_autoplay")
if(o.canPlayType(e.type))return void(t&&o.play())
var l=o.cloneNode(!0),n=l.querySelectorAll("source")
n.forEach(function(e){e.remove()}),l.src="about:blank",o.parentNode.replaceChild(l,o),l.addEventListener("play",r),t&&l.play()})}else{var r=document.querySelectorAll("video.hls_autoplay")
r.forEach(function(e){e.setAttribute("autoplay","")})}}()
