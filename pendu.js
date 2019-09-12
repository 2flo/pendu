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
let hanged = canvas;

function afficheEcran(){
    let screen = document.getElementById('screen'); //on prend l'id screen pour qu'au cliquage du bouton play, l'écran s'affiche//
    screen.style.visibility="visible";
    screen.style.backgroundColor="#33ffca";
    hanged.style.visibility="hidden";
}

function afficheLettres(){
    screen.textContent += this.value; //Pour afficher les lettres//
    console.log(this.value);
    if (this.value==this.randomWord){
        for (let j=0; j<randowWord.length; j++){ //Une boucle pour que le pendu s'affiche au fur et à mesure que l'on donne la bonne lettre//
            hanged[j].style.visibility="visible";
        }
    }else{
        screen.textContent = "";
        alert('Nope');
    }
}

function afficheResultat(){
    if (result === randomWord){
        result.textContent += randomWord;
    }
    console.log(randomWord)
}

let word = ['javascript', 'python', 'symfony', 'ruby', 'bootstrap', 'wordpress', 'debian', 'sass', 'github', 'vuejs'];
let randomNumber = Math.floor(Math.random() * word.length);
let randomWord = word[randomNumber];

let result = document.getElementById('result');
result.addEventListener("click", afficheResultat);

let play = document.getElementById('play');
play.addEventListener("click", afficheEcran);

let button = document.getElementsByClassName('button');
for (let i=0; i<word.length; i++){
    button[i].addEventListener("click", afficheLettres);
}