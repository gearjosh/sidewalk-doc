import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// search doctors by name
// in json that comes back:
// data / profile / `${first_name} ${last_name}, ${title}`
// data / profile / specialties / examples >
//   {
//     "uid": "family-practitioner",
//     "name": "Family Medicine",
//     "description": "Specializes in your and your family's total health.",
//     "category": "medical",
//     "actor": "Family Practitioner",
//     "actors": "Family Practitioners"
//   }
//   {
//     "uid": "pediatrician",
//     "name": "Pediatrics",
//     "description": "Specializes in the health of children from birth to young adulthood.",
//     "category": "medical",
//     "actor": "Pediatrician",
//     "actors": "Pediatricians"
//   }
//   {
//     "uid": "gastroenterologist",
//     "name": "Gastroenterology",
//     "description": "Specializes in the digestive system.",
//     "category": "medical",
//     "actor": "Gastroenterologist",
//     "actors": "Gastroenterologists"
//   }
//
