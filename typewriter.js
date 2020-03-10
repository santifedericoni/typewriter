let timer = 300
const typeWriter = function (sentence){
  for (const char of sentence){
    setTimeout(() => {
      console.log(char);
      }, (timer));
      timer += 100;
  }
}


const sentence = 'Welcome to light house'

typeWriter(sentence);