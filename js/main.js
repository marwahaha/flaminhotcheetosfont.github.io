var alphabet = {
  '.': '_period',
  ',': '_comma',
  '?': '_q',
  '!': '_e'
}

window.onload = function hotCheeto() {
  var txt = 'hot cheeto font';
  drawLetters(txt);
}

function handleClear() {
  var c = document.getElementById("cheeto-text");
  while (c.lastChild) {
    c.removeChild(c.lastChild);
  }
}

// TODO: Figure out why natural width is sometimes 0
function handleClick() {
  var c = document.getElementById("cheeto-text");
  while (c.lastChild) {
    c.removeChild(c.lastChild);
  }

  var txt = document.getElementById('textInput').value;
  drawLetters(txt);
}

function drawLetters(txt) {
  var fragment = document.createDocumentFragment();

  for (var i = 0; i < txt.length; i++) {
    var character = txt.charAt(i);
    if (character == ' ') {
      var img = document.createElement('div');
      img.className += "cheeto-space";
    } else {
      if (character in alphabet) {
        var img =  document.createElement('img');
        img.src = 'img/' + alphabet[character] + '.svg';
      } else {
        var img =  document.createElement('img');
        img.src = 'img/' + character.toUpperCase() + '.svg';
      }
      img.className += "cheeto-letter";

      // var imgH = img.naturalHeight;
      // var imgW = img.naturalWidth;
      // console.log(imgW);
      // img.width = imgW * 100 / imgH || 70;
      // img.height = 100;
    }
  
    fragment.appendChild(img)
  }
  document.getElementById("cheeto-text").appendChild(fragment);
}

// function draw() {
//   var ctx = document.getElementById('canvas').getContext('2d');
//   var txt = document.getElementById('textInput').value;

//   for (var i = 0; i < txt.length; i++) {
//     var character = txt.charAt(i);
//     if (character == ' ') {

//     } else {
//       if (character in alphabet) {
//         var img =  document.createElement('img');
//         img.src = 'img/' + alphabet[character] + '.svg';
//       } else {
//         var img =  document.createElement('img');
//         img.src = 'img/' + character.toUpperCase() + '.svg';
//       }
//     }
//   }

//   var img = new Image();
//   img.onload = function() {
//     var imgW = img.naturalWidth, imgH = img.naturalHeight;
//     img.width = imgW * 100 / imgH || 70;
//     img.height = 100;

//     ctx.drawImage(img, width, height);
//   };
// }