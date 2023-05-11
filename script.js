var emails = []
var nummer = 0

var font = document.getElementById("velg_font_select").value
var er_row = true
var bakgrunnsfarge = document.getElementById("bakgrunnsfarge").value
var font = document.getElementById("velg_font_select").value
var skyggeFarge = document.getElementById("skyggefarge").value
var tekstFarge = document.getElementById("tekstfarge").value

function leggTilEmail() {
    if (document.getElementById("email").value !== "" & emails.length < 2) {
        emails.push(document.getElementById("email").value)
        document.getElementById("eposter").innerHTML += "<p class='emails' id='emailen" + nummer + "'>" + emails[nummer] + "</p>"
        nummer++
    }
}

function slettEmail() {
    emails.pop()
    document.getElementById('emailen' + emails.length).innerHTML = ""

    nummer--
}

var byttBilde = function (event) {
    var image = document.getElementById('bildeknapp');
    image.style.backgroundImage = "url(" + URL.createObjectURL(event.target.files[0]) + ")";
};

var vis = true
function visMer() {
    if (vis == true) {
        document.getElementById("hjelp").style.display = "inline"
        document.getElementById("vis_mer").innerHTML = "vis mindre..."
        vis = false
    } else {
        document.getElementById("hjelp").style.display = "none"
        document.getElementById("vis_mer").innerHTML = "vis mer..."
        vis = true
    }

}

function bildeVenstre() {
    document.getElementById("kort_topp").style.flexDirection = "row"
    er_row = true
}

function bildeHoeyre() {
    document.getElementById("kort_topp").style.flexDirection = "row-reverse"
    er_row = false
}

function printKort() {

    var popup = window.open('', 'PRINT', 'height=600,width=1000');

    //fixxxxxx
    popup.document.write('<html><head><title>' + "Lag ditt eget Bizniz kort" + '</title><style>body { background-color: ' + bakgrunnsfarge + '; display: flex; flex-direction: column; align-items: center; transition: all 0.5s ease; } #textarea { background-color: transparent; border: 2px dashed black; font-size: 2.5vh; text-shadow: 1px 1px 2px black; position: relative; margin: 2vh; max-width: 42vh; min-width: 42vh; max-height: 30vh; min-height: 30vh; transition: all 1s ease; } #textarea:focus { outline: none; } .innhold { display: flex; flex-direction: row; justify-content: center; width: 70%; } #vis_mer { background-color: transparent; border: none; text-decoration:underline; color: blue; margin: 1vh; } #vis_mer:hover { cursor: pointer; } #hjelp { display: none; } #kort { border: 2px solid black; width: 100vh; height: 60vh; display: flex; flex-flow: row wrap; box-shadow: 1vh 1vh 3vh black; } #navn_og_tittel { display: flex; flex-direction: column; width: 65vh; height: 20vh; margin: 2vh; } #bilde { width: 20vh; height: 20vh; } #kort_topp { height: 20vh; display: flex; transition: all 0.5s ease; flex-direction: row; } #bildeknapp { background-color: none; border: none; transition: all 0.5s ease; height: 20vh; width: 20vh; color: transparent; background-image: url("bilder/bilde_placeholder.webp"); background-size:cover; margin: 3vh; box-shadow: 1vh 1vh 1vh black; border: 2px solid black; } #bildeknapp:hover { transform: scale(1.3); } .navn-tittel { height: 10vh; width: 40vh; background-color: transparent; border: none; display: flex; text-shadow: 1px 1px 2px black; } #navn, #tittel { width: 100%; } #navn h2, #tittel p, #tlf, #addresse p { transition: all 0.2s ease; border-bottom: 0px solid black; } #navn h2:focus, #tittel p:focus, #email p:focus, #tlf:focus, #addresse p:focus { outline: none; border-bottom: 3px solid black; } #navn h2 { font-size: 36px; } #navn h2:hover, #tittel p:hover, #email p:hover, #tlf:hover, #addresse p:hover { color: blue; cursor: text; } #email { background-color: transparent; border: none; } #tittel { font-size: 20px; margin-top: -3vh; } #kort_innhold { display: flex; flex-direction: row; justify-content: center; margin: 2vh; } #venstre { width: 48vh; height: 30vh; } #venstre { max-width: 46vh; min-width: 48vh; max-height: 30vh; min-height: 30vh; } #eposttekst, #nr, #tlf, #addresse p { text-shadow: 1px 1px 2px black; } #hoeyre { max-height: 30vh; display: flex; flex-direction: column; transition: all 1s ease; } #top { width: 48vh; height: 15vh; display: flex; flex-direction: row; justify-content: space-between; } #bunn { height: 15vh; width: 48vh; } #bunn h3 { margin: 1vh; text-shadow: 1px 1px 2px black; } #addresse { margin: 1vh; display: flex; flex-flow: row wrap; justify-content: space-between; } #hoeyre2, #venstre2 { display: flex; flex-direction: column; margin: 1vh; } #modify_kort { margin: 4vh; } #bytt_posisjon { margin-top: 4vh; display: flex; flex-direction: column; width: 60vh; box-shadow: 1vh 1vh 1vh black; } #bytt_top, #bytt_bunn { display: flex; flex-direction: row; justify-content: space-around; } .radio { transition: all 0.5s ease; } .radio:hover { cursor: pointer; transform: scale(2.5); } .radio:active { transform: scale(1.2); } </style>');
    popup.document.write('</head><body >');
    popup.document.write(document.getElementById("kort").innerHTML);
    popup.document.write('</body></html>');
    popup.document.close();
    popup.focus();
    popup.print();
    popup.close();
    return true;
}

