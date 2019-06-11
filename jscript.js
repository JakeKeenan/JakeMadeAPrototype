function killText(id){
document.getElementById(id).innerHTML = "";
}

function setPosDropdown(dropdown, holder){
	var scrollTop = (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;
	var elmnt = document.getElementById(holder);
	if (scrollTop >= elmnt.offsetHeight){
		document.getElementById(dropdown).style.marginTop = -elmnt.offsetHeight + 'px';
	}
	else{
		document.getElementById(dropdown).style.marginTop = -scrollTop + 'px';
	}
}

function vh(v){
	var h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
	return (v * h) / 100;
}