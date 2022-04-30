 // ## Array Cardio Day 2

 const people = [
     { name: 'Wes', year: 1988 },
     { name: 'Kait', year: 1986 },
     { name: 'Irv', year: 1970 },
     { name: 'Lux', year: 2015 }
 ];

 const comments = [
     { text: 'Love this!', id: 523423 },
     { text: 'Super good', id: 823423 },
     { text: 'You are the best', id: 2039842 },
     { text: 'Ramen is my fav food ever', id: 123523 },
     { text: 'Nice Nice Nice!', id: 542328 }
 ];

 // Some and Every Checks
 // Array.prototype.some() // is at least one person 19 or older?
 console.log('Some and Every Checks');
 const currentYear = (new Date()).getFullYear();

 //1st solution:
 var isAdult = people.some((person) => currentYear - person.year >= 19);
 console.log(isAdult);
 //Alt
 isAdult = people.some((person) => {
     if (currentYear - person.year >= 19) return true;
     else return false;
 });
 console.log(isAdult);

 console.log(people.some((person) =>
     person.name === 'Lux'));

 // Array.prototype.every() // is everyone 19 or older?
 //1st solution:
 var allAdults = people.every(function(person) {
     if (currentYear - person.year >= 19) return true;
     else return false;
 });
 console.log(allAdults);

 //Alt
 allAdults = people.every((person) => currentYear - person.year >= 19);
 console.log(allAdults);

 // Array.prototype.find()
 console.log('Array.prototype.find()');
 // Find is like filter, but instead returns just the one you are looking for
 // find the comment with the ID of 823423
 var comment = comments.find(comment => comment.id == 823423);
 console.log(comment);

 comment = comments.find(function(comment) {
     if (comment.id == 823423) return true;
     else return false;
 });
 console.log(comment);
 // Array.prototype.findIndex()
 console.log('Array.prototyp.findIndex()');
 // Find the comment with this ID
 const comWithThatId = comments[comments.findIndex((comment) => comment.id == 523423)];
 console.log(comWithThatId);
 // delete the comment with the ID of 823423
 console.log('Deleting');
 const index = comments.findIndex(function(comment) {
     if (comment.id == 823423) return true;
     else return false;
 });
 //Alt
 const newComments = [
     ...comments.slice(0, index),
     ...comments.slice(index + 1)
 ];
 console.table(newComments);

 comments.splice(index, 1);
 console.table(comments);