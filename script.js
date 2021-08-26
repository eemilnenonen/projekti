let btnCheck = document.querySelector('button');
let input = document.querySelector('input');
let result = document.querySelector('.huomio');

btnCheck.addEventListener('click', () => {
let value = input.value.trim();

result.innerText =value.length == 0 ? 'täytä tekstiboxit' : '';
setTimeout(function(){result.innerText='' ; }, 3000);
});
function isChecked(){
  
}
function isChecked(){
  if(document.getElementById("html").checked){
    document.getElementById("viesti1").textContent = "HTML on nyt suoritettu";
  }
  else{
    document.getElementById("viesti1").textContent = "HTML";
  }
  if(document.getElementById("css").checked){
    document.getElementById("viesti2").textContent = "CSS on nyt suoritettu";
  }
  else{
    document.getElementById("viesti2").textContent = "CSS";
  }
  if(document.getElementById("js").checked){
    document.getElementById("viesti3").textContent = "JavaScript on nyt suoritettu";
  }
  else{
    document.getElementById("viesti3").textContent = "JavaScript";
  }
  if(document.getElementById("cd").checked){
    document.getElementById("viesti4").textContent = "CI/CD on nyt suoritettu";
  }
  else{
    document.getElementById("viesti4").textContent = "CI/CD";
  }
}
setTimeout