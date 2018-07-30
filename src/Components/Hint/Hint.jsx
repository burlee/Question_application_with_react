import React, { Component } from 'react';
import classes from './Hint.css';


export default class Hint extends Component {
    state = {
        showHintToggle: false
    }

    showHintToggle = () => {
        this.setState({showHintToggle: !this.state.showHintToggle})
    }

    render() {
        return (
            <div onClick={this.showHintToggle} className={classes.Hint}>
                <i className="far fa-question-circle"></i>
                {this.state.showHintToggle ? 
                <div className={classes.HintDescription}>
                    <p>
                        Sprawdź swoją wiedzę z zakresu języka JavaScript.
                        Zostaną dla Ciebie wyświetlone pytania, jesli się pomylisz w swojej odpowiedźi zostanie Ci naliczony punkt karny, czym więcej punktow karnych tym bardziej musisz przyłożyć się do nauki.
                    </p>
                    <button onClick={this.showHintToggle}>Zamknij</button>
                </div> : null
                }
            </div>
        )
    }
}
