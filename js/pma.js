
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
  
  dragData = this;
  
  this.style.opacity = '0.4';
  e.dataTransfer.effectAllowed = 'move';
}
 
function handleDrop(e) {
  // this/e.target is current target element.
  if (e.stopPropagation) {
    e.stopPropagation(); // Stops some browsers from redirecting.
  }
  
  // Check !!
  checkResult(this,dragData)
  
  return false;
} 

function checkResult(fraseElement, autorElement){
  if (autorElement.id === fraseElement.getAttribute('name')) {
    handleOk(fraseElement,autorElement)
  }
  else {
    handleWrong(fraseElement,autorElement)
  }
}

function handleOk(fraseElment, autorElement){
  console.log("ok")
}

function handleWrong(fraseElment, autorElement){
  console.log("mal")
}
