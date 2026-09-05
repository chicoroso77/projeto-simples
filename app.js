'use strict'; 

const btn = document.querySelector('.btn');

btn.addEventListener('click', function() {
  document.body.classList.toggle('dark-theme');
  document.body.classList.toggle('light-theme');

  
  if (document.body.classList.contains('dark-theme')) {
    btn.textContent = "Light";
    } else {
    btn.textContent = "Dark";
    }
    console.log('current class name: ' + document.body.classList.value);

} );