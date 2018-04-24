function showDiv() {
  document.querySelector("#outPut").classList.remove("zoomOut");
  document.querySelector("#outPut").classList.add("zoomIn");
  document.getElementById("outPut").style.display = "block";
}
function hideDiv() {
  document.querySelector("#outPut").classList.toggle("zoomIn");
  document.querySelector("#outPut").classList.add("zoomOut");
}

export { showDiv, hideDiv };
