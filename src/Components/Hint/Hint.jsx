import React, { PureComponent } from 'react';
import classes from './Hint.css';


export default class Hint extends PureComponent {
    state = {
        showHintToggle: false
    }

    showHintToggle = () => {
        this.setState({showHintToggle: !this.state.showHintToggle})
    }

    render() {
        console.log(this.props)
        return (
            <div onClick={this.showHintToggle} className={classes.Hint}>
                <i className="far fa-question-circle"></i>
                {this.state.showHintToggle ? 
                <div className={classes.HintDescription}>
                    <p>
                        Sprawdź swoją wiedzę z zakresu języka JavaScript.
                        Przejdź przez {this.props.questionCounter} pytań i sprawdź ile błędów popełniłeś.
                        Każda błędna odpowiedź wiążę się z punktem karnym, im więcej punktów karnych tym gorzej.
                    </p>
                    <button onClick={this.showHintToggle}>Zamknij</button>
                </div> : null
                }
            </div>
        )
    }
}
