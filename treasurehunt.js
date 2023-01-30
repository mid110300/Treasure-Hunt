//Define global variables
var playing = true
var wins = 0 
var losses = 0
var bomb = Math.floor(Math.random() * 9)
var gold = Math.floor(Math.random() * 9)
while(gold === bomb){
    gold = Math.floor(Math.random() * 9)
}

//Do this when you click a box
const treasure = (box) => {
    if(playing === false){
        alert("click to restart game")
        return
    } else{
    switch(box){
        case bomb:
            playing = false
            losses++
            document.getElementById("losses").innerHTML = `Losses=${losses}`
            document.getElementById(box).innerHTML = "💣"
            alert("You lose.")
            break
        case gold:
            playing = false
            wins++
            document.getElementById("wins").innerHTML = `Wins=${wins}`
            document.getElementById(box).innerHTML = "🥇"
            alert("You win.")
            break
        default:
            document.getElementById(box).innerHTML = "🍀"
            break
        return
    }}
}

//Do this when you restart the game
const restart = () => {
    playing = true 
     bomb = Math.floor(Math.random() * 9)
     gold = Math.floor(Math.random() * 9)
    while(gold === bomb){
        gold = Math.floor(Math.random() * 9)
    }
    for(let i=0;i<9;i++){
        document.getElementById(i).innerHTML="?"
    }
    alert("Try again")
}