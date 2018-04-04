import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    inputLength: 0,
    inputArray: [],
    input: ''
  }

  onChangeHandler = (event, index) => {
    const input = event.target.value;
    console.log(typeof input);
    const inputArray = input.split('');
    const length = inputArray.length;
    const joinInputArray = inputArray.join('');

    this.setState({inputLength: length, inputArray: inputArray, input: joinInputArray});
  }

  deleteCharIndex = (index) => {
    const inputArray = [...this.state.inputArray];
    inputArray.splice(index, 1);
    const inputString = inputArray.join('');
    this.setState({inputArray: inputArray, input: inputString});
  }

  render() {
    let characters = null;

    if (this.state.inputArray.length > 0) {
      characters = (
        <div>
          {this.state.inputArray.map((letter, index) => {
            return <CharComponent
              letter={letter}
              click={() => this.deleteCharIndex(index)} />
          })}
        </div>
      );
    }
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input
          type="text"
          onChange={(event) => this.onChangeHandler(event)}
          value={this.state.input} />
        <p>
          {this.state.inputLength}
        </p>
        <ValidationComponent inputLength={this.state.inputLength} />
        {characters}
      </div>
    );
  }
}

export default App;
