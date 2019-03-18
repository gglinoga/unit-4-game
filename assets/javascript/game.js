$(document).ready(function() {
	var cc = {
		score: 0,
		buttons: [0, 0, 0, 0],
		goal: 0,
		wins: 0,
		losses: 0,
		startup: function() {
			this.score = 0;
			$(".score").html(this.score);
			this.goal = (Math.floor(Math.random() * 101) + 19);
			$(".goal").html(this.goal);
			$(".wins").html(this.wins);
			$(".losses").html(this.losses);
			console.log(cc.buttons); ///cheat codes
			for (var i = 0; i < this.buttons.length; i++) {
				this.buttons[i] = (Math.floor(Math.random() * 12) + 1);
			}
		},
		roundover: function() {
			if (this.score === this.goal) {
				let audio = new Audio('assets/sounds/win.mp3');
				audio.play();
				alert("Congratulations, you have won!");
				this.wins++;
				this.startup();
			} else if (this.score > this.goal) {
				let audio = new Audio('assets/sounds/lose.mp3');
				audio.play();
				alert("Sorry, you have lost!");
				this.losses++;
				this.startup();
			}
		}
	} //var cc end
	cc.startup();
	$(".button0").on("click", function() {
		cc.score += cc.buttons[0];
		$(".score").html(cc.score);
		let audio = new Audio('assets/sounds/click.mp3');
		audio.play();
		cc.roundover();
	});
	$(".button1").on("click", function() {
		cc.score += cc.buttons[1];
		$(".score").html(cc.score);
		let audio = new Audio('assets/sounds/click.mp3');
		audio.play();
		cc.roundover();
	});
	$(".button2").on("click", function() {
		cc.score += cc.buttons[2];
		$(".score").html(cc.score);
		let audio = new Audio('assets/sounds/click.mp3');
		audio.play();
		cc.roundover();
	});
	$(".button3").on("click", function() {
		cc.score += cc.buttons[3];
		$(".score").html(cc.score);
		let audio = new Audio('assets/sounds/click.mp3');
		audio.play();
		cc.roundover();
	});
}); //ready wrapper end