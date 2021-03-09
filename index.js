let canvas = document.getElementById('hanged');
let ctx = canvas.getContext('2d');
//On part toujours de x pour aller à y//
let word = ['javascript', 'python', 'symfony', 'ruby', 'bootstrap', 'wordpress', 'debian', 'sass', 'github', 'vuejs'];
let play = document.getElementById('play');
let button = document.getElementsByClassName('button');
let wordFound;
let letter;
let screen = document.getElementById('screen');
let underscore = [];
let count = 0;

function letterFound(){
    wordFound = word[Math.floor(Math.random() * word.length)];
    letter = wordFound.split('');
    screen.textContent = "";
    console.log(letter);
    for (let i=0; i<letter.length; i++){
        screen.textContent += "_";
    }
    underscore = screen.textContent.split("");
    screen.style.visibility="visible";
}
play.addEventListener("click", letterFound);

function analizeLetter(){
    let letterSearch = false;
    for (let i = 0; i < letter.length; i++) {
        console.log(this.value+"button");
        if (this.value == letter[i]){
            console.log(letter[i]+"letter");
            underscore[i] = this.value;
            console.log(underscore[i]+"underscore");
            screen.textContent = underscore.join("");
            letterSearch = true;
        }
        
    }
    if (screen.textContent == wordFound){
         screen.textContent = "Bravo! Tu es sauvé!"
    }
    if(!letterSearch){
       count++;
    }

if (count == 1){
    ctx.beginPath();
    ctx.moveTo(10, 75);
    ctx.lineTo(15, 300); //poteau//

}else if(count == 2){
    ctx.moveTo(10, 75);
    ctx.lineTo(300, 80); //bois qui permet de suspendre//

}else if(count == 3){
    ctx.moveTo(300, 80);
    ctx.lineTo(300, 150); //corde//

}else if(count == 4){
    ctx.moveTo(300, 150);
    ctx.arc(300, 160, 10, 0, Math.PI * 2, true); //tête//

}else if(count == 5){
    ctx.moveTo(300, 150);
    ctx.lineTo(300, 200); //corps//

}else if(count == 6){
    ctx.moveTo(300, 200);
    ctx.lineTo(270, 230); //pied de gauche (la mienne)//

}else if(count == 7){
    ctx.moveTo(300, 200);
    ctx.lineTo(310, 230); //pied de droite (la mienne)//

}else if(count == 8){
    ctx.moveTo(280, 200);
    ctx.lineTo(300, 180);
    ctx.lineTo(320, 200); //bras du pendu//
}
ctx.stroke();
if (count > 7){
    alert("Pendu!");
}
}
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", analizeLetter);
    
}