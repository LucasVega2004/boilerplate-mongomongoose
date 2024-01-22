require('dotenv').config();
const mongoose = require('mongoose');
const URI = process.env.MONGO_URI;
const MongoUser = process.env.MONGO_USER;
const Mongopassword = process.env.MONGO_PASSWORD
const conectionString = `${URI}${MongoUser}:${Mongopassword}`;
mongoose.connect(conectionString, { useNewUrlParser: true, useUnifiedTopology: true });

const Person = require('./models/personModel');



const createAndSavePerson = (done) => {

  let janeFonda = new Person({ name: "Jane Fonda", age: 84, favoriteFoods: ["eggs", "fish", "fresh fruit"] });

  janeFonda.save(function (err, data) {
    if (err) {
      done(err, null)
    }

    else {
      done(null, data)
    }
  });
};

const createManyPeople = (arrayOfPeople, done) => {


  Person.create(arrayOfPeople, function (err, people) {
    if (err) {
      done(err, null)
    }

    else {
      done(null, people);
    }
  });
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });
};

const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function (err, personFound) {
    if (err) return console.log(err);
    done(null, personFound);
  });};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
