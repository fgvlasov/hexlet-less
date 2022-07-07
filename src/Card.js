import React from "react";

// BEGIN (write your solution here)
const Title = (props) => <h4 className="card-title">{props.children}</h4>;
const Body = (props) => <div className="card-body">{props.children}</div>;
const Text = (props) => <p className="card-text">{props.children}</p>;

export default class Card extends React.Component {
  static Body = Body;
  static Title = Title;
  static Text = Text;
  render() {
    return <>{this.props.children}</>;
  }
}

// END
