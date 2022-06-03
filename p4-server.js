/*
    CIT 281 Project 4
    Name: Wyatt Holland
*/
const fs = require('fs');
const fastify = require("fastify")();
const { getQuestions,
        getAnswers,
        getQuestionsAnswers,
        getQuestion,
        getAnswer,
        getQuestionAnswer
    } = require('./p4-module.js');

fastify.get("/cit/question", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: "", statusCode: 200, questions: getQuestions()});
});

fastify.get("/cit/answer", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: "", statusCode: 200, answers: getAnswers()});
});

fastify.get("/cit/questionanswer", (request, reply) => {
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: "", statusCode: 200, questions_answers: getQuestionsAnswers()});
});

fastify.get("/cit/question/:number", (request, reply) => {
    const {number} = request.params
    const input = getQuestion(parseInt(number));
    if (number > 3) {
        statusCode = 404;
    } else if (number < 1) {
        statusCode = 404;
    } else {
        statusCode = 200;
    };
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: input.error, statusCode, question: input.question, number: input.number});
});

fastify.get("/cit/answer/:number", (request, reply) => {
    const {number} = request.params;
    const input = getAnswer(parseInt(number));
    if (number > 3) {
        statusCode = 404;
    } else if (number < 1) {
        statusCode = 404;
    } else {
        statusCode = 200;
    };
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: input.error, statusCode, answer: input.answer, number: input.number});
});

fastify.get("/cit/questionanswer/:number", (request, reply) => {
    const {number} = request.params;
    const input = getQuestionAnswer(parseInt(number));
    if (number > 3) {
        statusCode = 404;
    } else if (number < 1) {
        statusCode = 404;
    } else {
        statusCode = 200;
    };
    reply
        .code(200)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: input.error, statusCode, question: input.question, answer: input.answer, number: input.number});
});

fastify.get("/cit/*", (request, reply) => {
    reply
        .code(404)
        .header("Content-Type", "application/json; charset=utf-8")
        .send({error: "Route not found", statusCode: 404});
});

const listenIP = "localhost";
const listenPort = 8082;
fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
        console.log(err);
        process.exit(1);
        }
    console.log(`Server listening on ${address}`);
});