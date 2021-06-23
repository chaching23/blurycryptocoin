import React, { Component } from "react";

import { Link } from "react-router-dom";

class ConductTransaction extends Component {
  state = {
    recipient: "",
    amount: 0,
  };

  updateRecipient = (event) => {
    this.setState({ recipient: event.target.value });
  };

  updateAmount = (event) => {
    this.setState({ amount: Number(event.target.value) });
  };

  render() {
    console.log("this.state", this.state);
    return (
      <div className="ConductTransaction">
        <Link to="/">Home</Link>
        <h3>Conduct a Transaction</h3>
        <form>
          <input
            input="text"
            placeholder="recipient"
            value={this.state.recipient}
            onChange={this.updateRecipient}
          />
          <input
            input="number"
            placeholder="amount"
            value={this.state.amount}
            onChange={this.updateAmount}
          />
        </form>
      </div>
    );
  }
}

export default ConductTransaction;
