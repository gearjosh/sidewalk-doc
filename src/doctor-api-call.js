export function doctorAPICall(state, city, name = '', issue = '') {

  console.log("doctorAPICall started");

  let doctorPromise = new Promise(function(resolve, reject) {
    let request = new XMLHttpRequest();
    let url = `https://api.betterdoctor.com/2016-03-01/doctors?user_key=${ process.env.exports.apiKey }&name=${ name }&query=${ issue }&location=${ state }-${ city }`;
    request.onload = () => {
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
    // const body = JSON.parse(response);
    const names = [];
    const issues = [];
    const dataLocation = body.data;
    const profileLocation = body.data.profile;
    const issuesLocation = body.data.profile.issues;

    for (let i = 0; i < dataLocation.length; i++) {
      names.push(profileLocation.first_name, profileLocation.last_name, profileLocation.title);
      for (let j = 0; j < issuesLocation.length; j ++) {
        issues.push(issuesLocation.actor, issuesLocation.description)
      }
    }

    const parsedResults = [names, issues];
    console.log(`doctorAPI result = ${parsedResults}`);
    return parsedResults;

  }, (error) => {
    console.log("there is not a response");
    return error.message;
  });
}
