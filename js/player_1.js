function vTurbChangePlayer(){!vTurbOriginalPlayerIsMobile&&vTurbDeviceIsMobile||vTurbOriginalPlayerIsMobile&&!vTurbDeviceIsMobile?(vTurbPlayer=vTurbAlternativePlayer,vTurbSrcId=vTurbPlayer.id):vTurbPlayer=vTurbOriginalPlayer;var e=document.getElementById(`vid_${vTurbOriginalPlayer.id}`);e&&e.remove();var r=document.getElementById(`scr_${vTurbOriginalPlayer.id}`);r&&r.setAttribute("id",`scr_${vTurbSrcId}`)}function vTurbCreatSmartvdsElements(){var e,r,t;"1.7.9"===vTurbPlayer.version?document.getElementById(`vid_${vTurbPlayer.id}`)||(window,e=document,r=e.getElementById(`scr_${vTurbSrcId}`),(t=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,r.parentElement.insertBefore(t,r)):(document.getElementById(`vid_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`scr_${vTurbSrcId}`),(t=e.createElement("DIV")).id=`vid_${vTurbPlayer.id}`,t.style.position="relative",t.style.width="100%",t.style.padding=`${vTurbPlayer.video_aspect_ratio}% 0 0`,r.parentElement.insertBefore(t,r)}(document),document.getElementById(`thumb_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`vid_${vTurbPlayer.id}`),(t=e.createElement("IMG")).id=`thumb_${vTurbPlayer.id}`,t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.objectFit="cover",t.src=`https://images.converteai.net/${vTurbPlayer.thumbnail_key}`,r.appendChild(t)}(document),document.getElementById(`backdrop_${vTurbPlayer.id}`)||function(e,r,t){r=e.getElementById(`vid_${vTurbPlayer.id}`),(t=e.createElement("DIV")).id=`backdrop_${vTurbPlayer.id}`,t.style.top="0",t.style.left="0",t.style.width="100%",t.style.height="100%",t.style.position="absolute",t.style.backdropFilter="blur(5px)",t.style.webkitBackdropFilter="blur(5px)",r.appendChild(t)}(document))}function vTurbLoadSmrtvds(){var e,r,t,a;e=window,r=document,e.smrtvds||(t=e.smrtvds=function(){t.callMethod?t.callMethod.apply(t,arguments):t.queue.push(arguments)},e._smrtvds||(e._smrtvds=t),t.push=t,t.loaded=!0,t.version="1.1",t.queue=[],(a=r.createElement("script")).async=!0,a.src=`https://cdn.converteai.net/lib/js/smartplayer/${vTurbPlayer.version}/smartplayer.min.js`,r.getElementsByTagName("head")[0].appendChild(a)),window.smrtvds(`vid_${vTurbPlayer.id}`,vTurbPlayer.org_id,vTurbPlayer.video_id,vTurbPlayer.options)}function vTurbSmrtvds(){vTurbCreatSmartvdsElements(),vTurbLoadSmrtvds()}var vTurbOriginalPlayer={"id":"661ea52fcefe310008ceac47","org_id":"c9ad2a89-1d3d-45e5-8628-2a2ae0a0b34d","name":"Aula 02","device_type":"desktop","video_aspect_ratio":"56.25","thumbnail_key":"c9ad2a89-1d3d-45e5-8628-2a2ae0a0b34d/players/661ea5280409ab0007b7bef1/thumbnail.jpg","cover_key":"c9ad2a89-1d3d-45e5-8628-2a2ae0a0b34d/players/661ea52fcefe310008ceac47/cover.jpg","version":"v1","video_id":"661ea5290409ab0007b7bef3","options":{"autoplay":!1,"smart_autoplay_template":"","theme":"#CC1212","foreground_color":"#FFFFFF","video":{"width":960,"height":540,"pic":"https://images.converteai.net/c9ad2a89-1d3d-45e5-8628-2a2ae0a0b34d/players/661ea52fcefe310008ceac47/cover.jpg"},"cdn":"cdn.converteai.net","displays":{"big_play":!0,"play_pause":!0,"backward":!1,"forward":!1,"volume":!1,"volume_bar":!0,"time":!1,"fullscreen":!1,"seekbar":!0,"seekbar_time":!0,"speed_control":!1},"callAction":[],"pixels":[],"thumbs":[],"headlines":[],"turbos":[],"smart_autoplay_elements":[],"mini_hooks":!1,"mini_hooks_elements":[],"resume":!1,"fake_bar":!1,"headline":!1,"turbo":!1,"turbo_speed":1,"turbo_auto_test":!1}},vTurbSrcId="661ea52fcefe310008ceac47",vTurbPlayer=vTurbOriginalPlayer,vTurbDeviceIsMobile=window.navigator.userAgent.match(/Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile|Kindle|NetFront|Silk-Accelerated|(hpw|web)OS|Fennec|Minimo|Opera M(obi|ini)|Blazer|Dolfin|Dolphin|Skyfire|Zune/),vTurbOriginalPlayerIsMobile="mobile"===vTurbOriginalPlayer.device_type;vTurbDeviceIsMobile=vTurbDeviceIsMobile&&vTurbDeviceIsMobile[0],vTurbSmrtvds();