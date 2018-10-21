export function parseResult(jsonBody) {
  // debugger;
  const doctors = [];
  const dataLocation = jsonBody.data;

  for (let i = 0; i < dataLocation.length; i++) {
    const profileLocation = dataLocation[i].profile;
    const specialtiesLocation = dataLocation[i].specialties ;

    let currentName = '';
    let currentSpecialties = [];

    currentName = `${profileLocation.first_name} ${profileLocation.last_name}, ${profileLocation.title}`;
    for (let j = 0; j < specialtiesLocation.length; j ++) {
      currentSpecialties.push(`${specialtiesLocation[j].actor}: ${specialtiesLocation[j].description}`);
    }
    doctors.push([currentName, currentSpecialties]);
  }
  console.log(`doctors is ${ doctors }`);

  return doctors;
}
