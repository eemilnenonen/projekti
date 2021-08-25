let btnCheck = document.querySelector('button');
let input = document.querySelector('input');
let result = document.querySelector('h1');

btnCheck.addEventListener('click', () => {
let value = input.value.trim();

result.innerText =value.length == 0 ? alert('täytä tekstikentät') : '';
});
function isChecked(){
  if(document.getElementById("html").checked1){
    document.getElementById("viest").textContent = "HTML on nyt suoritettu";
  }
  else{
    document.getElementById("viest").textContent = "HTML";
  }
}
function isChecked(){
  if(document.getElementById("css").checked){
    document.getElementById("viesti2").textContent = "CSS on nyt suoritettu";
  }
  else{
    document.getElementById("viesti2").textContent = "CSS";
  }
}