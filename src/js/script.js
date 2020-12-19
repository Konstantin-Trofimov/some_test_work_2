'use strict';

window.addEventListener('DOMContentLoaded', function () {
  var skills = Array.from(document.querySelectorAll('.skills__item-cbx')),
      out = document.querySelector('.meter__result');
  var counter = 0;

  var movingArrow = function movingArrow() {
    var arrow = document.querySelector('.meter__counter-arrow'),
        value = counter / 71.55;
    arrow.style.transform = "rotate(".concat(value - 14, "deg)");
  };

  var amimateOutput = function amimateOutput() {
    var shift = 106;

    var timer = function timer() {
      var amimate = setTimeout(function () {
        var currentValue = +document.querySelector('.meter__result').textContent;

        if (counter > currentValue) {
          if (currentValue <= counter) {
            out.innerHTML = currentValue + shift;
            timer();
          } else {
            clearTimeout(amimate);
          }
        } else if (counter < currentValue) {
          if (currentValue >= counter) {
            out.innerHTML = currentValue - shift;
            timer();
          } else {
            clearTimeout(amimate);
          }
        }
      }, 100);
    };

    timer();
  };

  skills.forEach(function (elem) {
    var shift = 954;

    if (elem.checked) {
      counter += shift;
    }

    elem.addEventListener('input', function () {
      if (elem.checked) {
        counter += shift;
      } else {
        counter -= shift;
      }

      amimateOutput();
      movingArrow();
    });
    movingArrow();
    out.innerHTML = counter;
  });
});