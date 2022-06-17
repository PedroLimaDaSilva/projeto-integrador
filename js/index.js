var acordeao = document.getElementsByClassName("acordeao");
var i;

for (i = 0; i < acordeao.length; i++) {
  acordeao[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
	
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
	  document.getElementById("img-ref").src="imagens/seta.png";
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
	  document.getElementById("img-ref").src="imagens/seta2.png";
    }
  });
}