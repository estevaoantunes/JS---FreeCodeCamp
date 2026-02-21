const questions = [
  {
    category: "História",
    question: "Em que ano o Brasil foi descoberto?",
    choices: ['1492', '1500', '1822'],
    answer: '1500'
  },
  {
    category: "Geografia",
    question: "Qual é o maior país do mundo em extensão territorial?",
    choices: ['Estados Unidos', 'China', 'Rússia'],
    answer: 'Rússia'
  },
  {
    category: "Ciência",
    question: "Qual é o planeta conhecido como Planeta Vermelho?",
    choices: ['Vênus', 'Marte', 'Júpiter'],
    answer: 'Marte'
  },
  {
    category: "Esportes",
    question: "Quantos jogadores um time de futebol tem em campo?",
    choices: ['9', '10', '11'],
    answer: '11'
  },
  {
    category: "Arte",
    question: "Quem pintou a obra Mona Lisa?",
    choices: ['Vincent van Gogh', 'Pablo Picasso', 'Leonardo da Vinci'],
    answer: 'Leonardo da Vinci'
  }
];

function getRandomQuestion(questionsArray){
  const randomIndex = Math.floor(Math.random() * questionsArray.length);
  return questionsArray[randomIndex];
}

function getRandomComputerChoice(choicesArray){
  const randomIndex = Math.floor(Math.random() * choicesArray.length);
  return choicesArray[randomIndex];
}

function getResults(questionObject, computerChoice){
  if(computerChoice === questionObject.answer){
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questionObject.answer}`;
  }
}

const randomQuestion = getRandomQuestion(questions);
console.log("Question:", randomQuestion.question);

const computerChoice = getRandomComputerChoice(randomQuestion.choices);
console.log("Computer choice:", computerChoice);

const result = getResults(randomQuestion, computerChoice);
console.log(result);