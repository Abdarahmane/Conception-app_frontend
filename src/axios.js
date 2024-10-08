// // src/axios.js
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3003/api/recettes', 
  timeout: 10000, 
})
.then(response => {
  console.log('Recette ajoutée avec succès:', response.data);
})
.catch(error => {
  console.error('Erreur ajoutant la recette:', error.response.data);
});
export default instance;
