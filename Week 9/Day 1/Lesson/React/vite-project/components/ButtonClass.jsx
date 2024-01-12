import {Component} from "react"

class ButtonClass extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: this.props.count
        }
    }

    incrementCount = () => {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        })
    }

    render() {
        return (
            <button onClick={this.incrementCount}>
                Count of class button is {this.state.count}
            </button>
        )
    }
}

export default ButtonClass 