let register = prompt('have you registered early, just type it true or false')

let age = prompt('Enter your age here') * 1

let raceNumber = Math.floor(Math.random()*1000)

if (register === 'true' && age > 18) {
  raceNumber = raceNumber + 1000
} else {
  raceNumber = raceNumber
}

if (register === 'true' && age > 18){
  console.log(`You will race at 9:30am and your race number is ${raceNumber}`)
} else if (register === 'false' && age > 18) {
  console.log(`You will race at 11:00am and your race number is ${raceNumber}`)
} else if (register === 'true' && age < 18) {
  console.log(`You will race at 12:30am and your race number is ${raceNumber}`)
} else if (register === 'false' && age < 18) {
  console.log(`You will race at 12:30am and your race number is ${raceNumber}`)
} else {
  console.log('Please go to registration desk')
}


