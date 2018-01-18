function randomNumber (min, max) {
  return Math.round(Math.random()*(max-min) + min);
}

function hideElement (selector) {
  let element = document.querySelectorAll(selector);
  for (var i = 0; i < element.length; i++) {
    element[i].style.opacity = 0;
  }
}

function showElement (selector) {
  let element = document.querySelectorAll(selector);
  for (var i = 0; i < element.length; i++) {
    element[i].style.opacity = 1;
  }
}

function mouseEvent (selector = "body", action = 'click', callback) {
  let elements = document.querySelectorAll(selector);
  for (var i = 0; i < elements.length; i++) {
    elements[i].addEventListener(action, callback)
  }
}
