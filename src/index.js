import React from 'react';
import ReactDOM from 'react-dom';

// child class
class Calculator extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                hello world!
            </div>
        );
    }
}

// parent class capturing user input
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: ''
        }
    }
    render() {
        return (
            <div>
                <Calculator />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));