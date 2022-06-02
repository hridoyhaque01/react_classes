import React from 'react';

export default class DatabaseForm extends React.Component {
  state = {
    input: 'john doe',
    library: 'angular',
    message: 'hi i am react learner ..',
    isAwesome: true,
  };

  onChangeValue = (e) => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value,
    });

    if (e.target.type === 'checkbox') {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log('nothing change here ...');
    }
  };

  onSubmitValue = (e) => {
    e.preventDefault();
    const { input, library, message, isAwesome } = this.state;
    console.log(input, library, message, isAwesome);
  };

  render() {
    const { input, library, message, isAwesome } = this.state;
    return (
      <form action="" onSubmit={this.onSubmitValue}>
        <br />
        <input
          name="input"
          type="text"
          value={input}
          placeholder="Enter Your Name.."
          onChange={this.onChangeValue}
        />
        <br />
        <select name="library" id="" value={library} onChange={this.onChangeValue}>
          <option value="react">React</option>
          <option value="angular">Angular</option>
          <option value="vue">Vue</option>
        </select>
        <br />
        <input type="checkbox" checked={isAwesome} onChange={this.onChangeValue} />
        <br />
        <textarea
          name="message"
          value={message}
          id=""
          cols="30"
          rows="10"
          onChange={this.onChangeValue}
        />
        <br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}
