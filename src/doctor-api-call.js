export function doctorAPICall(state, city, name = '', issue = '') {

  console.log("doctorAPICall started");

  let doctorPromise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();

    // let url = `https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&query=${issue}&location=${state}-${city}&user_key=${process.env.exports.apiKey}`;

    let url = `https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&name=${name}&location=${state}-${city}&sort=rating-desc&skip=0&limit=10&user_key=${process.env.exports.apiKey}`;

    console.log(url);
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    }
    request.open("GET", url, true);
    request.send();
  });

  doctorPromise.then((response) => {
    console.log(`doctorAPI got a response`);
    const body = JSON.parse(response);
    console.log(`body is ${body}`);


  }, (error) => {
    console.log(`there is not a response: ${error.message}`);
    return error.message;
  });
}
