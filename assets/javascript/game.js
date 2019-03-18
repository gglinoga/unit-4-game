$(document).ready(function () {
    //game object
    //game var
    //startup fn
    //console.log("Ready!");
    //generate randos
    //game logic
    //game end conditions
    //end game object



    // <!-- crystal game pseudo code

    var cc = {
        score: 0,
        buttons: [0, 0, 0, 0],
        goal: 0,
        wins: 0,
        losses: 0,

        startup: function () {
            this.score = (Math.floor(Math.random() * 12) + 1);
            $(".score").html(this.score);
            this.goal = (Math.floor(Math.random() * 101) + 19);
            $(".goal").html(this.goal);
            $(".wins").html(this.wins);
            $(".losses").html(this.losses);
            console.log(this.wins + " " + this.losses);
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i] = (Math.floor(Math.random() * 12) + 1);
            }
        },

        ////game end logic
        ////win condition   score=goal, victory message, media, w in ++startup()
        roundover: function () {
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
    /////buttons
    $(".button0").on("click", function () {
        cc.score += cc.buttons[0];
        console.log(cc.score);
        $(".score").html(cc.score);
        cc.roundover();
        console.log("button0");
    });
    $(".button1").on("click", function () {
        cc.score += cc.buttons[1];
        console.log(cc.score);
        $(".score").html(cc.score);
        cc.roundover();
    });
    $(".button2").on("click", function () {
        cc.score += cc.buttons[2];
        console.log(cc.score);
        $(".score").html(cc.score);
        cc.roundover();
    });
    $(".button3").on("click", function () {
        cc.score += cc.buttons[3];
        console.log(cc.score);
        $(".score").html(cc.score);
        cc.roundover();
    });
    console.log(cc.buttons);


}); //ready wrapper end