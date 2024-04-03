"use strict"

let flagAze = document.querySelector(".nav-area .icons-area ul li  .aze")
let countryFlag = document.querySelector(".nav-area .icons-area .country-languages")

flagAze.addEventListener("click",function(e){
  e.preventDefault()
      countryFlag.classList.toggle("d-none")
})

$(document).ready(function() {
    $('.menu-btn').click(function(){
        $('.side-bar').addClass('active');
        $('.menu-btn').css("visibility", "hidden");
    });

    $('.close-btn').click(function(){
        $('.side-bar').removeClass('active');
        $('.menu-btn').css("visibility", "visible")
    });


    $('.sub-btn').click(function(){
        $(this).next('.sub-menu').slideToggle();
        $(this).find('.dropdown').toggleClass('rotate')
    });
})