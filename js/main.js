// GO!
document.querySelector("#hide-nav").addEventListener('click',function(){
// TASK 1 -- Show/Hide Nav
  var ocuEl = document.querySelector('.answer-box .nav-menu');
  //var bot = document.querySelector()
  console.log(ocuEl);
  console.log(ocuEl.textContent);
  ocuEl.classList.contains("nav-menu-hidden");


  if (ocuEl !== "nav menu-hidden"){

      ocuEl.classList.add("nav-menu-hidden");
      //ocuEl.innerHTML = <button>Show me</button>;
    }
    else {
      ocuEl.classList.remove("nav menu-hidden");
      //ocuEl.innerHTML = <button>Hidden me</button>;
    }
})
//------------------------------------------------------
//document.querySelector("#select-items").addEventListener('click',function(){
// TASK 2 -- Select an Icon
var icoEl = document.querySelectorAll('.option');
  function selEl(someObj){
    //console.log(someObj);
    //console.log(typeof icoEl);
    var cli = someObj.currentTarget;
    cli.classList.toggle('selected');
    //console.log(cli.classList);
  }
  icoEl.forEach(function addListenerIcon(btnEl, i){
    btnEl.addEventListener('click', selEl);
  })

//-----------------------------------------------------
//document.querySelector("#add-vals").addEventListener('click',function(){
// TASK 3 -- Move Item From List to List
var putEl = document.querySelectorAll('.point');
  //console.log(putEl);
  //console.log(typeof putEl);
  //console.log(putEl.textContent);

  function addNum(someEvt){
    var putNumEl = someEvt.currentTarget;
    //console.log(putNumEl);
    var numRmv = document.querySelector('.total-points');
    //console.log(typeof numRmv);
    //console.log(numRmv.textContent);
    var objNum = parseInt(numRmv.textContent);
    //console.log(objNum);
    //console.log(typeof objNum);
    var numAdd = parseInt(putNumEl.textContent);

    objNum = objNum + numAdd;
    numRmv.innerHTML = objNum;
  }
  putEl.forEach(function addLisPoinNum(btnEl, i){
    btnEl.addEventListener('click', addNum);
  })

//-----------------------------------------------------
// TASK 4 -- Add Guest to List
var boxEl = document.querySelectorAll('#list-2-list li')
  //console.log(boxEl);
  function nameUpdt(nameList){
    var namEl = nameList.currentTarget;
    //console.log(namEl);
    var golis = document.querySelector('.good-standing-list');
    var prolis = document.querySelector('.probation-list');

    if(namEl.parentNode.classList.contains('good-standing-list')){
      prolis.appendChild(namEl);
      return;
    }
    if(namEl.parentNode.classList.contains('probation-list')){
      golis.appendChild(namEl);
      return;
    }
  }
boxEl.forEach(function putEventLis(btnEl, i){
  btnEl.addEventListener('click', nameUpdt);
})


//-----------------------------------------------------
// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var colEl = [...document.querySelectorAll('#change-colors span')]
  //console.log(colEl);
function changeColor(collis){
  var col = collis.currentTarget;
  //console.log(col);
  var texBox = document.querySelector('.msg');
  //console.log(texBox.className);
  var curCol = texBox.classList.value;
  //console.log(curCol);
  var selcol = col.classList.value;
    texBox.className = 'msg' + selcol;
}

colEl.forEach(function putEventLis(btnEl, i){
  btnEl.addEventListener('click', changeColor)
})
