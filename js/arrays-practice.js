// //STEP 1
// let movies1 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers']
// console.log(movies1[1])
// //STEP 2
// let movies2 = new Array(5);
// movies2[0] = 'Lord of the Rings'
// movies2[1] = 'Star Wars'
// movies2[2] = 'Wonder Woman'
// movies2[3] = 'Harry Poter'
// movies2[4] = 'Avengers'
// console.log(movies2[0])
// //STEP 3
// let movies3 = new Array(5);
// movies3[0] = 'Lord of the Rings'
// movies3[1] = 'Star Wars'
// movies3[2] = 'Wonder Woman'
// movies3[3] = 'Harry Poter'
// movies3[4] = 'Avengers'
// movies3[movies3.length] = 'Jurasik Park';
// console.log(movies3.length)

// //STEP 4
// let movies4 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers']
// delete movies4[0]
// console.log(movies4.length)

//STEP 5
// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']

// for (let movie in movies5) {
// 	console.log(movies5[movie])
// }

//STEP 6

// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']

// for (movie of movies5) {
// 	console.log(movie)				
// }


//STEP 7
// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']
// movies1.sort()
// for (movie of movies5) {
// 	console.log(movie)		
// }

//STEP 8
// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']
// let leastFavMovies = ['Jack and Jill', 'Norbit', 'Mall Cop 2 ']

// console.log("Movies I like:")
// console.log("\n")
// for (let movie in movies5) {
// 	console.log(movies5[movie])
// }
// console.log("\n")
// console.log("Movies I regret watching:")
// console.log("\n")
// for (let notLikeMovie in leastFavMovies) {
// 	console.log(leastFavMovies[notLikeMovie])
// }

//STEP 9
// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']
// let leastFavMovies = ['Jack and Jill', 'Norbit', 'Mall Cop 2 ']

// movies5 = movies5.concat(leastFavMovies)
// movies5.sort()
// movies5.reverse()

// for (movie of movies5) {
// 	console.log(movie)			
// }

//STEP 10
// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']
// let leastFavMovies = ['Jack and Jill', 'Norbit', 'Mall Cop 2 ']

// movies5 = movies5.concat(leastFavMovies)

// console.log(movies5.pop())

//STEP 11
// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']
// let leastFavMovies = ['Jack and Jill', 'Norbit', 'Mall Cop 2 ']

// movies5 = movies5.concat(leastFavMovies)
// console.log(movies5.shift())

//STEP 12

// let movies5 = ['Lord of the Rings', 'Star Wars', 'Wonder Woman', 'Harry Poter', 'Avengers', 'Freaky Friday', 'Parent Trap']
// let leastFavMovies = ['Jack and Jill', 'Norbit', 'Mall Cop 2 ']

// movies5 = movies5.concat(leastFavMovies)
// movies5.splice(7,8, 9, "Jurasik Park", "Dr. Strange", "James Bond")
// console.log(movies5)

//STEP 13
// let movies = [['Wonder Woman', 1], ['Lord of the Rings', 2], ['Star Wars', 3], ['Harry Poter', 4], ['Avengers', 5]]

// let nameMovies = movies.filter((item) => {
//     return typeof item === 'string'
// })

// console.log(nameMovies)

//STEP 14

// let employees = [
//     'Zak Ruvalcaba',
//     'Sally Smith',
//     'Fred Franklin',
//     'John Smith',
//     'Stew Franklin'
// ];

// function showEmployee(employees) {
//     let i = 1;
//     console.log('Employees:')
//     console.log('\n')
//     employees.forEach((employee) => {
//         console.log(employee)
//         i++;
//     });
    
// }

// showEmployee(employees)

//STEP 15

// function filterValues(array) {
//     return array.filter(Boolean)
// }
// console.log(filterValues([58, '', 'abcd', true, null, false, 0]))

//STEP 16

// function randomElement(array) {

//     var randomNumber = parseInt(Math.random() * 10)
//     console.log(randomNumber)
//     return array[randomNumber];
// }
// console.log(randomElement([4, 100, 15, 65, 27, 3, 5, 7, 2, 88]))

//STEP 17

var array = [9, 12, 44, 56, 1, 17];
aux=0
array.forEach((element) => {
    if (aux < element) {
      aux = element;
    }
  })

console.log(aux)