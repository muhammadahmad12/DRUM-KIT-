function remove() {
	$("img").css({
		transform: "scale(1)",
		border: "0px solid"
	});
}
function play() {
	var audio = document.getElementById("audio");
	audio.play();
	remove();
	$("#im1").css({
		transform: "scale(1.2) rotatex(360deg)",
		transitionDuration: "4s",
		transformRotatey: "360deg",
		border: "10px double red"
	});
}
function play1() {
	var audio = document.getElementById("t2");
	audio.play();
	remove();
	$("#im2").css({
		transform: "scale(1.2) rotatey(360deg)",
		transitionDuration: "4s",
		transformRotatey: "360deg",
		border: "10px double red"
	});
}
function play2() {
	var audio = document.getElementById("t3");
	audio.play();
	remove();
	$("#im3").css({
		transform: "scale(1.2)  rotatex(360deg)",
		transitionDuration: "4s",
		transformRotatey: "360deg",
		border: "10px double red"
	});
}
function play3() {
	var audio = document.getElementById("t1");
	audio.play();
	remove();
	$("#im4").css({
		transform: "scale(1.2) rotatex(360deg)",
		transitionDuration: "4s",
		transformRotatey: "360deg",
		border: "10px double red"
	});
}
function play4() {
	var audio = document.getElementById("s");
	audio.play();
	remove();
	$("#im5").css({
		transform: "scale(1.2) rotatey(360deg)",
		transitionDuration: "4s",
		transformRotatey: "360deg",
		border: "10px double red"
	});
}
function play5() {
	var audio = document.getElementById("k");
	audio.play();
	remove();
	$("#im6").css({
		transform: "scale(1.2) rotatex(360deg)",
		transitionDuration: "4s",
		transformRotatey: "360deg",
		border: "10px double red"
	});
}

window.addEventListener("keydown", function(e) {
	if (!e.altKey && !e.ctrlKey) {
		if (e.key == "a") {
			this.document
				.getElementById("im1")
				.dispatchEvent(new MouseEvent("click"));
		}
		if (e.key == "s") {
			this.document
				.getElementById("im2")
				.dispatchEvent(new MouseEvent("click"));
		}
		if (e.key == "d") {
			this.document
				.getElementById("im3")
				.dispatchEvent(new MouseEvent("click"));
		}
		if (e.key == "k") {
			this.document
				.getElementById("im4")
				.dispatchEvent(new MouseEvent("click"));
		}
		if (e.key == "l") {
			this.document
				.getElementById("im5")
				.dispatchEvent(new MouseEvent("click"));
		}
		if (e.key == ";") {
			this.document
				.getElementById("im6")
				.dispatchEvent(new MouseEvent("click"));
		}
	}
});
