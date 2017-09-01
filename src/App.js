import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Main extends Component{
    render(){
        return(
            <div className="Main-container">
                <TimeSelect initialHour="6" endHour="24" />
                <Fields />
            </div>
        );
    }
}

class TimeSelect extends Component{

    render(){
        var rows = [];
        for (var i={this.props.initialHour}; i < 7; i++) {
                rows.push(<SelectOption hour={i} />);
        }

        return(
            <select>
                {rows}
            </select>
        );
    }
}

class SelectOption extends Component{
    render(){
        return(
            <option value={this.props.hour}>{this.props.hour}</option>
        );
    }
}

class Fields extends Component{
    render(){
        return(
            <div className="Fields">
                <Field availability="Available" />
                <Field availability="Unavailable" />
                <Field availability="Available" />
            </div>
        );
    }
}

class Field extends Component{

    fieldHandler = () =>{
        this.setState({
            availability: "Unavailable"
        });
    }

    render(){
        return(
            <div className={"Field " + this.props.availability} /*onClick={this.fieldHandler}*/>
            </div>
        );
    }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Main />
      </div>
    );
  }
}

export default App;
