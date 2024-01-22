const mongoose = require('mongoose');
mongoose.connect(conectionString, { useNewUrlParser: true, useUnifiedTopology: true });
let Person;
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: String, required: true, unique: true },
    favoriteFoods: [String]
});

// Crea el modelo
Person = mongoose.model('Person', personSchema);

// Exporta el modelo para su uso en otros archivos
module.exports = Person;