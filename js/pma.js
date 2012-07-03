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
      frase.addEventListener('dragenter', handleDragEnter, false);
      frase.addEventListener('dragleave', handleDragLeave, false);
    })
  }
})

// global variable that copntains the dragged element
var dragData = null;

function handleDragStart(e) {
  // set the dragged element
  dragData = this;
  
  // some efects for drag
  this.style.opacity = '0.4';
  e.dataTransfer.effectAllowed = 'move';
}
 
function handleDrop(e) {
  // Stops some browsers from redirecting.
  if (e.stopPropagation) {
    e.stopPropagation();
  }  
  // Check !!
  checkResult(this,dragData)
  
  return false;
} 

function handleDragStart(e) {
  // set the dragged element
  dragData = this;
  
  // some efects for drag
  this.style.opacity = '0.4';
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnter(e){  
  //todo:chquear set ..
  if (this.className === "frase_ok") {
    console.log("ya esta ok")
    return
  }

  console.log("drag_enter");
}

function handleDragLeave(e){
  if (this.className === "frase_ok") {
    console.log("ya esta ok")
    return
  }

  console.log("drag_leave");
}


function checkResult(fraseElement, autorElement){
  // the "brain" function. Here is where is the logic for checking results
  
  if (autorElement.id === fraseElement.getAttribute('name')) {
    handleOk(fraseElement,autorElement)
  }
  else {
    handleWrong(fraseElement,autorElement)
  }
}

function handleOk(fraseElement, autorElement){
  // TODO: hacer algo interesante ...
  if (fraseElement.className === "frase_ok") {
    console.log("ya esta ok")
    return
  }
  
  fraseElement.className = "frase_ok"
  i = fraseElement.children[0].innerHTML
  autor = autorElement.children[0].innerHTML
  i = i + '<label class="autor_label"> - ' + autor + '</label>'
  fraseElement.children[0].innerHTML = i
  
  console.log(i)
  console.log("ok")
  score(10)
}

function handleWrong(fraseElement, autorElement){
  score(-15)
  console.log("mal")
}

function score(points){
  s = document.getElementById("score");
  newScore = parseInt(s.innerHTML) + points
  s.innerHTML = newScore
  console.log(newScore)
}
