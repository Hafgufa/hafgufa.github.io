let myImage = document.querySelector('img');

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mario1.jpg') {
      myImage.setAttribute('src','images/mario2.jpg');
    } else if (mySrc === 'images/mario2.jpg') {
      myImage.setAttribute('src','images/mario3.jpg');
    } else {
      myImage.setAttribute('src','images/mario1.jpg');
    }
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === '' ) {
    setUserName();
  } else {
	  localStorage.setItem('name', myName);
	  myHeading.textContent = 'HTML y CSS (by ' + myName + ')';
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'HTML y CSS (by ' + storedName + ')';
}
