addEventListener("load", init);
SavedDOM = null;

function defTitre1() {
    //on récupère l'élement qui est associé à l'ID "titre"
    var h1 = document.getElementById("titre");
    //si cet élément existe bel est bien, le titre de la page devient le contenu (sans appliquer les balises HTML) de cet élément
    if (h1)
        document.title = h1.innerText;
}

function defTitre2() {
    //on récupère une collection (sous forme de tableau) d'élements dont la balise HTML est h2
    var h2 = document.getElementsByTagName("h2");
    //si la collection contient au moins un élément, le titre de la page devient le contenu (sans appliquer les balises HTML) du premier élément de la collection (donc le premier h2 rencontré)
    if (h2 && h2.length > 0)
        document.title = h2.item(0).innerText
}

function defTitre3() {
    h2 = document.getElementsByTagName("h2");
    if (h2 && h2.length > 0)
        //le titre de la page devient le contenu (sans appliquer les balises HTML) du dernier élément de la collection (donc le dernier h2 rencontré)
        document.title = h2.item(h2.length - 1).innerText;
    else
        //si la collection de h2 est vide, le titre de la page devient "Augustin ALONSO"
        document.title = "Augustin ALONSO"
}

function defTitre4() {
    //on récupère une collection (sous forme de tableau) d'élements dont la classe est "firstOrLast"
    var firstOrLast = document.getElementsByClassName("firstOrLast");
    if (firstOrLast && firstOrLast.length > 0)
        //opérateur ternaire :
        //si le nombre d'éléments de la collection est pair
        //alors le titre de la page devient le contenu (sans appliquer les balises HTML) du premier élément de la collection
        //sinon le titre de la page devient le contenu (sans appliquer les balises HTML) du dernier élément de la collection
        document.title = firstOrLast.length % 2 == 0 ? firstOrLast.item(0).innerText : firstOrLast.item(firstOrLast.length - 1).innerText;
    else
        document.title = "Augustin ALONSO"
}

function inverseTexte() {
    //on récupère une collection d'éléments dont la balise HTML est p (paragraph)
    var p = document.getElementsByTagName("p");
    if (p && p.length >= 2) {
        //on stocke le premier élément de la collection dans p1
        var p1 = p.item(0).innerHTML;
        //le contenu du premier élément prend la valeur du contenu du deuxième élément
        //.innerHTML permet de conserver les balises HTML contenues dans l'élément
        p.item(0).innerHTML = p.item(1).innerHTML;
        //vice versa (grâce à p1)
        p.item(1).innerHTML = p1;
    }
}

function datemodif() {
    //on récupère l'élément dont l'id est "date_modif" (le div)
    var date_modif = document.getElementById("date_modif");
    //on récupère la date de dernière modification de la page
    var date = new Date(document.lastModified);
    //on injecte ce qui suit dans le div
    date_modif.innerText = "Dernière modification : le "
        + getTheDay(date.getDay()) //on appelle la fonction getTheDay pour convertir le nombre en jour de la semaine
        + " "
        + date.getDate() //on affiche le numéro de jour du mois
        + " "
        + getTheMonth(date.getMonth()) //on appelle la fonction getTheMonth pour convertir le nombre en mois de l'année
        + " "
        + date.getFullYear() //on affiche l'année
        + document.getElementsByName("author").item(0).attributes["content"].nodeValue; //on sélectionne le 1er auteur de la liste des auteurs
}

function majHorloge1(){
    //on récupère la date actuelle
    var now = new Date(Date.now());
    document.getElementById("horlogeV1").innerText = //on remplace le contenu du <p> identifié par "horlogeV1" par :
        "Horloge 1 : " //texte indicatif précédent l'horloge
        + now.getHours() //heures
        + ":" //séparateur
        + now.getMinutes() //minutes
        + ":" //séparateur
        + now.getSeconds() //secondes
    setInterval(majHorloge1, 1000); //intervalID = window.setInterval(fonction,delai) avec :
    //(fonction) -> fonction qui doit être appelée de manière répétée.
    //(delai) -> nombre de millisecondes que setInterval() doit attendre avant chaque appel de fonction.
}

function majHorloge2(){
    var now = new Date(Date.now());
    document.getElementById("horlogeV2").innerText = "Horloge 2 : " + now.getHours() + ":" + now.getMinutes() + ":" + now.getSeconds();
    setTimeout(majHorloge2, 1000); //intervalID = window.setTimeout(fnct, delai) avec :
    //(fnct) -> la fonction que vous désirez exécuter après delai millisecondes.
    //(delai) -> le nombre de millisecondes après lequel la fonction doit être appelée.
}

function majGraphH() {
    const horloge = document.getElementById("graphHorloge");
    const now = new Date(Date.now());
    var nowForSplit = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
    const chars = nowForSplit.split('');
    horloge.innerHTML = '';
    for (const c in chars) {
        if (chars[c] === ':') { //vrai si les types sont identiques
            horloge.innerHTML += ':'; //affiche le séparateur
        } else horloge.innerHTML =
            horloge.innerHTML.concat('<img src="images/' + chars[c] + '.gif" />'); //affichage des images correspondantes
    }
    setInterval(majGraphH, 1000);
}

//this : dépend du contexte (passé par l'EventListener chargé en bas de page)
function inputNumber() {
    //modification de la classe (utilisée par le CSS) de l'input
    if(this.value === ""){ //vrai si les types sont identiques
        this.className = ["blanc"]; //cas champ vide
    }
    else if(!isNaN((this.value))){
        this.className = ["vert"]; //cas nombre
    }
    else{
        this.className = ["rouge"]; //cas autre
    }
}

