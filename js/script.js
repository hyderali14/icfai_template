function nextPage() {
document.getElementById("page2").removeAttribute("style","display:none");
document.getElementById("page1").setAttribute("style","display:none");
}

function prevPage() {
document.getElementById("page1").removeAttribute("style","display:none");
document.getElementById("page2").setAttribute("style","display:none");
}

function drops() {
document.getElementById("drops").removeAttribute("style","display:none");
}
