import React from "react";
/*
Реализуйте компонент <MyForm>, отображающий форму из шести элементов:

email – инпут типа email
password – инпут типа password
address – textarea
city – текстовый инпут
country – select со следующими значениями: argentina, russia, china.
Accept Rules – checkbox булево значение должно быть приведено к строке

После сабмита формы появляется таблица, в которой показываются значения всех полей. 
Из этой формы можно вернуться в редактирование по кнопке Back. 
При этом все данные должны оказаться на своих местах.

Сейчас мое решение не отрисовывает таблицу с пустыми значениями. 
Если нажать на отправку формы сразу, без заполнения формы, то таблицы нет. 
Должна быть таблица со всем ключами формы и пустыми значенями. 
Пока это не работает в веб-доступе, нет смысла пытаться пройти тесты.
*/
export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      form: {
        email: "",
        password: "",
        address: "",
        city: "",
        country: "",
        acceptRules: false,
      },
      toggle: false,
    };
  }

  handleChange = (e) => {
    e.preventDefault();
    this.setState((state) => ({
      form: {
        ...state.form,
        [e.target.name]:
          e.target.name === "acceptRules" ? e.target.checked : e.target.value,
      },
    }));
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.form);
    this.setState({ toggle: true });
  };

  showForm = (e) => {
    this.setState({ toggle: false });
    this.setState((state) => ({
      form: {
        ...state.form,
        [e.target.name]:
          e.target.name === "acceptRules" ? e.target.checked : e.target.value,
      },
    }));
  };

  render() {
    const { form } = this.state;
    var form2 = Object.entries(form);
    console.log("form2", form2);

    const listItems = form2.sort().map(([key, value]) => (
      <tr key={key}>
        <td>{key}</td>
        <td>{value.toString()}</td>
      </tr>
    ));

    return this.state.toggle ? (
      <div>
        <button
          onClick={this.showForm}
          type="button"
          className="btn btn-primary"
        >
          Back
        </button>
        <table className="table">
          <tbody>{listItems}</tbody>
        </table>
      </div>
    ) : (
      <form onSubmit={this.handleSubmit} name="myForm">
        <div className="col-md-6 mb-3">
          <label htmlFor="email" className="col-form-label">
            Email
          </label>
          <input
            value={form.email}
            onChange={this.handleChange}
            type="email"
            name="email"
            className="form-control"
            id="email"
            placeholder="Email"
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="password" className="col-form-label">
            Password
          </label>
          <input
            value={form.password}
            onChange={this.handleChange}
            type="password"
            name="password"
            className="form-control"
            id="password"
            placeholder="Password"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="address" className="col-form-label">
            Address
          </label>
          <textarea
            value={form.address}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            name="address"
            id="address"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="city" className="col-form-label">
            City
          </label>
          <input
            value={form.city}
            onChange={this.handleChange}
            type="text"
            className="form-control"
            name="city"
            id="city"
          />
        </div>
        <div className="col-md-6 mb-3">
          <label htmlFor="country" className="col-form-label">
            Country
          </label>
          <select
            value={form.country}
            onChange={this.handleChange}
            id="country"
            name="country"
            className="form-control"
          >
            <option>Choose</option>
            <option value="argentina">Argentina</option>
            <option value="russia">Russia</option>
            <option value="china">China</option>
          </select>
        </div>
        <div className="col-md-6 mb-3">
          <div className="form-check">
            <label className="form-check-label" htmlFor="rules">
              <input
                checked={form.acceptRules}
                onChange={this.handleChange}
                id="rules"
                type="checkbox"
                name="acceptRules"
                className="form-check-input"
              />
              Accept Rules
            </label>
          </div>
        </div>
        <button type="submit" className="btn btn-primary">
          Sign in
        </button>
      </form>
    );
  }
}
