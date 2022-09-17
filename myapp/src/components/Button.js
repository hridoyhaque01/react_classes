import React, { Component } from "react";

export default class Button extends Component {
  shouldComponentUpdate(nextProps) {
    const { change: currentCHange, locale: currentLocale } = this.props;
    const { change: nextChange, locale: nexttLocale } = nextProps;
    if (currentCHange === nextChange && nexttLocale === currentLocale) {
      return false;
    }
    return true;
  }

  render() {
    console.log("Button component render");

    const { change, locale } = this.props;

    return (
      <div>
        <button type="button" onClick={() => change(locale)}>
          click here
        </button>
      </div>
    );
  }
}
