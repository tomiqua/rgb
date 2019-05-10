//variable containing all the colors
const color= 
['rgb(255, 0, 0)',
'rgb(255, 255, 0)',
'rgb(0, 255, 0)',
'rgb(0, 255, 255)',
'rgb(0, 0, 255)',
'rgb(255, 0, 255)']

let squares=document.querySelectorAll('.square');
for (i=0; i<color.length; i++){
    squares[i].style.backgroundColor = color[i];
    squares[i].addEventListener('click', changeColor);
}
function changeColor () {
    alert ('whatever');
}
 let secret = 'rgb(255, 255, 0)';
    document.getElementById('secret').innerHTML = secret;

