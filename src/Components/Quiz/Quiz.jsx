import React, { Component } from 'react';
import uuid from 'uuid'
import classes from './Quiz.css'
import Aux from '../../HOC/aux_x';

export default class Quiz extends Component {
    state = {
        questions_v1: [
            {
                id: uuid(),
                question: "Efektem działania kodu console.log('5' === 5) będzie:",
                correctlyAnswer: "false",
                badAnswer_1: "true",
                badAnswer_2: "unknown"
            },
            {
                id: uuid(),
                question: "Where is the correct place to insert a JavaScript?",
                correctlyAnswer: "The <body> section",
                badAnswer_1: " Both the <head> section and the <body> section are correct",
                badAnswer_2: "The <head> section"
            }
        ],
        questions_v2 : [
            {
                id: uuid(),
                question: "Efektem działania kodu console.log('5' === 5) będziedsadsadsa:",
                correctlyAnswer: "false",
                badAnswer_1: "true",
                badAnswer_2: "unknown"
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
        timeToLoadQuestion: [3,2,1,4,5,6,7,8,9,10]
    }

    // componentDidMount(){
    //     console.log(this.state.questions)
    // }


    render() {
        console.log(this.state.questions)

        setTimeout(() => console.log('LOOOOOG'), this.state.timeToLoadQuestion[0])
        setTimeout(() => console.log('LOOOOOG1'), this.state.timeToLoadQuestion[1])
        setTimeout(() => console.log('LOOOOOG2'), this.state.timeToLoadQuestion[2])
        let questions_v1 = this.state.questions_v1.map( question => {
            return (
                <div className={classes.QuestionBox} key={question.id}>
                    <h5>{question.question}</h5>
                    <p>{question.badAnswer_1}</p>
                    <p>{question.badAnswer_2}</p>
                    <p style={{color: 'red'}}>{question.correctlyAnswer}</p>
                </div>
            )
        });

        let questions_v2 = this.state.questions_v2.map( question => {
            return (
                <div className={classes.QuestionBox} key={question.id}>
                    <h5>{question.question}</h5>
                    <p>{question.badAnswer_1}</p>
                    <p style={{color: 'green'}}>{question.correctlyAnswer}</p>
                    <p>{question.badAnswer_2}</p>
                </div>
            )
        });


        return (
            <Aux>
                {questions_v1}
                {questions_v2}
            </Aux>
        )
    }
}
