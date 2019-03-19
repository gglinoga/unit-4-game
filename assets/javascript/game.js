$(document).ready(function () {
	var cc = {
		score: 0,
		buttons: [0, 0, 0, 0],
		goal: 0,
		wins: 0,
		losses: 0,
		startup: function () {
			this.score = 0;
			$(".score").html(this.score);
			this.goal = (Math.floor(Math.random() * 101) + 19);
			$(".goal").html(this.goal);
			$(".wins").html(this.wins);
			$(".losses").html(this.losses);
			for (var i = 0; i < this.buttons.length; i++) {
				this.buttons[i] = (Math.floor(Math.random() * 12) + 1);
			}
			console.log(cc.buttons); ///cheat codes
		},
		roundover: function () {
			$(".score").html(this.score);
			if (this.score === this.goal) {
				let audio = new Audio('assets/sounds/win.mp3');
				audio.play();
				winmsg = function () {
					alert("Congratulations, you have won!");
				}
				setTimeout(winmsg, 1000);
				this.wins++;
				this.startup();
			} else if (this.score > this.goal) {
				let audio = new Audio('assets/sounds/lose.mp3');
				audio.play();
				losemsg= function (){
				alert("Sorry, you have lost!");
				}
				setTimeout(losemsg, 1000);
				this.losses++;
				this.startup();
			}
		},
		calc: function (x) {
			cc.score += cc.buttons[x];
			$(".score").html(cc.score);
			let audio = new Audio('assets/sounds/click.mp3');
			audio.play();
			cc.roundover();
		}
	} //var cc end
	cc.startup();
	$(".button0").on("click", function () {
		buttonVal = 0;
		cc.calc(buttonVal);
	});
	$(".button1").on("click", function () {
		buttonVal = 1;
		cc.calc(buttonVal);
	});
	$(".button2").on("click", function () {
		buttonVal = 2;
		cc.calc(buttonVal);
	});
	$(".button3").on("click", function () {
		buttonVal = 3;
		cc.calc(buttonVal);
	});
}); //ready wrapper end