import React, { Component } from "react";

export default class Form extends Component {
  state = {
    value: "",
    textFeild: "",
    library: "",
    isAwesome: true,
  };

  handleChange = (e) => {
    // this.setState({
    //   [e.target.name]: e.target.value,
    // });
    if (e.target.type === "text") {
      this.setState({
        value: e.target.value,
      });
    } else if (e.target.type === "textarea") {
      this.setState({
        textFeild: e.target.value,
      });
    } else if (e.target.type === "select-one") {
      this.setState({
        library: e.target.value,
      });
    } else if (e.target.type === "checkbox") {
      this.setState({
        isAwesome: e.target.checked,
      });
    } else {
      console.log("Nothing");
    }
  };

  submitHandller = (e) => {
    const { value, textFeild, library, isAwesome } = this.state;

    e.preventDefault();
    console.log(value, textFeild, library, isAwesome);
  };

  render() {
    const { value, textFeild, library, isAwesome } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandller}>
          <input
            type="text"
            placeholder="title..."
            onChange={this.handleChange}
            value={value}
            name="value"
          />
          <br />

          <textarea
            name="textFeild"
            value={textFeild}
            onChange={this.handleChange}
          />
          <br />

          <select value={library} name="option" onChange={this.handleChange}>
            <option value="React">React</option>
            <option value="Angular">Angular</option>
          </select>
          <br />
          <input
            type="checkbox"
            checked={isAwesome}
            onChange={this.handleChange}
          />
          <br />
          <input type="submit" value="submit" />
        </form>
        <p>{value}</p>
        <p>{textFeild}</p>
        <p>{library}</p>
      </div>
    );
  }
}
