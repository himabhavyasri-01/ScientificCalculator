import './App.css';
import { Component } from 'react';
import Input from './components/Input'
import Button from './components/Button'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {result: ""};
  }

  addText = value => {
    const {result} = this.state;
    if(result === "Invalid Expression" || result === "Divide by Zero Error" || result === "Infinity" || result === "Error") {
      this.setState({result: value});
    }
    else {
      this.setState((prevState) => ({result: prevState.result + value}));
    }
  }

  clear = () => {
    this.setState({result: ""});
  }

  pop = () => {
    this.setState((prevState) => ({result: String(prevState.result).slice(0, -1)}))
  }

  calculateSin = value => {
    let answer = "";
    if(value.substring(3, 6) === "Inv") {
      answer = Math.asin(value.substring(6)) * 57.2198;
    }
    else {
      answer = Math.sin(value.substring(3) * Math.PI / 180.0)
    }
    return answer;
  }

  calculateCos = value => {
    let answer = "";
    if(value.substring(3, 6) === "Inv") {
      answer = Math.acos(value.substring(6));
    }
    else {
      answer = Math.cos(value.substring(3) * Math.PI / 180.0);
    }
    return  answer;
  }

  calculateTan = value => {
    let answer = "";
    if(value.substring(3, 6) === "Inv") {
      answer = Math.atan(value.substring(6));
    }
    else {
      answer = Math.tan(value.substring(3) * Math.PI / 180.0);
    }
    if(answer > 10) {
      answer = "Infinity";
    }
    return  answer;
  }

  factorial = value => {
    if(value === 1 || value === 0) {
      return 1;
    }
    return value * this.factorial(value - 1);
  }

  calculate = () => {
    
    var answer = "";

    try {
      answer = eval(this.state.result);
      if(String(answer) === "NaN") {
        answer = "Divide by Zero Error"
      }
    }

    catch (error) {      
      if(this.state.result.substring(0, 3) === "Sin") {
        answer = this.calculateSin(this.state.result);
      }
      else if(this.state.result.substring(0, 3) === "cos") {
        answer = this.calculateCos(this.state.result);
      }
      else if(this.state.result.substring(0, 3) === "tan") {
        answer = this.calculateTan(this.state.result);
      }
      else if(this.state.result.substring(0, 2) === "ln") {
          answer = Math.log(this.state.result.substring(2)) / Math.log(2.718282);
      }
      else if(this.state.result.substring(0, 3) === "log") {
        answer = Math.log(this.state.result.substring(3))
      }
      else if(this.state.result.substring(0, 3) === "Exp") {
        answer = Math.exp(this.state.result.substring(3))
      }
      else if(this.state.result.substring(0, 4) === "Sqrt") {
        answer = Math.sqrt(this.state.result.substring(4));
      }
      else if(this.state.result.substring(0, 2) === "PI") {
        try {
          answer = eval(`${Math.PI} ${this.state.result.substring(2)}`)
        }
        catch {
          answer = "Error"
        }
      }
      else if(this.state.result.substring(0, 1) === "e") {
        try {
          answer = eval(`2.718 ${this.state.result.substring(1)}`)
        }
        catch {
          answer = eval(`2.718 ${this.state.result.substring(1)}`)
        }
        
      }
      else if(this.state.result.charAt(this.state.result.length - 1) === "!") {
        answer = this.factorial(parseInt(this.state.result.substring(0, this.state.result.length - 1)));
      }
      else {
        answer = "Invalid Expression"
      }
    } 
    if(String(answer) === "NaN") {
      answer = "Error";
    }
    this.setState({result: answer});
  }

  render () {
    const {result} = this.state;
    return (
      <div className='bg-container'>
        <div className='calculator'>
          <Input value={result}/>

            <Button value="e pow x" name="e pow x" handleClick={this.addText} />
            <Button value="DEG" name="DEG" handleClick={this.addText} />
            <Button value="(" name="(" handleClick={this.addText} />
            <Button value=")" name=")" handleClick={this.addText} />
            <Button value="%" name="%" handleClick={this.addText} />
            <Button value="CE" name="CE" handleClick={this.pop} />
            <Button value="AC" name="AC" handleClick={this.clear} /> <br />

            <Button value="Inv" name="Inv" handleClick={this.addText} />
            <Button value="Sin" name="Sin" handleClick={this.addText} />
            <Button value="ln" name="ln" handleClick={this.addText} />
            <Button value="7" name="7" handleClick={this.addText} />
            <Button value="8" name="8" handleClick={this.addText} />
            <Button value="9" name="9" handleClick={this.addText} />
            <Button value="/" name="/" handleClick={this.addText} /> <br />

            <Button value="PI" name="PI" handleClick={this.addText} />
            <Button value="cos" name="cos" handleClick={this.addText} />
            <Button value="log" name="log" handleClick={this.addText} />
            <Button value="4" name="4" handleClick={this.addText} />
            <Button value="5" name="5" handleClick={this.addText} />
            <Button value="6" name="6" handleClick={this.addText} />
            <Button value="*" name="7" handleClick={this.addText} /> <br />

            <Button value="e" name="e" handleClick={this.addText} />
            <Button value="tan" name="tan" handleClick={this.addText} />
            <Button value="Sqrt" name="Sqrt" handleClick={this.addText} />
            <Button value="1" name="1" handleClick={this.addText} />
            <Button value="2" name="2" handleClick={this.addText} />
            <Button value="3" name="3" handleClick={this.addText} />
            <Button value="-" name="-" handleClick={this.addText} /> <br />

            <Button value="!" name="x!" handleClick={this.addText} />
            <Button value="Exp" name="Exp" handleClick={this.addText} />
            <Button value="**" name="Pow" handleClick={this.addText} />
            <Button value="0"  name="0" handleClick={this.addText} />
            <Button value="." name="." handleClick={this.addText} />
            <Button value="=" name="=" handleClick={this.calculate} />
            <Button value="+" name="+" handleClick={this.addText} />
          </div>
        </div>
      )
  }
  
}

export default App;
