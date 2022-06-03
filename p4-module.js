/*
    CIT 281 Project 4
    Name: Wyatt Holland
*/
const { data } = require('./p4-data.js');
 
function getQuestions() {
    let result1 = data.map(({question}) => question);
    return result1 ;
}

//console.log(getQuestions());

function getAnswers() {
    let result2 = data.map(({answer}) => answer);
    return result2;
}

//console.log(getAnswers());

function getQuestionsAnswers() {
    const clonedArr = JSON.parse(JSON.stringify(data));
    return clonedArr;
}

//console.log(getQuestionsAnswers());

function getQuestion(number = "") {
    
    let questionObj = {
        question:'',
        number:'',
        error:'',
    };

    if(!Number.isInteger(number)) {
        questionObj.error = "The question number must be an integer!";
        console.log("The question number must be an integer!");
    } else if (number > 3) {
        questionObj.error = "The question number must be less than 3!";
        console.log("The question number must be less than 3!");
    } else if (number <=0) {
        questionObj.error = "The question number must be greater than 0!";
        console.log("The question number must be greater than 0!");
    } else {
        index = number - 1;
        questionObj.number = number;
        questionObj.question = data[index].question;
    }
    return questionObj;
}

function getAnswer(number = "") {

    let answerObj = {
        answer:'',
        number:'',
        error:'',
    };

    if(!Number.isInteger(number)) {
        answerObj.error = "The answer number must be an integer!";
        console.log("The answer number must be an integer!");
    } else if (number > 3) {
        answerObj.error = "The answer number must be less than 3!";
        console.log("The answer number must be less than 3!");
    } else if (number <=0) {
        answerObj.error = "The answer number must be greater than 0!";
        console.log("The answer number must be greater than 0!");
    } else {
        index = number - 1;
        answerObj.number = number;
        answerObj.answer = data[index].answer;
    }
    return answerObj;
}


function getQuestionAnswer(number = "") {

    let qaObject = {
        question:'',
        answer:'',
        number:'',
        error:'',
    }

    if(!Number.isInteger(number)) {
        qaObject.error = "The input number must be an integer!";
        console.log("The input number must be an integer!");
    } else if (number > 3) {
        qaObject.error = "The input number must be less than 3!";
        console.log("The input number must be less than 3!");
    } else if (number <=0) {
        qaObject.error = "The input number must be greater than 0!";
        console.log("The input number must be greater than 0!");
    } else {
        index = number - 1;
        qaObject.number = number;
        qaObject.question = data[index].question;
        qaObject.answer = data[index].answer;
    }
    return qaObject;

}

module.exports = {
    getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer,
}

/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
  console.log(`\n** Testing ${category} **`);
  console.log("-------------------------------");
  for (const o of args) {
    console.log(`-> ${category}${o.d}:`);
    console.log(o.f);
  }
}

// Set a constant to true to test the appropriate function
const testGetQs = false;
const testGetAs = false;
const testGetQsAs = false;
const testGetQ = false;
const testGetA = false;
const testGetQA = false;
const testAdd = false;      // Extra credit
const testUpdate = false;   // Extra credit
const testDelete = false;   // Extra credit

//getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }

// getAnswers()
if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }