import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';

const operator = {
    '+': (x,y) => { return Number(x)+Number(y); },
    '-': (x,y) => { return Number(x)-Number(y); },
    'x': (x,y) => { return Number(x)*Number(y); },
    '/': (x,y) => { return Number(x)/Number(y); },
}
const row1Buttons = {
    '1': "one",
    '2': "two",
    '3': "three",
    '+': "add",
    'x': "multiply"
}
const row2Buttons = {
    '4': "four",
    '5': "five",
    '6': "six",
    '-': "subtract",
    '/': "divide"
}
const row3Buttons = {
    '7': "seven",
    '8': "eight",
    '9': "nine",
    '.': "decimal"
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
                    <button type="button" id={this.props.id} className="btn btn-secondary px-4 py-3 mt-0     " value={this.props.value} onClick={this.handleClick}>{this.props.value}</button>    
                )
        }
    }
} 

class Calculator extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            input: '0',
            result: '0',
            previous: '0'
        }

        this.handleClick = this.handleClick.bind(this);
        this.calculate = this.calculate.bind(this);
    }

    handleClick(e) {
        if(this.state.input==='0')
            this.setState({ input: e.target.value, result: e.target.value });
        else {
            if(e.target.value==='.' && this.state.input.indexOf('.')>-1)
                this.setState({ input: this.state.input, result: this.state.result});
            else
                this.setState({ input: this.state.input + e.target.value, result: this.state.result + e.target.value });
        }
        
        if(e.target.value==='AC')
            this.setState({ input:'0', result: '0' });

        if(e.target.value==='=') 
            this.setState({
                input: '0',
                result: this.calculate(),
        })

        //preivous
        this.setState({ previous: this.state.result});
        console.log(`Handleclick previous: ${this.state.previous}`);
    }

    calculate() {
        console.log(`Calculate result: ${this.state.result}`);
        console.log(`Calculate input: ${this.state.input}`);
        console.log(`Calculate prevous: ${this.state.previous}`);


        let op = this.state.input.replace(/\s/g,'').match(/\/|x|\-|\+/g);
        
        if(op<1) {
            return this.state.input;
        }
        // if 1 occurrence
        if(op.length===1) {
            let x = this.state.input.split(op[0]);
            return operator[op[0]](x[0],x[1].toString());
        }
        //if more than 1 occurrence
        if(op.length>1) {
            console.log(op);
        }
    }

    render() {
        return(
            <div className="pt-5">
                <div id="calculator" className="ml-auto mr-auto py-4">
                    <div id="input" className="pt-3 text-right pr-5">{this.state.input}</div>
                    <div id="display" className="pt-3 text-right pr-5">{this.state.result}</div>
                    <br />
                    <div className="btn-group"> {
                        Object.entries(row1Buttons).map(([k,v]) => {
                           return( <CalculatorButton value={k} id={v} onClick={this.handleClick}/>)
                        }) 
                    }
                    </div>
                    <div className="btn-group"> {
                        Object.entries(row2Buttons).map(([k,v]) => {
                            return( <CalculatorButton value={k} id={v} onClick={this.handleClick}/>)
                        }) 
                    }
                    </div>
                    <div className="btn-group"> {
                        Object.entries(row3Buttons).map(([k,v]) => {
                            return( <CalculatorButton value={k} id={v} onClick={this.handleClick}/>)
                        }) 
                    }
                    <CalculatorButton value="0" id="zero" onClick={this.handleClick}/>
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