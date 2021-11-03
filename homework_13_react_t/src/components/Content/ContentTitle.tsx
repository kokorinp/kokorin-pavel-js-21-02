// пока не очень понимаю как правильно подключать компоненты, но тут сделал так, не создавая отдельную папку.
import React from "react";
import "./ContentTitle.css";

class ContentTitle extends React.Component<any, any> {
  render() {
    return (
      <div className="content__title">
        <h2 className="content__title-text">{this.props.title}</h2>
        <p className="content__title-descr">{this.props.text}</p>
      </div>
    );
  }
}

export default ContentTitle;
