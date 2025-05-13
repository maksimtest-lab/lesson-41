import { Component } from "react";

export default class ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        };
    }

    incrementCounter = () => {
        this.setState((prevCount) => ({
            counter: prevCount.counter + 1,
        }));
    };
    decrementCounter = () => {
        this.setState((prevCount) => ({
            counter: prevCount.counter - 1,
        }));
    };
    resetCounter = () => {
        this.setState({ counter: 0 });
    };

    render() {
        return (
            <div>
                <h1>ClassComponent Count: {this.state.counter}</h1>

                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div>
        );
    }
}