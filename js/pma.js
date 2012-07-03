
// Atach events to HTMLElements
$(document).ready(function(){
  // TODO: terminar bien esto, hayq ue agregar el resto de los autores
  
  // Baricco,shirky, tovalds, piscitelli, levy
  var autors = ["autor_1","autor_2","autor_3","autor_4","autor_5"]

  for(i in autors){
    var autor = document.getElementById(autors[i]);
    autor.addEventListener('dragstart', handleDragStart, false);
    
    // TODO: terminar bien esto, hay que agregar el resto de los autores    
    var frases = document.getElementsByName(autors[i]);
    [].forEach.call(frases, function(frase) {
      frase.addEventListener('drop', handleDrop, false);
    })
  }
})

var dragSrcEl = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  this.style.opacity = '0.4';
  console.log("drag:" + this)

  dragSrcEl = this;

  //e.dataTransfer.effectAllowed = 'move';
  //e.dataTransfer.setData('text/html', this.innerHTML);
}
 
function handleDrop(e) {
  // this/e.target is current target element.
  console.log("drop:" + this)
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  return false;
} 

  