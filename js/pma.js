
// Atach events to HTMLElements
$(document).ready(function(){  
  // Baricco,shirky, tovalds, piscitelli, levy
  var autors = ["autor_1","autor_2","autor_3","autor_4","autor_5"]

  for(i in autors){
    // addevents to autors
    var autor = document.getElementById(autors[i]);
    autor.addEventListener('dragstart', handleDragStart, false);
    
    // addevents to frases
    var frases = document.getElementsByName(autors[i]);
    [].forEach.call(frases, function(frase) {
      frase.addEventListener('drop', handleDrop, false);
    })
  }
})

// global variable that copntains the id dragged
var dragData = null;

function handleDragStart(e) {
  // Target (this) element is the source node.
  this.style.opacity = '0.4';

  dragData = this;

  e.dataTransfer.effectAllowed = 'move';
}
 
function handleDrop(e) {
  // this/e.target is current target element.
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  
  if (dragData.id === this.getAttribute('name')) {
    handleOk(this,dragData)
  }
  else {
    handleWrong(this,dragData)
  }
  
  return false;
} 

function handleOk(fraseElment, autor){
  console.log("ok")
}

function handleWrong(fraseElment, autor){
  console.log("mal")
}
