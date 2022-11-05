let a = document.getElementById("a");
let p = document.getElementById("p");

document.getElementById("submit").addEventListener("click", validadeForm);

function validadeForm(){
  if(a.value == '' || p.value == ''){
      alert("Todos os campos são requeridos!");
      document.getElementById("submit").removeEventListener("click", calculateIMC);
  } else{
      calculateIMC();
  }
}

const showResult = document.querySelector('#submit');

showResult.addEventListener('click', () =>{
  window.scroll(window.scrollTo(o, 500) , {behavior: 'smooth'})
})

function calculateIMC(){
  let arrayPerson = [a.value, p.value];

  let imc = parseFloat(Number( arrayPerson[1] ) / ( Number( arrayPerson[0] )/100 * Number( arrayPerson[0] )/100 )).toFixed(1);

  let classification = '';

  if(imc < 18.5){
    classification = 'MAGREZA'
  } else if(imc < 25){
    classification = 'NORMAL'
  } else if(imc < 30){
    classification = 'SOBREPESO'
  } else if(imc < 39.1){
    classification = 'OBESIDADE'
  } else if(imc > 40){
    classification = 'OBESIDADE GRAVE'
  } else {
    classification = 'Abaixo do peso'
  }

  result.innerHTML = `Seu IMC: ${imc} (${classification})`;
}


document.getElementById("clear").addEventListener("click", limpar);

function limpar(){
  a.value = '';
  p.value = '';
  //document.getElementById('a.valeu') = '';
  //document.getElementById('p.valeu') = '';
}