function endreBakgrunnsfarge() {
    document.getElementById("kort").style.backgroundColor = document.getElementById("bakgrunnsfarge").value
}

function endreTekstfarge() {
    document.getElementById("navntekst").style.color = tekstFarge
    document.getElementById("jobbtekst").style.color = tekstFarge
    document.getElementById("textarea").style.color = tekstFarge
    document.getElementById("eposttekst").style.color = tekstFarge
    document.getElementById("eposter").style.color = tekstFarge
    document.getElementById("nr").style.color = tekstFarge
    document.getElementById("tlf").style.color = tekstFarge
    document.getElementById("addressetekst").style.color = tekstFarge
    document.getElementById("adr1").style.color = tekstFarge
    document.getElementById("adr2").style.color = tekstFarge
    document.getElementById("adr3").style.color = tekstFarge
    document.getElementById("bildeknapp").style.border = "2px solid " + tekstFarge
    document.getElementById("kort").style.border = "2px solid " + tekstFarge
    document.getElementById("textarea").style.border = "2px dashed " + tekstFarge
}

function endreSkyggefarge() {
    document.getElementById("bildeknapp").style.boxShadow = "1vh 1vh 1vh " + skyggeFarge
    document.getElementById("kort").style.boxShadow = "3vh 3vh 3vh " + skyggeFarge
    document.getElementById("navntekst").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("jobbtekst").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("textarea").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("eposttekst").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("eposter").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("nr").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("tlf").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("addressetekst").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("adr1").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("adr2").style.textShadow = "1px 1px 2px " + skyggeFarge
    document.getElementById("adr3").style.textShadow = "1px 1px 2px " + skyggeFarge
}

function endreFont() {
    document.getElementById("navntekst").style.fontFamily = font
    document.getElementById("jobbtekst").style.fontFamily = font
    document.getElementById("textarea").style.fontFamily = font
    document.getElementById("eposttekst").style.fontFamily = font
    document.getElementById("eposter").style.fontFamily = font
    document.getElementById("nr").style.fontFamily = font
    document.getElementById("tlf").style.fontFamily = font
    document.getElementById("addressetekst").style.fontFamily = font
    document.getElementById("adr1").style.fontFamily = font
    document.getElementById("adr2").style.fontFamily = font
    document.getElementById("adr3").style.fontFamily = font
}

function flyttTxtV() {
    document.getElementById("textarea").style.transform = 'translate(0%, 0%)'
    document.getElementById("hoeyre").style.transform = 'translate(0%, 0%)'
}
function flyttTxtH() {
    document.getElementById("textarea").style.transform = 'translate(+49vh, 0%)'
    document.getElementById("hoeyre").style.transform = 'translate(-47vh, 0%)'
}