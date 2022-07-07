import React from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";

import ThemeContext from "./contexts";

class ThemeSwitcher extends React.Component {
  // BEGIN (write your solution here)
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
  }
  setChecked = (idx) => {
    const { checked } = this.state;
    this.setState({ checked: !checked });
  };
  static contextType = ThemeContext;
  render() {
    let context = this.context;
    console.log(context);
    return (
      <ButtonGroup className="mb-2">
        {context.allThemes.map((item, idx) => (
          <ToggleButton
            id={idx}
            key={idx}
            type="checkbox"
            variant="secondary"
            checked={this.state.checked}
            value={idx}
            className={item.className}
            //onClick={context.setTheme(idx)}
            onChange={this.setChecked(idx)}
          >
            {item.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    );
  }
  // END
}

export default ThemeSwitcher;
