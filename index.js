const arrays = [5, 10, 7, 1, 2, 9];
const modif = arrays.filter((n) => n > 4).map((n, i) => (i % 2 === 0 ? n : 0));
const multiple = arrays.reduce((a, b) => a * b, 1);
const sommePaire = arrays.filter((n) => n % 2 === 0).reduce((a, b) => a + b, 0);
//NB: reduce doit toujours retourner quelque chose à chaque iteration
//NB: reducer a aussi de l'idex
const phrase = [ ..."salut les gars"]
const table = phrase.reduce((a,e,i)=>(e=="a") ? (a.push(i),a) : a, [])
//NB: a.push(i) returne la longueur du tableau, return un entier

const texte = "il y a 15 Vaches, 3 Cochons et 6 chèvres";
//compter les nombres totales d'animaux dans la phrase
const modif1 = texte.match(/\d/g).reduce((a,b)=>Number(a)+Number(b)) //nombre à un chiffre (resultat=15)
const modif2 = texte.match(/\d+/g).reduce((a,v) => a + Number(v), 0); //nombre à un ou plus de chiffres
const modif3 = texte.match(/\d+/g).reduce((a,v)=>a+ +v, 0); // + change le v en nombre
//test si quelque chose est dans le phrase
const test1 = /a/.test(texte) //si y a "a"
const test2 = /a/i.test(texte) //si y a "a" ou "A"
const test3 = /\d/.test(texte) //si y a un chiffre dans le phrase
const test4 = /[A-Z]/g.test(texte) //est ce qu'il y a un lettre majuscule (true)
const test5 = /^[A-Z]/g.test("JAVASCRIPT") //tous le nombre sont majuscule? oui
const test6 = !/^[A-Z]/g.test("JavaScript") //tous le nombre sont minuscule? non
const test7 = [...texte].every(l=>/[A-Z]/.test(l)) //teste si chaque lettre est majuscule (false)
const test8 = "JAVASCRIPT" == "JAVASCRIPT".toUpperCase(); //teste si chaque lettre est majuscule (autre methode)
//tous méthode de verification de chaque nombre dans un tableau
const verif1 = arrays.some(a=>a>4) //un d'entre eux est superieur à 4? (true)
const verif2 = arrays.every(a=>a>4) //chaque chiffre est superieure à 4? (false)
const verif3 = arrays.filter(a=>a>4).length == 0 //le nombre de chiffre superieure à 4 est egal 0? (false)

const mots = ["abc", "abC", "AcC", "cbb"];
//recuperer le mot qui contient au moin une lettre majuscule
const value1 = mots.filter((m)=>/[A-Z]/.test(m))
//recuperer le mot qui contient que des lettres majuscule
const value2 = mots.filter((m)=>/^[A-Z]/.test(m))
//recuperer le mot qui contient au moins deux lettre consecutive indentique
const value3 = mots.filter((m)=>/(.)\1/i.test(m))



// Un bus se déplace en ville, il prend et/ou dépose certaines personnes à chaque arrêt.
// Vous recevez une liste d’entiers. Chaque élément comporte le nombre de personnes qui
// montent dans le bus (le premier élément) et le nombre de personnes qui en sortent (le
// deuxième élément).Le 2e nombre du premier élément de la liste vaut toujours 0 car le bus
// est vide en arrivant au premier arrêt de bus. Votre tâche consiste à renvoyer le nombre de
// personnes encore dans le bus après le dernier arrêt.
const number = (entiers) => {
    const baba = entiers.reduce((a,b) => a + (b.reduce((c,d,i) => (i===0) ? c+d : c-d, 0 )), 0)
    console.log(baba)
}
// number([[3,0],[9,1],[4,10],[12,2],[6,1],[7,10]])



// Nous avons besoin d'une fonction qui compte le nombre de moutons présents dans un tableau donné (true
// signifie que le mouton est présent). Par exemple vous devrez trouver 17 moutons pour la liste suivante :
// [true, true, true, false,
// true, true, true, true ,
// true, false, true, false,
// true, false, false, true ,
// true, true, true, true ,
// false, false, true, true]
// N'oubliez pas de vérifier les mauvaises valeurs comme null / undefined
const tables = [true, true, true, false,
    true, true, true, true ,
    true, false, true, false,
    true, false, false, true ,
    true, true, true, true ,
    false, false, true, true
]
const nombre = (moutons) => {
    if(!Array.isArray(moutons)){
        console.log("veiller fournir un tableau valide")
        return;
    }
    const nombre = moutons.filter((m) => m === true).length;
    console.log(nombre);
}
// nombre(tables)



// En entrée on vous donne une chaîne de caractères, en sortie vous devez avoir la même phrase sans le
// premier ni le dernier caractère.
// removeChar("Ceci est une phrase") => "eci est une phras"
const removeChar = (phrase) => {
    const newPhrase = [...phrase].filter((l,i)=>i!==0 && i!==(phrase.length-1)).join('')
    console.log(newPhrase)
}
// removeChar("Ceci est une phrase");
//Autre methode: utiliser phrase.slice(1, -1);
//Autre methode: utiliser characters = phrase.split(''); characters.shift(); // Retire le premier élément
//Autre methode: utiliser characters = phrase.split(''); characters.pop(); // Retire le dernier élément



