const h1 = document.querySelector('h1');

// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.getElementById('pid');
const form = document.querySelector('#form')
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
  console.log({event});
  event.preventDefault();
  const sumaInputs = input1.value + input2.value;
  pResult.innerText = 'Resultado: ' + sumaInputs;
    // console.log('Escuchando el evento');
}


// console.log(input.value);

// console.log({
//     h1,
//     p,
//     parrafito,
//     pid,
//     input,
// });
// h1.innerHTML = 'Prueba de cambio <br> Ready';
// h1.innerText = 'Prueba de cambio <br> Ready';
// // console.log(h1.getAttribute('class'));
// // h1.setAttribute('class', 'rojo');

// h1.classList.add('azul');
// h1.classList.remove('verde')

// input.value = '!Hola'
// // console.log(document.createElement('img'));
// const img = document.createElement('img');
// img.setAttribute('src', 'https://i.pinimg.com/originals/ac/79/9a/ac799a3e936973d079afecdc293c6809.jpg')

// console.log(img);

// // pid.append(img);

// // pid.innerHTML='';
// // pid.appendChild(img);