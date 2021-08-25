if(document.querySelector('kenttä').checked){
document.querySelector('nappi').children[0].innerHTML;= '<div class="1box"><input type="text" id="kenttä" checked></div>;
}
document.querySelector('#nappi').addEventListener('click', e =>{
document.querySelector.preventDefault();
}





document.querySelector('#merkinta').addEventListener('click', e =>{
e.preventDefault();
if(document.querySelector('#teht_a').checked){
document.querySelector('nappi').children[0].innerHTML;= '<li class="sisältö"><input type="checkbox" id="teht_a" checked>HTML on nyt tehty</li>;
}
else{
  document.querySelector('boksit').children[0].innerHTML = '<li class="sisältö"><input type="checkbox" id="teht_a">HTML</li>
}
if(document.querySelector('#teht_b').checked){
  alert('CSS on nyt tehty');
}
else{
  document.querySelector('boksit').children[0].innerHTML = '<li class="sisältö"><input type="checkbox" id="teht_b">CSS</li>


   <ul class="boksit">
            <li class="sisältö"><input type="checkbox" id="teht_a">HTML</li>
            <p>
            <li class="sisältö"><input type="checkbox" id="teht_a">CSS</li>
            <p>
            <li class="sisältö"><input type="checkbox" id="teht_a">JavaScript</li>
            <p>
            <li class="sisältö"><input type="checkbox" id="teht_a">CS/CD</li>
            <p>
            </ul>
            <input id="merkinta" type="submit" value="merkka


let btnShow = document.querySelector('button');
let result = document.querySelector('h1');

btnShow.addEventListener('click', () => {
let checkbox1 = document.querySelector('input[type="checkbox"]:checked');
result.innerText = checkbox.parentElement.textContent;
});
