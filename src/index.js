import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { doctorAPICall } from './doctor-api-call.js';

$(document).ready(() => {
  $('#form').submit(function() {
    event.preventDefault();
    let nameInput = $('#doctor-name').val();
    $('#doctor-name').val("");
    let issueInput = $('#medical-issue').val();
    $('#medical-issue').val("");
    let stateInput = $('#state').val();
    $('#state').val("");
    let cityInput = $('#city').val();
    $('#city').val("");

    const results = doctorAPICall(stateInput, cityInput, nameInput, issueInput);
    console.log(results);

    // results comes back as: [names = [[first, last, title], [first, last, title], ...], specialties = [[actor, description], [actor, description], ...];

    if (Array.isArray(results)) { //success
      const names = results[0];
      const specialties = results[1];
      const returnResults = (namesArray, specialtiesArray) => {
        let listItemName = () => {
          for (let i = 0; i < namesArray.length; i ++) {
            let nameArray = namesArray[i];
            let nameAndTitle = `${ nameArray[0] } ${ nameArray[2] }, ${ nameArray[3] }`;
            return nameAndTitle;
          }
        };
        let listItemSpecialty = () => {
          for (let i = 0; i < specialtiesArray.length; i ++) {
            let specialtyArray = specialtiesArray[i];
            let specialtySubList = `<li>${ specialtyArray[0] }</li><li>${ specialtyArray[1] }</li>`;
            return specialtySubList;
          }
        };
        const finalArray = [listItemName(), listItemSpecialty()];
        return finalArray;
      };

      const outputToUserArray = returnResults(names, specialties);


      $('#results').append(`<li>${ outputToUserArray[0] }</li>
        <ul>${ outputToUserArray[1] }</ul>`);
    } else { //error
      $('#results').text(`There was an error processing your request: ${results}
        Please try again.`);
    }
  });
});