function getTheDay(day) {
    switch (day) {
        case 0:
            return "dimanche";
            break;
        case 1:
            return "lundi";
            break;
        case 2:
            return "mardi";
            break;
        case 3:
            return "mercredi";
            break;
        case 4:
            return "jeudi";
            break;
        case 5:
            return "vendredi";
            break;
        case 6:
            return "samedi";
            break;
        default:
            return "";
    }
}

function getTheMonth(month) {
    switch (month) {
        case 0:
            return "janvier"
            break;
        case 1:
            return "février"
            break;
        case 2:
            return "mars"
            break;
        case 3:
            return "avril"
            break;
        case 4:
            return "mai"
            break;
        case 5:
            return "juin"
            break;
        case 6:
            return "juillet"
            break;
        case 7:
            return "août"
            break;
        case 8:
            return "septembre"
            break;
        case 9:
            return "octobre"
            break;
        case 10:
            return "novembre"
            break;
        case 11:
            return "décembre"
            break;
        default:
            return "";
    }
}

function majNbJours() {
    var date_fixe = new Date(2018,7,19,0,0,0,0); //Date(year, month, day [, hour, minute, second, millisecond ])
    var now = Date.now(); //date du jour
    var result =  Math.ceil(
        (date_fixe.valueOf() - now.valueOf()) //millisecondes séparant l'instant présent de la date_fixe
        /
        (1000 * 3600 * 24) //permet de convertir le nombre de millisecondes en jours
    );
    var date_count = document.getElementById("date_count");
    date_count.innerText = date_count.innerText.replace("xxx", result);
    //on traite le cas d'un nombre de jours inférieur ou égal à 1
    if(result <= 1){
        date_count.innerText = date_count.innerText.replace("jours", "jour");
    }
}

var lebody;
function getByValue() {
    lebody = document.body.innerHTML;
    console.log(lebody); //debug
    var x = document.createElement("p");
    var t = document.createTextNode("This is a paragraph.");
    x.appendChild(t);
    document.body.appendChild(x);
    x.innerHTML = "<div>div javascript</div>";
    console.log(document.body);
    console.log(lebody);
}

function initMenu() {
    var menus = document.getElementsByClassName("menu"); 
    //pour tous les menus (au nombre de 4 ici)
    //on place un "+" devant le titre et on enroule le menu
    for(var i = 0; i < menus.length; i++){
        menus[i].getElementsByTagName("span")[0].addEventListener("click",menu);
        menus[i].getElementsByTagName("span")[0].innerText = "+ " + menus[i].getElementsByTagName("span")[0].innerText;
        menus[i].getElementsByTagName("ul")[0].style.display = "none";
    }
}

function menu() {
    //permet de dérouler les menus (et remplace le "+" par "-")
    var display = this.parentElement.getElementsByTagName("ul")[0].style.display;
    this.parentElement.getElementsByTagName("ul")[0].style.display = display == "none" ? "block" : "none";
    this.innerText = (display == "none" ? "-" : "+") + this.innerText.substring(1);
}

function recherche() {
    var mot = this.parentElement.children[0].value;
    if(mot.split(" ").join("") != "") {
        var id = this.id;
        document.body.innerHTML = SavedDOM;
        init();
        document.getElementById(id).parentElement.children[0].value = mot;
        rechercheNode(document.body, mot);
    }
}

function rechercheNode(noeud, mot){
    var find ="<span class='select'>"+ mot +"</span>";

    var store = new Array();
    for(var i = 0; i< noeud.childNodes.length; i++){
        if(noeud.childNodes[i].nodeType == Node.TEXT_NODE){
            var text = noeud.childNodes[i].textContent.split(mot);
            if(text.length > 1 ){
                for(var j = 0; j< text.length-1; j++){
                    store.push(document.createTextNode(text[j]));
                    var span = document.createElement("span");
                    span.className = ["select"];
                    span.appendChild(document.createTextNode(mot));
                    store.push(span);
                }
                store.push(document.createTextNode(text[text.length-1]));
            }
            else{
                store.push(noeud.childNodes[i]);
            }
        }
        else if(noeud.childNodes[i].nodeType == Node.ELEMENT_NODE){
            rechercheNode(noeud.childNodes[i],mot);
            store.push(noeud.childNodes[i]);
        }
    }
    while(noeud.childNodes.length > 0){
        noeud.removeChild(noeud.firstChild);
    }
    store.reverse();
    while(store.length > 0){
        noeud.appendChild(store.pop());
    }
}

//appel des fonctions au chargement de la page
function init() {
    if(SavedDOM == null) {
        SavedDOM = document.body.innerHTML;
    }
    
    addEventListener("load", defTitre1);
    addEventListener("load", defTitre2);
    addEventListener("load", defTitre3);
    addEventListener("load", defTitre4);
    addEventListener("load", inverseTexte);
    addEventListener("load", datemodif);
    addEventListener("load", document.getElementById("date_count").addEventListener("click", majNbJours)); //lors d'un clic sur l'élement dont l'id vaut "date_count", appelle la fonction majNbJours
    addEventListener("load", majHorloge1);
    addEventListener("load", majHorloge2);
    addEventListener("load", majGraphH);
    document.querySelector("[type='text']").addEventListener("input", inputNumber); //lors de la saisie dans le formulaire (type="text" nom="input"), appele la fonction inputNumber
    //EventListener passe le contexte de l'élément qui a déclenché l'évènement
    initMenu();
    document.getElementById("Recherche").addEventListener("click", recherche);
    document.getElementById("RechercheAuto").addEventListener("input",recherche);
}
