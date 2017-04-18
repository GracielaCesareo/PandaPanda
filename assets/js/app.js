var span = document.getElementsByClassName("close");

for (var i = 0; i < span.length; i++) {
  span[i].addEventListener("click",eliminar);
}

function eliminar(elemento) {
       var id = elemento.parentNode.getAttribute("id");
       node = document.getElementById(id);
       node.parentNode.removeChild(node);
}
