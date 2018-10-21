import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorAPICall } from './doctorApiCall.js';
import { parseResult } from './parseResult.js'

$(document).ready(() => {
  $('#form').submit(function() {
    event.preventDefault();
    let nameInput = $('#doctor-name').val();
    let issueInput = $('#medical-issue').val();
    let stateInput = $('#state').val();
    let cityInput = $('#city').val();
    $('#results').empty();
    $('#doctor-name').val("");
    $('#medical-issue').val("");
    $('#state').val("");
    $('#city').val("");


    let doctorPromise = doctorAPICall(stateInput, cityInput, nameInput, issueInput);
    // console.log(`results is ${results}`);
    // const parsedResults = parseResult(results);


    doctorPromise.then((response) => {
      console.log(`doctorAPI got a response`);
      console.log(`response is ${response}`);
      const responseV2 = JSON.parse(response);
      console.log(`responseV2 is ${responseV2}`);
      const resultsArray = parseResult(responseV2);
      console.log(`resultsArray is ${resultsArray}`);


      resultsArray.forEach((result) => {
        $('#results').append(`<li>${ result[0] }</li>`);
        result[1].forEach((specialty) => {
          $('#results').append(`<ul>${ specialty }</ul>`);
        });
      });
    }, (error) => {
      $('#results').text(`There was an error processing your request: ${results}
      Please try again.`);
    });


    // results comes back as: [names = [[first, last, title], [first, last, title], ...], specialties = [[actor, description], [actor, description], ...];

  });
});

// } else { //error
//
// }
