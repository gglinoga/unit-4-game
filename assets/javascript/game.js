$(document).ready(function() {
	var cc = {
		score: 0,
		buttons: [0, 0, 0, 0],
		goal: 0,
		wins: 0,
		losses: 0,
		startup: function() {
			this.score = (Math.floor(Math.random() * 12) + 1);
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
				alert("Congratulations, you have won!");
				this.wins++;
				this.startup();
			} else if (this.score > this.goal) {
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
		cc.roundover();
	});
	$(".button1").on("click", function() {
		cc.score += cc.buttons[1];
		$(".score").html(cc.score);
		cc.roundover();
	});
	$(".button2").on("click", function() {
		cc.score += cc.buttons[2];
		$(".score").html(cc.score);
		cc.roundover();
	});
	$(".button3").on("click", function() {
		cc.score += cc.buttons[3];
		$(".score").html(cc.score);
		cc.roundover();
	});
}); //ready wrapper end