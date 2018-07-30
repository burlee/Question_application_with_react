import React, { Component } from 'react';
import uuid from 'uuid'
import classes from './Quiz.css'
import Aux from '../../HOC/aux_x';

export default class Quiz extends Component {
    state = {
        questions: [
            {
                id: uuid(),
                question: "1",
                correctlyAnswer: "false",
                badAnswer_1: "true",
                badAnswer_2: "unknown"
            },
            {
                id: uuid(),
                question: "2",
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

    componentDidMount(){
        let arrayV1 = [...this.state.questions];
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
        setTimeout(() => this.setState({badAnswer: false}), 1750);
    }

    render() {

        console.log(this.state.correctlyAnswers)
        //this.state.clickedBtnList === question.id ? true : false
        let questions = this.state.questions
        .slice(this.state.startSlice , this.state.endSlice)
        .map( question => {
            if(question.correctlyAnswer){
                return (
                    <div className={classes.QuestionBox} key={question.id}>
                        <h5>{question.question}</h5>

                            <button disabled={this.state.currentClickedBtnID === question.id ? true : false} 
                                style={{color: 'green'}} 
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
                        <h5>{question.question}</h5>
                        <button>{question.badAnswer_1}</button>

                        <button disabled={this.state.currentClickedBtnID === question.id ? true : false} 
                                style={{color: 'green'}} 
                                onClick={() => this.validationAnswer(question.id)}>
                                {question.correctlyAnswer_v1}
                        </button>

                        <button>{question.badAnswer_2}</button>
                    </div>
                )
            }
            if(question.correctlyAnswer_v2){
                return (
                    <div className={classes.QuestionBox} key={question.id}>
                        <h5>{question.question}</h5>
                        <button>{question.badAnswer_1}</button>
                        <button>{question.badAnswer_2}</button>
                        
                        <button disabled={this.state.currentClickedBtnID === question.id ? true : false} 
                                style={{color: 'green'}} 
                                onClick={() => this.validationAnswer(question.id)}>
                                {question.correctlyAnswer_v2}
                        </button>

                    </div>
                )
            }
        });



        return (
            <Aux>
                {questions}
            </Aux>
        )
    }
}
