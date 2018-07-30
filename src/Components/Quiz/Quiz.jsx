import React, { Component } from 'react';
import questionPackage from '../../Data/Questions.js'
import Aux from '../../HOC/aux_x';
import Hint from '../Hint/Hint';
import classes from './Quiz.css';

export default class Quiz extends Component {
    state = {
        questions: questionPackage,
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
        let questions = this.state.questions.questions
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
                        <h5>{question.testEndMessage}{this.state.points - this.state.questions.questions.length + 1} błędnych odpowiedzi na {this.state.questions.questions.length} pytań.</h5>
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
