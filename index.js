/* eslint-disable no-undef */
/* eslint-disable strict */

$(document).ready(() => {
  $('#number-chooser').submit(e => {
    e.preventDefault();

    $('.js-results').empty();

    const num = parseInt(
      $(event.currentTarget)
        .find('input[name="number-choice"]')
        .val()
    );

    const fizzArr = [];

    for (let i = 1; i <= num; i++) {
      i % 15 === 0
        ? fizzArr.push(
            $(
              '<div class="fizz-buzz-item fizzbuzz"><span>fizzbuzz</span></div>'
            )
          )
        : i % 5 === 0
        ? fizzArr.push(
            $('<div class="fizz-buzz-item buzz"><span>buzz</span></div>')
          )
        : i % 3 === 0
        ? fizzArr.push(
            $('<div class="fizz-buzz-item fizz"><span>fizz</span></div>')
          )
        : fizzArr.push(
            $(`<div class="fizz-buzz-item"><span>${i}</span></div>`)
          );
    }

    $('.js-results').append(fizzArr);
  });
});
