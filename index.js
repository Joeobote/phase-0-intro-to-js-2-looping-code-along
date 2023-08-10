const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
    debugger;
  }

  return gifts;
}

wrapGifts(gifts);

function writeCards(names, event){
  let thankFriends = []
  for(let i=0; i<names.length; i++){
    let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`
    thankFriends.push(message)
  } 
  return thankFriends  
}
// console.log(writeCards(["Charlie", "Samip", "Ali"], "birthday"))
console.log(writeCards(["Charlie", "Samip", "Ali"],"birthday" ))

function countDown(number){
  let i = number
  while (i>=0){
    console.log(i--)
  } 
}
console.log(countDown(10))
