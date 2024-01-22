const mongoose = require('mongoose');
const personSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    age: { type: Number, required: true, unique: true },
    favoriteFoods: [String]
});

// Crea el modelo
const Person = mongoose.model('Person', personSchema);

// Exporta el modelo para su uso en otros archivos
module.exports = Person;