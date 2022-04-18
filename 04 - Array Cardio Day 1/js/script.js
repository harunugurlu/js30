 // Get your shorts on - this is an array workout!
 // ## Array Cardio Day 1

 // Some data we can work with

 const inventors = [
     { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
     { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
     { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
     { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
     { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
     { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
     { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
     { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
     { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
     { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
     { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
     { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
 ];

 const people = [
     'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
     'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
     'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
     'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
     'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
 ];

 // Array.prototype.filter()
 // 1. Filter the list of inventors for those who were born in the 1500's
 console.log('-----FIRST QUESTION-----')
     // First solution:
 const fifteen = inventors.filter(inventor => (inventor.year > 1500 && inventor.year < 1600));
 console.log(fifteen);
 // Second solution:
 const fifteen2 = inventors.filter(function(inventor) {

     if (inventor.year >= 1500 && inventor.year < 1600) {

         return true;
     }
 });
 console.log(fifteen2);
 // Filter the list of inventors for those whose name consists of 3 letters.
 // First solution:
 function nameFilter(n) {

     if (n.first.length == 3) {
         return true;
     }
 }
 const name1 = inventors.filter(nameFilter);
 console.log(name1);
 // Second solution:
 const name2 = inventors.filter(inventor => inventor.first.length == 3);
 console.log(name2);

 // Array.prototype.map()
 // 2. Give us an array of the inventors first and last names
 console.log('-----SECOND QUESTION-----');
 const fullName = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
 console.log(fullName);

 // Array.prototype.sort()
 // 3. Sort the inventors by birthdate, oldest to youngest
 console.log('-----THIRD QUESTION-----');
 // First way:
 const sortBDay = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
 console.log(sortBDay);

 // Second way:
 function sortBirthDay(a, b) {

     if (a.year > b.year) {
         return true;
     }
 }

 const sortBDay2 = inventors.sort(sortBirthDay);
 console.log(sortBDay2);

 // Array.prototype.reduce()
 // 4. How many years did all the inventors live all together?
 console.log('-----FOURTH QUESTION-----');
 // First way:
 const howManyYears = inventors.reduce((a, b) => a + (b.passed - b.year), 0);
 console.log(howManyYears);
 // Second way:
 const howManyYears2 = inventors.reduce((a, b) => {
     return (a + (b.passed - b.year));
 }, 0);

 // 5. Sort the inventors by years lived
 console.log('-----FIFTH QUESTION-----');
 const sortYearsLived = inventors.sort((a, b) => {

     const firstGuy = (a.passed - a.year);
     const nextGuy = (b.passed - b.year);
     return firstGuy > nextGuy ? -1 : 1;
 });
 console.log(sortYearsLived);


 // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
 // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 // console.log('-----FETCH-----');
 /* fetch("https://en.wikipedia.org/w/api.php?&origin=*&action=parse&page=Category:Boulevards_in_Paris&prop=text&formatversion=json")
      .then(response => response.text())
      .then((html) => {
          console.log(html);


          //Initialize the DOMParser

          var parser = new DOMParser();

          //Parse the response text
          var doc = parser.parseFromString(html, "text/html") //"text/html" is a mimetype which determines whether XML or HTML parser 
              //is going to be used to parse the string. "text/html" invokes the HTML parser
          console.log(doc);
          // You can now even select part of that html as you would in the regular DOM

          // const category = doc.querySelector('.mw-category');
          //const links = category.querySelectorAll('a');
          // console.log(links);

          //const arrLinks = Array.from(links);



      })
      .catch(e => console.log(e));*/
 // console.log('-----FETCH-----');
 // 7. sort Exercise
 // Sort the people alphabetically by last name
 console.log('-----SEVENTH QUESTION-----');

 const alphabetically = people.sort((a, b) => {

     const personA = a.split(', ');
     const personB = b.split(', ');

     return personA[0] < personB[0] ? -1 : 1;
 });
 console.log(alphabetically);

 // 8. Reduce Exercise
 // Sum up the instances of each of these

 const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

 const sum = data.reduce(function(total, item) {

     if (item in total) {
         total[item]++;
     } else {
         total[item] = 1;
     }
     return total;
 }, {})
 console.log(sum);