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
        score: $("#score"),
        buttons: [0, 0, 0, 0],
        goal: $("#goal"),

        startup: function () {
            this.score = (Math.floor(Math.random() * 12) + 1);
            $(".score").html(this.score);
            this.goal = (Math.floor(Math.random() * 101) + 19);
            $(".goal").html(this.goal);
            console.log("goal " + this.goal)
            for (var i = 0; i < this.buttons.length; i++) {
                this.buttons[i] = (Math.floor(Math.random() * 12) + 1);
                console.log(this.buttons[i]);
            }
        }


    } //var cc end
    cc.startup();


}); //ready wrapper end

//     var

//     startup()
//         display 4 crystals on page.  (random position?  static?)
//         generate random, displayed number for player "goal", 19 <=x <=190
//         assign 4 random numbers to each crystal 'a, b, c, d'
//         assign initial score "score", 1 <= y <= 12"

//     on crystal press
//         add corresponding number value to initial score

//     win condition
//         score = goal
//         startup ()

//     lose condition
//         score>goal
//         



//pak
//startup()
//keys a, b, c, d


//  -->