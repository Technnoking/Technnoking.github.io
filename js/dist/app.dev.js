"use strict";

var _this = void 0;

//variables
var burger = document.querySelector('.burger-nav');
var nav = document.querySelector('nav');
var navBg = document.querySelector('.nav-bg');
var links = document.querySelectorAll('nav a:not(.login)');
var hero = document.querySelector('.hero');
var accueil = document.querySelector('.accueil'); //listener

burger.addEventListener('click', function () {
  nav.classList.toggle('active');
  navBg.classList.toggle('active');
  burger.classList.toggle('active');
  hero.classList.toggle('active');
  accueil.classList.toggle('active');

  if (nav.classList.contains('active')) {
    Array.from(burger.children).forEach(function (child) {
      child.style.backgroundColor = '#FFFFFF';
    });
  } else {
    Array.from(burger.children).forEach(function (child) {
      child.style.backgroundColor = '#000000';
    });
  }
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
        hero.classList.remove('active');
        accueil.classList.remove('active');
        Array.from(burger.children).forEach(function (child) {
          child.style.backgroundColor = '#000000';
        });
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

window.addEventListener('scroll', function () {
  var header = document.querySelector('header');

  if (_this.scrollY > "10") {
    header.style.backgroundColor = '#F3F6F5';
    header.style.boxShadow = '0 2px 4px rgba(225, 225, 225)';
    header.style.transition = 'all .3s ease-in-out';
  } else {
    header.style.backgroundColor = '#FFFFFF';
    header.style.boxShadow = '0 0 0';
    header.style.transition = '.3s ease-in-out';
  }
}); //loader 

var loader = function loader() {
  document.querySelector('.loader-container').classList.add('fondu-out');
  setTimeout(function () {
    document.querySelector('.loader-container').style.display = 'none';
  }, 1000);
};

var fonduOut = function fonduOut() {
  setInterval(loader, 4000);
};

window.addEventListener('load', fonduOut);
//# sourceMappingURL=app.dev.js.map
