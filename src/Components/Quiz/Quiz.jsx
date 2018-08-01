import React, { Component } from 'react';
import questionPackage from '../../Data/Questions.js';
import Aux from '../../HOC/aux_x';
import Hint from '../Hint/Hint';
import classes from './Quiz.css';

export default class Quiz extends Component {
    state = {
        questions: questionPackage,
        points: 0,
        startSlice: 0,
        endSlice: 1,
        currentClickedBtnID: '',
        badAnswer: false,
        questionDisplay: 1
    }
    
    validationAnswer = (clickedBtn) => {        

        const questionVal = this.state.questionDisplay;

        const previousCorrectlyAnswerValue = this.state.points + 1;
        const startSlice = this.state.startSlice;
        const endSlice = this.state.endSlice;
        this.setState({
            points: previousCorrectlyAnswerValue,
            currentClickedBtnID: clickedBtn,
            startSlice: startSlice + 1,
            endSlice: endSlice + 1,
            questionDisplay: questionVal + 1
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
    pageReload = () => {
        window.location.reload();
    }

    render() {
        let questions = this.state.questions.questionsList
        .slice(this.state.startSlice , this.state.endSlice)
        .map( question => {
            if(question.correctlyAnswer){
                return (
                    <div className={classes.QuestionBox} key={question.id}>
                        <h5>Pytanie {this.state.questionDisplay}: {question.question}</h5>

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
                        <h5>Pytanie {this.state.questionDisplay}: {question.question}</h5>
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
                        <h5>Pytanie {this.state.questionDisplay}: {question.question}</h5>
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
                        <h5>{question.testEndMessage}{this.state.points - this.state.questions.questionsList.length + 1} błędnych odpowiedzi na {this.state.questions.questionsList.length-1} pytań.</h5>
                        <button onClick={this.pageReload}>Spróbuj ponownie</button>
                    </div>
                )
            }
            return true;
        });

        return (
            <Aux>
                {questions}
                <Hint questionCounter={this.state.questions.questionsList.length}/>
            </Aux>
        )
    }
}
