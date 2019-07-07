import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

// child class of calculator
class CalculatorButton extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <button type="button" className="btn btn-outline-secondary">{this.props.value}</button>    
        )
    }
} 

// child class
class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: 0
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        console.log("button clicked");
        console.log(` value: ${e.target.value}`);
        this.setState({
            value: e.target.value
        });
    }

    render() {
        return(
            <div id="calculator">
                <textarea id="result" placeholder="Result" disabled></textarea>
                <br />
                <div className="btn-group" role="group">
                    <CalculatorButton value="1A" onClick={this.handleClick}/>
                    <CalculatorButton value="2" />                    
                    <CalculatorButton value="3" />
                </div>
                <br />
                <div className="btn-group">
                    <CalculatorButton value="4" />
                    <CalculatorButton value="5" />                    
                    <CalculatorButton value="6" />
                </div>
                <br />
                <div className="btn-group">
                    <CalculatorButton value="7" />
                    <CalculatorButton value="8" />                    
                    <CalculatorButton value="9" />
                </div>
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

    handleClick(e) {

    }

    render() {
        return (
            <div id="container" className="container-fluid">
                <div id="spacer"></div>
                <Calculator />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));