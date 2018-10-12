export function parseResult(jsonBody) {
  const names = [];
  const specialties = [];
  const dataLocation = jsonBody.data;

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
  return parseResults;
}
