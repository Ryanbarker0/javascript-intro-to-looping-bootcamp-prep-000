function forLoop(array) {
  array = [1]
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.unshift("I am 1 strange loop.")
    } else {
      array.unshift(`I am ${i} strange loops.`)
  }
  return array
}
}



//    if (i === 1) {
//      return array.push("I am 1 strange loop.")
//    } else {
//      return array.push(`I am ${i} strange loops.`)
//      }
//    }
//}
