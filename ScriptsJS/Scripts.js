/* responsive menu */
let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

/* تسوية */
function doc1(){
    var num = document.getElementById("num").value;
    var nom = document.getElementById("nom").value;
    var cin = document.getElementById("cin").value;
    var adresse = document.getElementById("adresse").value;
    var date = document.getElementById("date").value;
    if(nom == "" || cin == "" || adresse == "" || date == ""){
        alert("Vous devez remplir tous les champs !!!!!!");
    }else{
        sessionStorage.setItem("num",num);
        sessionStorage.setItem("nom",nom);
        sessionStorage.setItem("cin",cin);
        sessionStorage.setItem("adresse",adresse);
        sessionStorage.setItem("date",date);
        window.location.href="../Docs/تسوية.html";
    }
}

/* اقرار بتغيير */
function doc2(){
    var numB = document.getElementById("numB").value;
    var nom = document.getElementById("nom").value;
    var nomA = document.getElementById("nomA").value;
    var cin = document.getElementById("cin").value;
    var cinA = document.getElementById("cinA").value;
    var superficie = document.getElementById("superficie").value;
    var adresseB = document.getElementById("adresseB").value;
    var adresseP = document.getElementById("adresseP").value;
    var dateCh = document.getElementById("dateCh").value;
    var etat = document.getElementById("etat");
    if(numB == "" || nom == "" || nomA == "" || cin == "" || cinA == "" || superficie == "" || adresseB == "" || adresseP == "" || dateCh == ""){
        alert("Vous devez remplir tous les champs !!!!!!");
    }else{
        if(etat.checked == true){
            var statut = "مشاعة";
        }else if(etat.checked != true){
            statut = "غير مشاعة";
        }
        sessionStorage.setItem("numB",numB);
        sessionStorage.setItem("nom",nom);
        sessionStorage.setItem("nomA",nomA);
        sessionStorage.setItem("cin",cin);
        sessionStorage.setItem("cinA",cinA);
        sessionStorage.setItem("superficie",superficie);
        sessionStorage.setItem("adresseB",adresseB);
        sessionStorage.setItem("adresseP",adresseP);
        sessionStorage.setItem("dateCh",dateCh);
        sessionStorage.setItem("statut",statut);
        window.location.href="../Docs/اقرار بتغيير.html";
    }
}

/* التأكد من عدد السنوات */
function verify(){
    var CheckBoxYears = document.getElementById("NumbersOfYears");
    var InputYear = document.getElementById("GrpdatePaiment");
    var InputYears = document.getElementById("GrpdatesPaiment");
    if(CheckBoxYears.checked){
        InputYear.style.display = "none";
        InputYears.style.display = "inline-block";
    }else{
        InputYear.style.display = "inline-block";
        InputYears.style.display = "none";
    }
}

/* شهادة البيع */
function doc3(){
    var PayePenalite = document.getElementById("PayePenalite");
    var NumbersOfYears = document.getElementById("NumbersOfYears");
    var NumInterne = document.getElementById("NumInterne");

    var penalite = "non";
    var multiYears = "non";
    var NumInterneOrTitreF = "Titre Foncier";
    var datePaiment = document.getElementById("datePaiment").value;
    if(PayePenalite.checked){
        penalite = "oui";
    }
    if(NumbersOfYears.checked){
        datePaiment = document.getElementById("datesPaiment").value;
        multiYears = "oui";
    }
    if(NumInterne.checked){
        NumInterneOrTitreF = "Num Interne";
    }

    var num = document.getElementById("num").value;
    var nom = document.getElementById("nom").value;
    var adresseP = document.getElementById("adresseP").value;
    var titreF = document.getElementById("titreF").value;
    var adresseB = document.getElementById("adresseB").value;
    var superficie = document.getElementById("superficie").value;
    var montant = document.getElementById("montant").value;
    var NumQuittance = document.getElementById("NumQuittance").value;
    var date = document.getElementById("date").value;
    if(datePaiment == "" || num == "" || nom == "" || adresseP == "" || titreF == "" || adresseB == "" || superficie == "" || montant == "" || NumQuittance == "" || date == ""){
        alert("Vous devez remplir tous les champs !!!!!!");        
    }else{
        sessionStorage.setItem("penalite",penalite);
        sessionStorage.setItem("multiYears",multiYears);
        sessionStorage.setItem("NumInterneOrTitreF",NumInterneOrTitreF);
        sessionStorage.setItem("datePaiment",datePaiment);
        sessionStorage.setItem("num",num);
        sessionStorage.setItem("nom",nom);
        sessionStorage.setItem("adresseP",adresseP);
        sessionStorage.setItem("titreF",titreF);
        sessionStorage.setItem("adresseB",adresseB);
        sessionStorage.setItem("superficie",superficie);
        sessionStorage.setItem("montant",montant);
        sessionStorage.setItem("NumQuittance",NumQuittance);
        sessionStorage.setItem("date",date);
        window.location.href ="../Docs/شهادة.html";
    }

}