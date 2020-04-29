 var express = require('express');
 var router = express.Router();

 const people = [{
   id: 1,
   first_name: "Berkley",
   last_name: "McCambridge",
   email: "bmccambridge0@ustream.tv",
   gender: "Male"
 }, {
   id: 2,
   first_name: "Gleda",
   last_name: "Adin",
   email: "gadin1@answers.com",
   gender: "Female"
 }, {
   id: 3,
   first_name: "Artur",
   last_name: "Milkins",
   email: "amilkins2@unblog.fr",
   gender: "Male"
 }, {
   id: 4,
   first_name: "Mireielle",
   last_name: "Ivashintsov",
   email: "mivashintsov3@cmu.edu",
   gender: "Female"
 }, {
   id: 5,
   first_name: "Elton",
   last_name: "Sleight",
   email: "esleight4@zimbio.com",
   gender: "Male"
 }, {
   id: 6,
   first_name: "Lyle",
   last_name: "MacGaughey",
   email: "lmacgaughey5@meetup.com",
   gender: "Male"
 }, {
   id: 7,
   first_name: "Katlin",
   last_name: "Yanuk",
   email: "kyanuk6@intel.com",
   gender: "Female"
 }, {
   id: 8,
   first_name: "Nyssa",
   last_name: "Loakes",
   email: "nloakes7@sitemeter.com",
   gender: "Female"
 }, {
   id: 9,
   first_name: "Merralee",
   last_name: "Kybert",
   email: "mkybert8@npr.org",
   gender: "Female"
 }, {
   id: 10,
   first_name: "Graham",
   last_name: "Degnen",
   email: "gdegnen9@slashdot.org",
   gender: "Male"
 }]
 
 router.get('/', (req,res,next) =>
 {
    res.render('profiles', {title: 'profiles', people})
 });

 module.exports = router;