import React, { Component } from 'react';
import uuid from 'uuid';

import Aux from '../../HOC/aux_x';
import Hint from '../Hint/Hint';
import classes from './Quiz.css';

export default class Quiz extends Component {
    state = {
        questions: [
            {
                id: uuid(),
                question: "Czym w języku JavaScript są słowa kluczowe let, const i var?",
                correctlyAnswer: "Deklaracjami zmiennych",
                badAnswer_1: "Rodzajami zwykłych tablic",
                badAnswer_2: "Tablicami asocjacyjnymi"
            },
            {
                id: uuid(),
                question: "Jaka jest różnica pomiędzy === a == przy porównywaniu zmiennych?",
                correctlyAnswer: "== nie porównuje typu danych, a === porównuje dane oraz dodatkowo typ",
                badAnswer_1: "Nie ma różnicy",
                badAnswer_2: "=== nie porównuje typu danych, a == porównuje"
            },
            {
                id: uuid(),
                question: "Co wprowadza standard EcmaScript2016?",
                badAnswer_1: "Nowe metody do biblioteki jQuery",
                badAnswer_2: "Wprowadza nowe znaczniki do HTML5",
                correctlyAnswer_v2: "Wprowadza między innymi nową możliwość deklaracji zmiennych słowami let i const"
            },
            {
                id: uuid(),
                question: "Na czym polega hoising zmiennych?",
                correctlyAnswer: "Polega na wynoszeniu zmiennych na początek konteksu(kodu)",
                badAnswer_1: "Polega na ukrywaniu zawartości zmiennej",
                badAnswer_2: "Polega na opytmalizacji zmiennej"
            },
            {
                id: uuid(),
                question: "Co definiuje scope zmiennych?",
                badAnswer_1: "Rozmiar zmiennych",
                correctlyAnswer_v1: "Zasięg zmiennych",
                badAnswer_2: "Nie definiuje niczego"
            },
            {
                id: uuid(),
                question: "Co wyświetli się w konsoli deklarując po kolei: 1.Console.log(test) 2.let test=22",
                correctlyAnswer: "test is not defined",
                badAnswer_1: "22",
                badAnswer_2: "Null"
            },
            {
                id: uuid(),
                question: "Efektem działania kodu console.log('5' === 5) będzie:",
                correctlyAnswer: "False",
                badAnswer_1: "True",
                badAnswer_2: "Null"
            },
            {
                id: uuid(),
                question: "Dobrym miejscem na umieszczanie skryptów JavaScript jest:",
                correctlyAnswer: "Sekcja <body>",
                badAnswer_1: "Pomiędzy znaczniem <title></title>",
                badAnswer_2: "Sekcja <head>"
            },
            {
                id: uuid(),
                question: "Efektem działania kodu console.log('5' !== 5) będzie:",
                badAnswer_1: "False",
                badAnswer_2: "Undefined",
                correctlyAnswer_v2: "True"
            },
            {
                id: uuid(),
                testEndMessage: "Twój wynik to "
            }
        ],
        points: 0,
        badAnswers: 0,
        startSlice: 0,
        endSlice: 1,
        currentClickedBtnID: '',
        badAnswer: false
    }
    
    validationAnswer = (clickedBtn) => {
        console.log("Kliknięty : " + clickedBtn);
        
        const previousCorrectlyAnswerValue = this.state.points + 1;
        const startSlice = this.state.startSlice;
        const endSlice = this.state.endSlice;
        this.setState({
            points: previousCorrectlyAnswerValue,
            clicked: true,
            currentClickedBtnID: clickedBtn,
            startSlice: startSlice + 1,
            endSlice: endSlice + 1
        });
    }

    badAnswer = () => {
        const previousCorrectlyAnswerValue = this.state.points + 1;
        this.setState({
            points: previousCorrectlyAnswerValue,
            badAnswer: true
        });
        setTimeout(() => this.setState({badAnswer: false}), 1250);
    }

    render() {
        console.log(this.state.questions)
        let questions = this.state.questions
        .slice(this.state.startSlice , this.state.endSlice)
        .map( question => {
            if(question.correctlyAnswer){
                return (
                    <div className={classes.QuestionBox} key={question.id}>
                        <h5>Pytanie: {question.question}</h5>

                            <button disabled={this.state.currentClickedBtnID === question.id ? true : false} 
                                onClick={() => this.validationAnswer(question.id)}>
                                {question.correctlyAnswer}
                            </button>

                        <button onClick={this.badAnswer}>{question.badAnswer_1}</button>
                        <button onClick={this.badAnswer}>{question.badAnswer_2}</button>
                        {this.state.badAnswer ? <h4>Odpowiedź nieprawidłowa, naliczono punkt karny.</h4> : null}
                    </div>
                )
            }
            if(question.correctlyAnswer_v1){
                return (
                    <div className={classes.QuestionBox} key={question.id}>
                        <h5>Pytanie: {question.question}</h5>
                        <button onClick={this.badAnswer}>{question.badAnswer_1}</button>

                        <button disabled={this.state.currentClickedBtnID === question.id ? true : false} 
                                onClick={() => this.validationAnswer(question.id)}>
                                {question.correctlyAnswer_v1}
                        </button>

                        <button onClick={this.badAnswer}>{question.badAnswer_2}</button>
                        {this.state.badAnswer ? <h4>Odpowiedź nieprawidłowa, naliczono punkt karny.</h4> : null}

                    </div>
                )
            }
            if(question.correctlyAnswer_v2){
                return (
                    <div className={classes.QuestionBox} key={question.id}>
                        <h5>Pytanie: {question.question}</h5>
                        <button onClick={this.badAnswer}>{question.badAnswer_1}</button>
                        <button onClick={this.badAnswer}>{question.badAnswer_2}</button>
                        
                        <button disabled={this.state.currentClickedBtnID === question.id ? true : false} 
                                onClick={() => this.validationAnswer(question.id)}>
                                {question.correctlyAnswer_v2}
                        </button>
                        {this.state.badAnswer ? <h4>Odpowiedź nieprawidłowa, naliczono punkt karny.</h4> : null}

                    </div>
                )
            }
            if(question.testEndMessage){
                return (
                    <div className={classes.QuestionBoxEnd} key={question.id}>
                        <h5>{question.testEndMessage}{this.state.points - this.state.questions.length + 1} błędnych odpowiedzi na {this.state.questions.length} pytań.</h5>
                    </div>
                )
            }
            return true;
        });

        return (
            <Aux>
                {questions}
                <Hint/>
            </Aux>
        )
    }
}
