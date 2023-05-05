//require mongoose
const mongoose = require('mongoose');
// creating shorthand for the schema constructor
const { Schema } = mongoose;

// create bread Schema
const breadSchema = new Schema({
  name: { type: String, required: true },
  hasGluten: Boolean,
  image: { type: String, default: 'http://placehold.it/500x500.png' },
});

//create bread model
const Bread = mongoose.model('Bread', breadSchema);

//export bread model
module.exports = Bread;




// module.exports = [
//     {
//       name: 'Rye',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1595535873420-a599195b3f4a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'French',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1534620808146-d33bb39128b2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
//     },
//     {
//       name: 'Gluten-Free',
//       hasGluten: false,
//       image: 'https://images.unsplash.com/photo-1546538490-0fe0a8eba4e6?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'Pumpernickel',
//       hasGluten: true,
//       image: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1050&q=80',
//     },
//     {
//       name: 'Potato Bread',
//       hasGluten: false,
//       image: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.alimentarium.org%2Fen%2Ffact-sheet%2Fpotato&psig=AOvVaw2FL4dPgurX_HATKz1Ujc8G&ust=1682560453715000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPDQhqO4xv4CFQAAAAAdAAAAABAG',
//     }
//   ]
