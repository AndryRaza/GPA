list_fruits=["Banane","Fraise","Mangue","Avocat"];
list_fleurs=["Tulipe","Tournesol","Muguet","Cactus"];
list_animaux=["Le Chien","Le chat","Le serpent","L'aigle"];
list_lol=["Soraka","Wukong","Teemo","Ashe"];
list_marvel=["Thor","Iron Man","Hulk","Captain America"];
list_wow=["Aile de Mort","Onyxia","Nefarian","Ragnaros"];
list_dbz=["Vegeta","Boo","Piccolo","Freezer"];
list_naruto=["Sasuke","Naruto","Sakura","Kakashi"];
list_prenom=["Bryan","Serge","Brice","Vanessa"];
list_mots=["Royal","La merde","Le BG","Le peureux"];
liste_nombres=["1","2","3","974"];
list_couleur=["Violet","Vert","Rouge","Marron"];

list_check=[0,0,0,0,0,0,0,0,0,0,0,0];
txt="";

list_historique=[];
list_favoris=[];

check_v=0;


function choisir(that){
    
    if (document.getElementById(that).innerHTML == ""){
        document.getElementById(that).innerHTML = "<img src= \" img/check.png \"  width:10px height:10px> ";
        list_check[associe(that)]=1;
    }
    else {
        document.getElementById(that).innerHTML="";
        list_check[associe(that)]=0;
    }
}

function associe(that){
    if (that=="fruits"){
        return 0;
    }
    if (that=="fleurs"){
        return 1;
    }
    if (that=="animaux"){
        return 2;
    }
    if (that=="lol"){
        return 3;
    }
    if (that=="marvel"){
        return 4;
    }
    if (that=="wow"){
        return 5;
    }
    if (that=="dbz"){
        return 6;
    }
    if (that=="naruto"){
        return 7;
    }
    if (that=="prenom"){
        return 8;
    }
    if (that=="mots"){
        return 9;
    }
    if (that=="nombres"){
        return 10;
    }
    if (that=="couleur"){
        return 11;
    }
}

function associe_reverse(n){
    if (n==0){
        return list_fruits;
    }
    if (n==1){
        return list_fleurs;
    }
    if (n==2){
        return list_animaux;
    }
    if (n==3){
        return list_lol;
    }
    if (n==4){
        return list_marvel;
    }
    if (n==5){
        return list_wow;
    }
    if (n==6){
        return list_dbz;
    }
    if (n==7){
        return list_naruto;
    }
    if (n==8){
        return list_prenom;
    }
    if (n==9){
        return list_mots;
    }
    if (n==10){
        return liste_nombres;
    }
    if (n==11){
        return list_couleur;
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

function rand_list(liste){
    return liste[getRandomInt(4)];
}
function reset(){
    list_check=[0,0,0,0,0,0,0,0,0,0,0,0];
    list_historique=[];
    txt="";
    document.getElementById("pseudo").innerText="Pseudo généré";
    document.getElementById("favoris").innerHTML="<h3>Favoris</h3>"
    document.getElementById("historique").innerHTML="<h3>Historique</h3>"
}

function randomize(tab) { /* mélanger une liste */
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
    return tab;
}

function generate(){
    txt="";
    txt_tab=[];
    for (i=0;i<=11;i++){
        if (list_check[i] == 1){
            txt_tab.push(rand_list(associe_reverse(i)));
        }
    }
    randomize(txt_tab);
    for (i=0;i < txt_tab.length;i++){
        txt= txt + " " + txt_tab[i];
    }

    list_historique.push(txt)
    historique();
    document.getElementById("pseudo").innerText=txt;

}

function historique(){
    txt_histo="Historique </br> </br>";
    for (i=0; i<list_historique.length;i++){
        if(i%3 == 2){
            document.getElementById("un").innerText="3- "+list_historique[i];
        }
        else if (i%3 == 1){
            document.getElementById("deux").innerText="2- "+list_historique[i];
        }
        else if (i%3 == 0){
            document.getElementById("trois").innerText="1- "+list_historique[i];
        }
    }
}

function favoris(){
    txt_fav="Favoris </br> </br>";
    list_favoris.push(txt);
    for (i=0; i<list_favoris.length;i++){
        if(i%3 == 2){
            document.getElementById("un_fav").innerText="3- "+list_favoris[i];
        }
        else if (i%3 == 1){
            document.getElementById("deux_fav").innerText="2- "+list_favoris[i];
        }
        else if (i%3 == 0){
            document.getElementById("trois_fav").innerText="1- "+list_favoris[i];
        }
    }
}