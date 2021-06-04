
function Inverted(string){
    let invertedString = ""
    for(let i = string.length - 1 ; i >= 0; i--){
      invertedString += string[i];
    }
    return invertedString;
  }
   

  let word = prompt("ecrivez un mot ou une phrase").toLowerCase().replace(/\s/g, "");
  let invertedString = Inverted(word);
  
  if (invertedString == word){
    alert(`Votre mot ${word} est un palindrome Felicitation `);
  }
  else{
    alert(`Votre mot ${word} n'est pas un palindrome car à l'envers il devient ${invertedString} ` );
  }
