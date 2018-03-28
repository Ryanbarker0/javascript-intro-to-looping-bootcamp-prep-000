function forLoop(array) {
  array = [1]
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      console.log(array.unshift("I am 1 strange loop."))
    }
  }
}


//    if (i === 1) {
//      return array.push("I am 1 strange loop.")
//    } else {
//      return array.push(`I am ${i} strange loops.`)
//      }
//    }
//}
