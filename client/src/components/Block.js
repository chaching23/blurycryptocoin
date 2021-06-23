import React, { Component } from "react";
import Transaction from "./Transaction";

class Block extends Component {
  state = { displayTransaction: false };

  toggleTransaction = () => {
    this.setState({ displayTransaction: !this.state.displayTransaction });
  };

  get displayTransaction() {
    const { data } = this.props.block;

    const stringifiedData = JSON.stringify(data);

    const dataDisplay =
      stringifiedData.length > 35
        ? `${stringifiedData.substring(0, 35)}...`
        : stringifiedData;

    if (this.state.displayTransaction) {
      return (
        <div>
          {data.map((transaction) => (
            <div key={transaction.id}>
              <hr />
              <Transaction transaction={transaction} />
            </div>
          ))}
          <br />
          <button
            style={{ backgroundColor: "red", color: "white", borderRadius: 10 }}
            onClick={this.toggleTransaction}
          >
            Show Less
          </button>
        </div>
      );
    }

    return (
      <div>
        <div>Data: {dataDisplay}</div>
        <button
          style={{ backgroundColor: "red", color: "white", borderRadius: 10 }}
          onClick={this.toggleTransaction}
        >
          Show More
        </button>
      </div>
    );
  }

  render() {
    const { timestamp, hash } = this.props.block;

    const hashDisplay = `${hash.substring(0, 15)}`;

    return (
      <div className="Block">
        <div>Hash: {hashDisplay}</div>
        <div>Timestamp: {new Date(timestamp).toLocaleDateString()}</div>

        {this.displayTransaction}
      </div>
    );
  }
}
export default Block;
