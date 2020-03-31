import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const operator = {
    '+': (x,y) => { return x+y; },
    '-': (x,y) => { return x-y; },
    'x': (x,y) => { return x*y; },
    '/': (x,y) => { return x/y; },
}

class CalculatorButton extends React.Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        this.props.onClick(e);
    }

    render() {
        switch(this.props.value) {
            case 'AC':
                return(
                    <button type="button" id={this.props.id} className="btn btn-danger px-5 py-3 mt-0 " value={this.props.value} onClick={this.handleClick}>{this.props.value}</button>    
                )
            case '=':
                return(
                    <button type="button" id={this.props.id} className="btn btn-success px-5 py-3 mt-0 " value={this.props.value} onClick={this.handleClick}>{this.props.value}</button>    
                )
            default:
                return(
                    <button type="button" id={this.props.id} className="btn btn-secondary px-4 py-3 mt-0 " value={this.props.value} onClick={this.handleClick}>{this.props.value}</button>    
                )
        }
    }
} 

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            // input: '0',
            result: '0'
        }

        this.handleClick = this.handleClick.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleClick(e) {
        this.state.result==='0' ? this.setState({ result: e.target.value}) : 
        this.setState({result: this.state.result + e.target.value})
        
        if(e.target.value==='AC')
            this.setState({ result: '0' });

        if(e.target.value==='=') 
            this.calculate();
        
        // console.log(this.state.result);
    }

    calculate() {
        let x = operator['+'](Number(n[0]),Number(n[1]));
        console.log(x);
        console.log(typeof(x));

        // let nums = this.state.result.split('+');
        // console.log(operator['+'](nums[0],nums[1]));

        // console.log(typeof(eval(this.state.result).toString()));
        // this.setState({
        //     result: eval(this.state.result).toString()
        // })
        // return eval(this.state.result);
        // let x = this.state.result.split(/x/g);
        // console.log(`RESULT: ${x}`);
        // this.resetState();
    }

    render() {
        return(
            <div className="pt-5">
                <div id="calculator" className="ml-auto mr-auto py-4">
                    <div id="display" className="pt-3 text-right pr-5">{this.state.result}</div>
                    <br />
                    <br />
                    <div className="btn-group">
                        <CalculatorButton value="1" id="one" onClick={this.handleClick}/>
                        <CalculatorButton value="2" id="two" onClick={this.handleClick}/>                    
                        <CalculatorButton value="3" id="three" onClick={this.handleClick}/>
                        <CalculatorButton value="+" id="add" onClick={this.handleClick}/>
                        <CalculatorButton value="x" id="multiply" onClick={this.handleClick}/>
                    </div>
                    <br />
                    <div className="btn-group">
                        <CalculatorButton value="4" id="four" onClick={this.handleClick}/>
                        <CalculatorButton value="5" id="five"onClick={this.handleClick}/>                    
                        <CalculatorButton value="6" id="six" onClick={this.handleClick}/>
                        <CalculatorButton value="-" id="subtract" onClick={this.handleClick}/>
                        <CalculatorButton value="/" id="divide" onClick={this.handleClick}/>
                    </div>
                    <br />
                    <div className="btn-group">
                        <CalculatorButton value="7" id="seven" onClick={this.handleClick}/>
                        <CalculatorButton value="8" id="eight" onClick={this.handleClick}/>                    
                        <CalculatorButton value="9" id="nine" onClick={this.handleClick}/>
                        <CalculatorButton value="0" id="zero" onClick={this.handleClick}/>
                        <CalculatorButton value="." id="decimal" onClick={this.handleClick}/>
                    </div>
                    <div className="btn-group">
                        <CalculatorButton value="AC" id="clear" onClick={this.handleClick}/>
                        <CalculatorButton value="=" id="equals" onClick={this.handleClick}/>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'));