let canvas = document.getElementById('hanged');
let ctx = canvas.getContext('2d');
//On part toujours de x pour aller à y//
ctx.beginPath();
ctx.moveTo(10, 75);
ctx.lineTo(15, 300); //poteau//
ctx.moveTo(10, 75);
ctx.lineTo(300, 80); //bois qui permet de suspendre//
ctx.moveTo(300, 80);
ctx.lineTo(300, 150); //corde//
ctx.moveTo(300, 150);
ctx.arc(300, 160, 10, 0, Math.PI * 2, true); //tête//
ctx.moveTo(300, 150);
ctx.lineTo(300, 200); //corps//
ctx.moveTo(300, 200);
ctx.lineTo(270, 230); //pied de gauche (la mienne)//
ctx.moveTo(300, 200);
ctx.lineTo(310, 230); //pied de droite (la mienne)//
ctx.moveTo(280, 200);
ctx.lineTo(300, 180);
ctx.lineTo(320, 200); //bras du pendu//
ctx.stroke();

function afficheEcran(){
    let screen = document.getElementById('screen'); //on prend l'id screen pour qu'au cliquage du bouton play, l'écran s'affiche//
    screen.style.visibility="visible";
    screen.style.backgroundColor="#33ffca";
    canvas.style.visibility="hidden";
}

function afficheLettres(){
    let screen= document.getElementById('screen');
    screen.textContent += this.value; //Pour afficher les lettres//
}

function afficheResultat(){
    let result = document.getElementById('result');
    result.textContent += randomWord;
}

let word = ['javascript', 'python', 'symfony', 'ruby', 'bootstrap', 'wordpress', 'debian', 'sass', 'github', 'vuejs'];
let randomNumber = Math.floor(Math.random() * word.length);
let randomWord = word[randomNumber];

let play = document.getElementById('play');
play.addEventListener("click", afficheEcran); //On affiche l'écran où les lettres vont prendre vie

let button = document.getElementsByClassName('button');
for (let i=0; i<word.length; i++){
    button[i].addEventListener("click", afficheLettres); //A l'appui des boutons, les lettres s'afficheront
}

if (this.value !== randomWord.indexOf()){
    screen.textContent=""; //Cette fonction pour que les lettres ne correspondant pas au mot recherché ne s'affichent pas
}else if (this.value === randomWord.indexOf()){
    for (let j=0, j<ctx.length; j++){
        
    }
}