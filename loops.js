function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      console.log(array.unshift("I am" + i + "strange loop."))
  } else {
    console.log(array.unshift(`I am ${i} strange loops`))
  }
}

//    if (i === 1) {
//      return array.push("I am 1 strange loop.")
//    } else {
//      return array.push(`I am ${i} strange loops.`)
//      }
//    }
//}
