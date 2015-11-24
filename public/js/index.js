$(function () {
    var snapper = new Snap({
	    element: document.getElementById("content"),
	    disable: 'right',
	    maxPosition: 1000,
	    minPosition: 1000
    });
	$(".ham_icon").click(function(){
		snapper.open('left');
	});
	$("#close").click(function(){
		snapper.close();
	});

	$("#header").headroom();
});