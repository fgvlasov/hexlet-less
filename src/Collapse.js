// @ts-check

import React from "react";
import cn from "classnames";
import uniqueId from "lodash/uniqueId";

// BEGIN (write your solution here)
export default class Collapse extends React.Component {
  constructor(props) {
    super(props);
    const { opened } = props;
    this.state = {
      isExpanded: opened,
    };
  }
  openCard = () => {
    const { isExpanded } = this.state;
    this.setState({ isExpanded: !isExpanded });
  };
  render() {
    const { text } = this.props;
    const { isExpanded } = this.state;
    const classes = cn({
      collapse: true,
      show: isExpanded,
    });

    return (
      <div>
        <p>
          <a
            onClick={this.openCard}
            className="btn btn-primary"
            data-bs-toggle="collapse"
            href="#"
            role="button"
            aria-expanded={isExpanded}
          >
            Link with href
          </a>
        </p>
        <div className={classes}>
          <div className="card card-body">{text}</div>
        </div>
      </div>
    );
  }
}
// END
