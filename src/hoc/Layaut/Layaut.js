import React, {Component} from 'react'
import classes from'./Layaut'

class Layaut extends Component {
    render() {
        return(
            <div className={classes.Layaut}>
            <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

export default Layaut