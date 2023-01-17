// function openPanoramic () {
//     document.getElementById("panoramicid").style.visibility = "visible"
//     document.getElementById("panoramicid").style.height = "100%";
// }
// function closePanoramic () {
//     document.getElementById("panoramicid").style.height = "100%";
//     document.getElementById("panoramicid").style.visibility = "hidden";
// }


function togglePanoramic () {
     var element = document.getElementById("panoramicid");
     if (element.style.visibility == "hidden") {
        element.style.visibility = "visible";
        element.style.height = "100vh";
     } else {
        element.style.height = "0vh";
        element.style.visibility = "hidden";
     }
}