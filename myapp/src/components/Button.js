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
    const { change, locale, show } = this.props;

    return (
      <div>
        <button type="button" onClick={() => change(locale)}>
          {locale === "bn-BD" ? "change clock" : "ঘড়ি পরিবর্তন করুন"}
        </button>
        {show && <p>Hello</p>}
      </div>
    );
  }
}
