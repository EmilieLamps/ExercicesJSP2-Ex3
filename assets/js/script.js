document.getElementById('lastname').addEventListener('keyup',function(){
  var lastname = document.getElementById('lastname').value;
  alert(`Vous venez de presser la touche ${lastname}.`);
});

// let lastname = document.getElementById('lastname')
// document.addEventListener('keypress', function) {
//   alert('Vous avez saisi: ' + lastname);
// }


// Fonction 'fléchée'
// document.getElementById('lastname').onkeyup=()=>alert('Vous avez saisi :' + lastname);
