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
    const body = JSON.parse(response);
    const names = [];
    const specialties = [];
    const dataLocation = body.data;

    for (let i = 0; i < dataLocation.length; i++) {
      const profileLocation = dataLocation[i].profile;
      const specialtiesLocation = dataLocation[i].specialties ;
      names.push(profileLocation.first_name, profileLocation.last_name, profileLocation.title);
      for (let j = 0; j < specialtiesLocation.length; j ++) {
        specialties.push(specialtiesLocation[j].actor, specialtiesLocation[j].description);
      }
    }
    console.log(`names is ${names}`);
    console.log(`specialties is ${specialties}`);

    const parsedResults = [names, specialties];
    console.log(`doctorAPI result = ${parsedResults}`);
    return parsedResults;

  }, (error) => {
    console.log("there is not a response");
    return error.message;
  });
}
