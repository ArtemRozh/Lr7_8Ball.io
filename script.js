const mainDiv = document.createElement("div");
const inpQuestion = document.createElement("input")
const ballDiv = document.createElement("div");
let answers = ["Так", "Ні", "В твоїх мріях", "Сумніваюсь", "Безумовно", "Запитай \nпізніше", "Скоріш ні \nчим так", "Скоріш так \nчим ні", "Дууууже \nсумніваюсь"];

mainDiv.className = "flex";
mainDiv.setAttribute('style', 'background-color: rgba(83, 101, 117, 0.897); border: 2px solid black; width: 30%; height: 550px; margin: 200px auto; flex-direction: column; padding: 20px;');


inpQuestion.className = "inputField";
inpQuestion.setAttribute('type', 'text');
inpQuestion.setAttribute('placeholder', 'Введіть ваше запитання..');

ballDiv.classList.add("ballDiv", "flex");

document.body.append(mainDiv);
mainDiv.append(inpQuestion);
mainDiv.append(ballDiv);

inpQuestion.addEventListener('keydown', (press) =>{
    if(press.key === 'Enter'){
        if (inpQuestion.value.trim() === '') {
            ballDiv.innerText = "Напишіть щось \nзрозуміле";
        } else{
            ballDiv.innerText = answers[Math.floor(Math.random() * answers.length)];
        }   
    }
});