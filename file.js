const containerEl = document.querySelector(".container");


const careers = ['YOUTUBER','DESIGNER','CREATOR','ENGINEER'];


let careerIndex = 0;

let characterIndex = 0;//each character of the word

updateText();

function updateText(){
characterIndex++;

containerEl.innerHTML = `
<h1>I AM 
${careers[careerIndex].slice(0,1) === 'E' ? 'AN':'A'} 
${careers[careerIndex].slice(0,characterIndex)}</h1>
`;



if(characterIndex === careers[careerIndex].length){

   careerIndex++;
  characterIndex = 0;
} 

if(careerIndex === careers.length){

  careerIndex = 0;
}
setTimeout(updateText,400);

}