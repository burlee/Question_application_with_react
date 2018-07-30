import React, { Component } from 'react';
import uuid from 'uuid';
import Aux from '../../HOC/aux_x';
import classes from './Quiz.css';
import Hint from '../Hint/Hint';

export default class Quiz extends Component {
    state = {
        questions: [
            {
                id: uuid(),
                question: "Jaka jest różnica pomiędzy === a == ?",
                correctlyAnswer: "== nie porównuje typu danych, a === porównuje dane oraz dodatkowo typy",
                badAnswer_1: "Nie ma różnicy",
                badAnswer_2: "=== nie porównuje typów danych, a == porównuje"
            },
            {
                id: uuid(),
                question: "2dsadsadasdsadsa",
                badAnswer_1: "true",
                badAnswer_2: "unknown",
                correctlyAnswer_v2: "V2"
            },
            {
                id: uuid(),
                question: "3",
                badAnswer_1: "true",
                correctlyAnswer_v1: "V1",
                badAnswer_2: "unknown"
            },
            {
                id: uuid(),
                question: "Where is the correct place to insert a JavaScript?",
                correctlyAnswer: "The <body> section",
                badAnswer_1: " Both the <head> section and the <body> section are correct",
                badAnswer_2: "The <head> section"
            },
            {
                id: uuid(),
                question: "Efektem działania kodu console.log('5' === 5) będzie:",
                correctlyAnswer: "false",
                badAnswer_1: "true",
                badAnswer_2: "unknown"
            },
            {
                id: uuid(),
                question: "Efektem działania kodu console.log('5' === 5) będzie:",
                badAnswer_1: "true",
                badAnswer_2: "unknown",
                correctlyAnswer_v2: "false"
            },
            {
                id: uuid(),
                question: "Where is the correct place to insert a JavaScriptdsadsad?",
                correctlyAnswer: "The <body> section",
                badAnswer_1: " Both the <head> section and the <body> section are correct",
                badAnswer_2: "The <head> section"
            }
        ],
        correctlyAnswers: 0,
        badAnswers: 0,
        startSlice: 0,
        endSlice: 1,
        currentClickedBtnID: '',
        badAnswer: false
    }
    
    validationAnswer = (clickedBtn) => {
        console.log("Kliknięty : " + clickedBtn);
        
        const previousCorrectlyAnswerValue = this.state.correctlyAnswers + 1;
        const startSlice = this.state.startSlice;
        const endSlice = this.state.endSlice;
        this.setState({
            correctlyAnswers: previousCorrectlyAnswerValue,
            clicked: true,
            currentClickedBtnID: clickedBtn,
            startSlice: startSlice + 1,
            endSlice: endSlice + 1
        });
    }

    badAnswer = () => {
        const previousCorrectlyAnswerValue = this.state.correctlyAnswers + 1;
        this.setState({
            correctlyAnswers: previousCorrectlyAnswerValue,
            badAnswer: true
        });
        setTimeout(() => this.setState({badAnswer: false}), 1250);
    }

    render() {
        console.log(this.state.correctlyAnswers)
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
                        {this.state.badAnswer ? <h4>Ta odpowiedź jest nie prawidłowa</h4> : null}
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
                        {this.state.badAnswer ? <h4>Ta odpowiedź jest nie prawidłowa</h4> : null}

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
                        {this.state.badAnswer ? <h4>Ta odpowiedź jest nie prawidłowa</h4> : null}

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
