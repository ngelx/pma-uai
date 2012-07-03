// Atach events to HTMLElements
$(document).ready(function(){  
  // Baricco,shirky, tovalds, piscitelli, levy
  var autors = ["autor_1","autor_2","autor_3","autor_4","autor_5"]

  for(i in autors){
    // addevents to autors
    var autor = document.getElementById(autors[i]);
    autor.addEventListener('dragstart', handleDragStart, false);
    autor.addEventListener('dragend', handleDragEnd, false);
    
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

var SCORE_OK = 10;
var SCORE_WRONG = -15;

function handleDragStart(e) {
  // set the dragged element
  dragData = this;
  
  // some efects for drag
  this.style.opacity = '0.4';
  e.dataTransfer.effectAllowed = 'move';
}

function handleDragEnd(e) {
  // some efects for drag
  this.style.opacity = '1';
  //e.dataTransfer.effectAllowed = 'move';
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
  $(this).addClass("frase_enter");
  console.log("drag_enter");

}

function handleDragLeave(e){
  if (this.className === "frase_ok") {
    console.log("ya esta ok")
    return
  }
  $(this).removeClass("frase_enter")
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
  if (fraseElement.className === "frase_ok") {
    console.log("ya esta ok")
    return
  }
  
  fraseElement.className = "frase_ok"
  var image = fraseElement.children[0]
  var frase = fraseElement.children[1]
  var autor = autorElement.children[0]
  
  image.src="images/autors/"+ autorElement.id +".jpg"
  $(image).removeClass("imagen_autor_hide")
  $(image).addClass("imagen_autor_show")
  
  i = frase.innerHTML
  i = i + '<label class="autor_label"> - ' + autor.innerHTML + '</label>'
  frase.innerHTML = i
  
  console.log("ok")
  score(SCORE_OK)
}

function handleWrong(fraseElement, autorElement){
  if (fraseElement.className === "frase_ok") {
    console.log("ya esta ok")
    return
  }
  
  score(SCORE_WRONG)
  fraseElement.className = "frase_wrong"
  console.log("mal")
}

function score(points){
  s = document.getElementById("score");
  newScore = parseInt(s.innerHTML) + points
  s.innerHTML = newScore
  console.log(newScore)
}
