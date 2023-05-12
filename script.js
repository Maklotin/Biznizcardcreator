var emails = []
var nummer = 0

var er_row = true
var er_row_verdi = "row"
var bakgrunnsfarge = document.getElementById("bakgrunnsfarge").value
var valgtFont = document.getElementById("velg_font_select").value
var valgtSkyggeFarge = document.getElementById("skyggefarge").value
var valgtTekstFarge = document.getElementById("tekstfarge").value
var valgtBilde = "url(bilder/placeholder.webp)"

if (er_row == false) {
    er_row_verdi = "row-reverse"
}   else {
    er_row_verdi = "row"
}

function leggTilEmail() {
    if (document.getElementById("email").value !== "" & emails.length < 2) {
        emails.push(document.getElementById("email").value)
        document.getElementById("eposter").innerHTML += "<p class='emails' id='emailen" + nummer + "'>" + emails[nummer] + "</p>"
        nummer++
        console.log(emails)
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
    valgtBilde = image.style.background


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

function style(){
    document.body.style.backgroundColor = bakgrunnsfarge
  }
  function printKort(){
      var kort = document.querySelector("#kort").innerHTML;
      var printWindow = window.open('', '', 'left=40,top=40,height=500,width=900');
      printWindow.document.write('<html>');
      printWindow.document.write('<head> <title> document-printed-by-javascript </title> </head>');
      printWindow.document.write('<style>body, #kort { background-color: ' + bakgrunnsfarge + '; display: flex; flex-direction: column; align-items: center; } #navntekst, #jobbtekst, #textarea, #eposttekst, #eposter, #nr, #tlf, #adr1, #adr2, #adr3 { font-family: ' + valgtFont + '; } #textarea { background-color: transparent; border: 2px dashed ' + valgtTekstFarge +'; font-size: 2.5vh; text-shadow: 1px 1px 2px ' + valgtSkyggeFarge + '; position: relative; margin: 2vh; max-width: 42vh; min-width: 42vh; max-height: 30vh; min-height: 30vh; } .innhold { display: flex; flex-direction: row; justify-content: center; width: 70%; } #kort { border: 2px solid black; width: 100vh; height: 60vh; display: flex; flex-flow: row wrap; box-shadow: 1vh 1vh 3vh black; } #navn_og_tittel { display: flex; flex-direction: column; width: 65vh; height: 20vh; margin: 2vh; } #bilde { width: 20vh; height: 20vh; } #kort_topp { height: 20vh; display: flex; flex-direction: ' + er_row_verdi + '; } #bildeknapp { background-color: none; border: none; height: 20vh; width: 20vh; color: transparent; background-image: ' + valgtBilde + '; background-size:cover; margin: 3vh; box-shadow: 1vh 1vh 1vh ' + valgtSkyggeFarge + '; border: 2px solid ' + valgtTekstFarge + '; } .navn-tittel { height: 10vh; width: 40vh; background-color: transparent; border: none; display: flex; text-shadow: 1px 1px 2px ' + valgtSkyggeFarge +'; } #navn, #tittel { width: 100%; } #navn h2 { font-size: 36px; } #tittel { font-size: 20px; margin-top: -3vh; } #kort_innhold { display: flex; flex-direction: row; justify-content: center; margin: 2vh; margin-top: 4vh;} #venstre { width: 48vh; height: 30vh; } #venstre { max-width: 46vh; min-width: 48vh; max-height: 30vh; min-height: 30vh; } #eposttekst, #nr, #tlf, #addresse p { text-shadow: 1px 1px 2px ' + valgtSkyggeFarge + '; } #hoeyre { max-height: 30vh; display: flex; flex-direction: column; transform: translate(' + xVhTxt + 'vh, 0%); } #top { width: 48vh; height: 15vh; display: flex; flex-direction: row; justify-content: space-between; } #bunn { height: 15vh; width: 48vh; margin-top: 4vh; } #bunn h3 { margin: 1vh; text-shadow: 1px 1px 2px ' + valgtSkyggeFarge +'; } #addresse { margin: 1vh; display: flex; flex-flow: row wrap; justify-content: space-between; } #hoeyre2, #venstre2 { display: flex; flex-direction: column; margin: 1vh; } #modify_kort { margin: 4vh; } #bytt_posisjon { margin-top: 4vh; display: flex; flex-direction: column; width: 60vh; box-shadow: 1vh 1vh 1vh ' + valgtSkyggeFarge +'; } #bytt_top, #bytt_bunn { display: flex; flex-direction: row; justify-content: space-around; }</style><body>');
      printWindow.document.write(kort);
      printWindow.document.write('</body></html>');
      //printWindow.document.print();
      //printWindow.document.close();
      //printWindow.focus();
      printWindow.print();
      printWindow.close();
  }

function endreBakgrunnsfarge() {
    document.getElementById("kort").style.backgroundColor = document.getElementById("bakgrunnsfarge").value
}

function endreTekstfarge() {
    var tekstFarge = document.getElementById("tekstfarge").value
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
    var skyggeFarge = document.getElementById("skyggefarge").value
    document.getElementById("bildeknapp").style.boxShadow = "1vh 1vh 1vh " + skyggeFarge
    document.getElementById("kort").style.boxShadow = "1vh 1vh 1vh " + skyggeFarge
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
    var font = document.getElementById("velg_font_select").value
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

var xVhTxt = 0

function flyttTxtV() {
    xVhTxt = xVhTxt - 10
    document.getElementById("textarea").style.transform = 'translate(' + xVhTxt + 'vh, 0%)'
}

function flyttTxtH() {
    xVhTxt = xVhTxt + 10
    document.getElementById("textarea").style.transform = 'translate(' + xVhTxt + 'vh, 0%)'
}

