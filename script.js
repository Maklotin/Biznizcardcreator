var emails = []
var nummer = 0

function leggTilEmail() {
    if (document.getElementById("email").value !== "" & emails.length < 2) {
        emails.push(document.getElementById("email").value)
        console.log(emails)
        document.getElementById("eposter").innerHTML += "<p class='emails' id='emailen" + nummer + "'>" + emails[nummer] + "</p>"
        nummer++
    }
}

function slettEmail() {
    emails.pop()
    console.log(emails)
    console.log(document.getElementById('emailen' + emails.length))
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

function bilde

function printKort() {

    var popup = window.open('', 'PRINT', 'height=600,width=1000');
    popup.document.write('<html><head><title>' + "Lag ditt eget kort om deg" + '</title><style>body {font-family: Arial;} #kort {border: 2px solid black;width: 1000px;height: 600px;display: flex;flex-direction: column;box-shadow: 5px 5px 5px black;background-color: white;}#top_kort {display: flex;flex-direction: row;}#kort_bilde {width: 200px;height: 200px;border: 2px solid black;margin: 50px;}#kort_navn {font-family: Arial, Helvetica, sans-serif;text-decoration: none;text-shadow: none;position: relative;top: 10px;width: 600px;}#kort_navn, .editable {cursor: pointer;}#kort_info2 {width: 350px;height: 50px;display: flex;flex-flow: row wrap;}#kort_info2 p, #skole_kort p {font-family: Arial, Helvetica, sans-serif;margin: 20px;margin-top: 0px;}#pronomen {display: flex;flex-direction: row;}#bosted {display: flex;flex-direction: row;margin: 0px;width: 200px;}#bosted p {margin-left: -16px;}#bio {height: 250px;width: 600px;max-width: 600px;max-height: 250px;margin-left: 50px;}#bunn_kort {display: flex;flex-direction: row;}#bunn_kort p {font-family: Arial, Helvetica, sans-serif;border-color: 2px solid black;;}</style>');
    popup.document.write('</head><body >');
    popup.document.write(document.getElementById("kort").innerHTML);
    popup.document.write('</body></html>');
    popup.document.close();
    popup.focus();
    popup.print();
    popup.close();
    return true;
}

