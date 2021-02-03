const hamburger = document.querySelector('#hamburger');
const header = document.querySelector('.header');
const overlay = document.querySelector('.overlay');
const fadeEle =document.querySelectorAll('.has-fade');

hamburger.addEventListener('click', function(){
if(header.classList.contains('open')){
    header.classList.remove('open');
    fadeEle.forEach(function(element){
 element.classList.remove('fade-in');
    element.classList.add('fade-out')
    });
   
}
else{
    header.classList.add('open');
    fadeEle.forEach(function(element){
    element.classList.add('fade-in');
    element.classList.remove('fade-out');
    });
}

}); 