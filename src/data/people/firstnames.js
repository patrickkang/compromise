// common first-names in compressed form.
// from http://www.ssa.gov/oact/babynames/limits.html  and http://www.servicealberta.gov.ab.ca/pdf/vs/2001_Boys.pdf
// not sure what regional/cultural/demographic bias this has. Probably a lot.
// 73% of people are represented in the top 1000 names

// used to reduce redundant named-entities in longer text. (don't spot the same person twice.)
// used to identify gender for coreference resolution
'use strict';
let male = require('./male');
let female = require('./female');
let ambiguous = require('./ambiguous');
const names = {};

for (let i = 0; i < male.length; i++) {
  names[male[i]] = 'MaleName';
}
for (let i = 0; i < female.length; i++) {
  names[female[i]] = 'FemaleName';
}
//ambiguous/unisex names
for (let i = 0; i < ambiguous.length; i += 1) {
  names[ambiguous[i]] = 'FirstName';
}
// console.log(names['spencer']);
module.exports = names;
