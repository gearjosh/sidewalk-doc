import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

$(document).ready(() => {
  $('#').submit(function() {
    event.preventDefault();
    let nameInput = $('#').val();
    $('#').val("");
    let specialtyInput = $('#').val();
    $('#').val("");
    let stateInput = $('#').val();
    $('#').val("");
    let cityInput = $('#').val();
    $('#').val("");

    const results = doctorAPICall(stateInput, cityInput, nameInput, specialtyInput);

    // results comes back as: [names = [[first, last, title], [first, last, title], ...], specialties = [[actor, description], [actor, description], ...];

    if (typeof results === 'array') { //success
      $('#').text(``);
      $('#').text(``);
    } else { //error
      $('#').text(`There was an error processing your request: ${results}
        Please try again.`);
    }
  });
});
