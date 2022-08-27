document.querySelectorAll('ol.thread-expanded>div:nth-child(1)').forEach(function(i){	
	0 != i.childElementCount && i.parentElement.parentElement.parentElement.parentElement.firstElementChild.nextElementSibling.lastElementChild.remove();	
});
