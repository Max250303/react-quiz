import React from 'react'
import classes from './AnswerList'
import AnswerItem from './AnswerIItem/AnswerItem'

const AnswerList = props => (
    <ul className={classes.AnswerList}>
        {props.answers.map((answers, index) => {
            return (
                <AnswerItem
                answers={answers}
                />

            )

        })}
    </ul>
)

export default AnswerList