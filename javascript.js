//
//
var title_zone = document.getElementById('title_zone');
function move_title(){
	if (153-window.scrollY<0) {title_zone.style.top = '0px';}
	else{title_zone.style.top = (153-window.scrollY)+'px';}
}
document.addEventListener('scroll',move_title);