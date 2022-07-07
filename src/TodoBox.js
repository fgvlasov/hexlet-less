import { uniqueId } from "lodash";
import React from "react";
import Item from "./Item.js";

// BEGIN (write your solution here)
export default class TodoBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = { item: "", value: "", tasks: [] };
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
    console.log(this.state.value);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const id = uniqueId();
    return (
      <div className="row" key={id}>
        {this.state.tasks.map((item) => (
          <Item onRemove={this.handleRemove} task={item} />
        ))}
      </div>
    );
  };

  handleRemove = (value) => (e) => {
    e.preventDefault();
    const newTasks = this.state.tasks.filter((item) => item !== value);
    this.setState({ tasks: newTasks });
  };

  renderItem = () => (
    <div className="row">
      {this.state.tasks.map((item) => (
        <Item onRemove={this.handleRemove} task={item} />
      ))}
    </div>
  );

  render() {
    const { tasks } = this.state;
    const value = "";
    return (
      <div>
        <div className="mb-3">
          <form className="d-flex" onSubmit={this.handleSubmit}>
            <div className="me-3">
              <input
                type="text"
                value={value}
                onChange={this.handleChange}
                required=""
                className="form-control"
                placeholder="I am going..."
              />
            </div>
            <button type="submit" className="btn btn-primary">
              add
            </button>
          </form>
        </div>
        {tasks}
      </div>
    );
  }
}
