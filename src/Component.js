/*
Реализуйте компонент, который представляет собой две кнопки и лог событий:

Лог — это список значений, каждое из которых получается после нажатия на одну из двух кнопок. Снизу находятся более старые события, сверху новые.
Левая кнопка + добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" + 1
Правая кнопка - добавляет в лог строчку с новым значением равным: значение "самой новой существующей записи лога" - 1
При клике на запись в логе она удаляется.

Начальный HTML:

<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
</div>
После нажатия последовательности +, +, -, +:

<div>
  <div class="btn-group font-monospace" role="group">
    <button type="button" class="btn btn-outline-success">+</button>
    <button type="button" class="btn btn-outline-danger">-</button>
  </div>
  <div class="list-group">
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
    <button type="button" class="list-group-item list-group-item-action">2</button>
    <button type="button" class="list-group-item list-group-item-action">1</button>
  </div>
</div>
Каждое нажатие кнопки добавляет в лог новую строчку сверху.*/
import get from "lodash/get";
import uniqueId from "lodash/uniqueId";
import React from "react";

// BEGIN (write your solution here)
export default class Component extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], i: 0, log: {} };
  }
  addItemPlus = () => {
    const id = uniqueId();
    const button = (
      <button
        type="button"
        key={id}
        onClick={() => this.removeItem(id)}
        className="list-group-item list-group-item-action"
      >
        {this.state.i + 1}
      </button>
    );
    const newItems = [button, ...this.state.items];
    this.setState({ items: newItems });
    this.setState({ i: this.state.i + 1 });
    const key = this.state.i;
    const newLog = { [id]: key, ...this.state.log };
    this.setState({ log: newLog });
  };

  addItemMinus = () => {
    const id = uniqueId();
    const button = (
      <button
        type="button"
        key={id}
        onClick={() => this.removeItem(id)}
        className="list-group-item list-group-item-action"
      >
        {this.state.i - 1}
      </button>
    );
    const newItems = [button, ...this.state.items];
    this.setState({ items: newItems });
    this.setState({ i: this.state.i - 1 });
    const key = this.state.i;
    const newLog = { [id]: key, ...this.state.log };
    this.setState({ log: newLog });
    //console.log(newItems, this.state.lastId);
  };

  removeItem = (id) => {
    const { log } = this.state;
    const { [id]: _, ...newLog } = log;
    this.setState({
      log: newLog,
    });
    const newItems = this.state.items.filter((item) => item.key !== id);
    this.setState({ items: newItems });
    console.log(
      newItems,
      this.state.log,
      this.state.i,
      id,
      this.state.items[0].key
    );
  };

  render() {
    return (
      <div>
        <div className="btn-group font-monospace" role="group">
          <button
            type="button"
            onClick={this.addItemPlus}
            className="btn btn-outline-success"
          >
            +
          </button>
          <button
            type="button"
            onClick={this.addItemMinus}
            className="btn btn-outline-danger"
          >
            -
          </button>
        </div>
        <div className="list-group">{this.state.items}</div>
      </div>
    );
  }
}
