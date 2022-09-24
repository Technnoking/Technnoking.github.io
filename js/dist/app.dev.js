"use strict";

//variables
var burger = document.querySelector('.burger-nav');
var nav = document.querySelector('nav');
var navBg = document.querySelector('.nav-bg');
var links = document.querySelectorAll('nav a:not(.login)'); //listener

burger.addEventListener('click', function () {
  console.log("hello");
  nav.classList.toggle('active');
  navBg.classList.toggle('active');
  burger.classList.toggle('active');
});
var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
  var _loop = function _loop() {
    var link = _step.value;
    link.addEventListener('click', function () {
      if (!link.classList.contains('active')) {
        if (link.parentElement.querySelector('.active') !== null) {
          link.parentElement.querySelector('.active').classList.remove('active');
        }

        link.classList.add('active');
        nav.classList.remove('active');
        navBg.classList.remove('active');
        burger.classList.remove('active');
      } else {
        return null;
      }
    });
  };

  for (var _iterator = links[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
    _loop();
  }
} catch (err) {
  _didIteratorError = true;
  _iteratorError = err;
} finally {
  try {
    if (!_iteratorNormalCompletion && _iterator["return"] != null) {
      _iterator["return"]();
    }
  } finally {
    if (_didIteratorError) {
      throw _iteratorError;
    }
  }
}
//# sourceMappingURL=app.dev.js.map
