export default function doctorAPICall(state, city, name = '', specialty = '') {

    let doctorPromise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://api.betterdoctor.com/2016-03-01/doctors?user_key=${ process.env.exports.apiKey }&name=${ name }&specialty_uid=${ specialty }&location=${ state }-${ city }`;
      doctorRequest.onload = () => {
        if (this.status === 200) {
          resolve(doctorRequest.response);
        } else {
          reject(Error(doctorRequest.statusText));
        }
      }
      doctorRequest.open("GET", url, true);
      doctorRequest.send();
    });

    doctorPromise.then((response) => {
      const body = JSON.parse(response);
      const names = [];
      const specialties = [];
      const dataLocation = body.data;
      const profileLocation = body.data.profile;
      const specialtiesLocation = body.data.profile.specialties;

      for (let i = 0; i < dataLocation.length; i ++) {
        names.push(profileLocation.first_name, profileLocation.last_name, profileLocation.title);
        for (let i = 0; i < specialtiesLocation.length; i ++) {
          specialties.push(specialtiesLocation.actor, specialtiesLocation.description)
        };
      };

      const parsedResults = [names, specialties];
      return parsedResults;

    }, (error) => {
      return error.message;
    });
  });
}
