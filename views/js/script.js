let searchBtn = document.querySelector('#search-btn');
let searchForm = document.querySelector('.header .search-form');
let Options = document.getElementsByClassName('search-option');
let boxhighlight = document.getElementsByClassName('box display');
let selectedItem = document.querySelector('#selected-item');
let selectedItem1 = document.querySelector('#selected-item1');
let selectedItem2 = document.querySelector('#selected-item2');
let selectedItem3 = document.querySelector('#selected-item3');
let selectedItem4 = document.querySelector('#selected-item4');
searchBtn.onclick = () =>{
   searchBtn.classList.toggle('fa-times');
   searchForm.classList.toggle('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
   
}
const searchBurger = () =>{
   let searchedValue = document.getElementById('search-box').value.toUpperCase();
   document.body.scrollTop = 1200;
   document.documentElement.scrollTop = 1200;
   for(var i = 0; i < 6 ; i++) {
       let boxhighlightCont = boxhighlight[i].innerText;
       let result = boxhighlightCont.indexOf(searchedValue)
       if(result>-1){
           
           boxhighlight[i].style.border = '1px solid #eacf4f';
           break
       }else{
           console.log("not found")
       }
       console.log(result)
     }
}

let menuBtn = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menuBtn.onclick = () =>{
   menuBtn.classList.toggle('fa-times');
   navbar.classList.toggle('active');
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
}

window.onscroll = () =>{
   searchBtn.classList.remove('fa-times');
   searchForm.classList.remove('active');
   menuBtn.classList.remove('fa-times');
   navbar.classList.remove('active');
}
var element;
var flag = false;
const addedToCart = () =>{
  flag = true;
  element = selectedItem.parentElement.children[1].innerText;
  confirm(`Item added successfully to the cart ${element}`);
}
const addedToCart1 = () =>{
  flag = true;
  element = selectedItem1.parentElement.children[1].innerText;
  confirm(`Item added successfully to the cart ${element}`);
}
const addedToCart2 = () =>{
  flag = true;
  element = selectedItem2.parentElement.children[1].innerText;
  confirm(`Item added successfully to the cart ${element}`);
}
const addedToCart3 = () =>{
  flag = true;
  element = selectedItem3.parentElement.children[1].innerText;
  confirm(`Item added successfully to the cart ${element}`);
}
const addedToCart4 = () =>{
  flag = true;
  element = selectedItem4.parentElement.children[1].innerText;
   confirm(`Item added successfully to the cart ${element}`);
}
var modalelementadded = document.getElementsByClassName("modal-elements-added");
var modal = document.getElementById("myModal");
var counteradded = document.querySelector(".hidden-counter")
var counteradded1 = document.querySelector(".counter")
var orderbtn = document.querySelector(".order-btn")

var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
var counterdata = 1;
btn.onclick = function() {
  modal.style.display = "block";
  if (!flag) {
    modalelementadded[0].innerText = "Nothing is there in cart";
    counteradded.style.display = 'none';
    orderbtn.style.display = 'none'
  }else{
    orderbtn.style.display = 'block'
    counteradded.style.display = 'block';
    modalelementadded[0].innerText = element;
  }
}
const increment = () =>{
  counterdata++;
  counteradded1.innerText = counterdata;
}
const decrement = () =>{
  counterdata--;
  if(counterdata == 0){
    modalelementadded.style.display = 'none';
  }
  counteradded1.innerText = counterdata;
}
span.onclick = function() {
  modal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
$(document).ready(function(){

  $( "#form1" ).submit(function(event) {
    event.preventDefault();

    $.ajax({
      type: 'POST',
      url: '/',
      data: $('#form1').serialize(),
      dataType: "json",
      success: function(response){
        //alert("a");
        //console.log(response.Success);
        $('#form1')[0].reset();

        document.getElementById("check").innerHTML=response.Success;
               //ADD THIS CODE
               setTimeout(function(){
                 document.getElementById("check").innerHTML="";
               },3000);
               if (response.Success=="You are regestered successfully") {
                 document.getElementById("aa").click();
               };
             },
             error: function() {
             }
           })
  });
});