// Votre patron a décidé d'économiser de l'argent en achetant un logiciel de reconnaissance de caractères
// pour numériser d'anciens romans dans votre base de données. Il semble que les mots soient bien saisis,
// mais vous remarquez rapidement qu'il y a aussi des nombres dans des endroits aléatoires dans le texte :
// stringClean ('! !')  '! !'
// stringClean ('123456789')  ''
// stringClean("(E3at m2e2!!)")  "(Eat me!!)"
// stringClean("Wh7y can't we3 bu1y the goo0d software3? #cheapskates3")  "Why can't we
// buy the good software? #cheapskates"
// Vos collaborateurs vous demandent une solution pour supprimer tous les nombres. Votre programme
// prendra en entrée une chaîne, devra nettoyer tous les caractères numériques, et renverra une chaîne avec
// les espacements, caractères et caractères spéciaux ~#$%^&!@*():; "'., tous intacts
const stringClean = (phrase) => {
    const newPhrase = [...phrase].filter((m)=>!/[0-9]/.test(m)).join('')
    console.log(newPhrase)
}
// stringClean("(E3at m2e2!!)");



// A partir d'une chaîne de caractères, renvoyez une chaîne dans laquelle chaque caractère (sensible à la
// casse) est répété une fois.
// doubleChar("String")  "SSttrriinngg"
// doubleChar("Hello World")  "HHeelllloo WWoorrlldd"
// doubleChar("1234!_ ")  "11223344!!__ "
const doubleChar = (phrase) => {
    const newPhrase = [...phrase].map((l)=>l+l).join('')
    console.log(newPhrase)
}
// doubleChar("Hello World");



// A partir d’une liste de nombres, supprimez les doublons et renvoyez la liste simplifiée sous forme ordonnée.
// removeDuplicates([1,1,2,4,5,2,1,2,3,5,5,5])
//  Array [ 1, 2, 3, 4, 5 ]
const removeDuplicate = (arrays) => {
    const newArray = []
    arrays.filter((n)=>{
        if(!newArray.includes(n)){
            newArray.push(n)
        }
    })
    newArray.sort((a,b)=>a-b)
    console.log(newArray);
}
const removeDuplicate2 = (arrays) => {
    const newArray = arrays.reduce((a,v) => a.includes(v) ? a : a.concat(v) ,[]).sort((a,b)=>a-b)
    console.log(newArray)
}
// removeDuplicate2([1, 1, 2, 4, 5, 2, 1, 2, 3, 5, 5, 5]);



// Deux joueurs - black et white - jouent à un jeu qui se compose de plusieurs tours. Si un joueur gagne
// un tour, il commencera également le prochain. S’il perd, c'est l'autre joueur qui commencera. A partir de
// la couleur du joueur actuel et du résultat du tour (true ou false), déterminez qui débutera le prochain
// tour.
// whoseMove("black",false)  "white"
// whoseMove("white",true)  "white"
// whoseMove("white",false)  "black"
const whoseMove = (c,r) => {
    if(r){
        console.log(c)
    }else if(c==="black"){
        console.log("white")
    }else{
        console.log("black")
    }
}
const whoseMove2 = (last, win) => {
    const suivant = win ? last : ( last=="black" ? "white" : "black")
    console.log(suivant)
}
// whoseMove2("white", true);



// Écrivez une fonction qui calcule combien vous devez donner de pourboire en fonction du montant total de
// la facture et du service. Vous devez tenir compte des notes suivantes:
// • Terrible: 0%
// • Poor: 5%
// • Good: 10%
// • Great: 15%
// • Excellent: 20%
// L’avis sur le service doit être insensible à la casse. Si un avis non reconnu est entré , vous devez renvoyer
// "Rating not recognised".
// Parce que vous êtes une personne sympathique, vous arrondissez toujours à la valeur supérieure, quel
// que soit le service.
// calculateTip(20, "ExcellEnt")  4 // Excellent service, vous donnez 20% de 20 = 4
// calculateTip(26.95, "goOd")  3 // Bon service, 10% de 26.95 arrondi à 3
// calculateTip(20, "hi")  "Rating not recognised"
const calculateTip = (montant, note) => {
    const notes = {
        "terrible" : 0,
        "poor" : 5,
        "good" : 10,
        "great" : 15,
        "excellent" : 20
    }
    if(note.toLowerCase() in notes){
        const pourboire = (montant*notes[note.toLowerCase()])/100
        console.log(Math.round(pourboire))
    }else{
        console.log("Rating not recognised");
    }
}
// calculateTip(26.95, "goOd");




// Ecrire une fonction accum telle que :
// accum("abcd")  "A-Bb-Ccc-Dddd"
// accum("RqaEzty")  "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt")  "C-Ww-Aaa-Tttt"
// Remarquez les majuscules au début de chacun des blocs, le nombre de lettres croissant et la séparation
// avec des tirets.
