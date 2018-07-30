import React, { Component } from 'react'
import classes from './Hint.css'


export default class Hint extends Component {
    state = {

    }

    showHint = () => {

    }

    render() {
        return (
            <div onClick={this.showHint} className={classes.Hint}>
                <i class="far fa-question-circle"></i>
                <div className={classes.HintDescription}>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio quas ullam pariatur accusamus possimus blanditiis.</p>
                </div>
            </div>
        )
    }
}
