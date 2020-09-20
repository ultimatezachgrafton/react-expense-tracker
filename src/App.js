import React, { Component } from "react";
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

class App extends Component {
    constructor() {
        super()
        this.state = {
            items: [
                {
                    id: Math.random(),
                    amount: "",
                    paymentType: "Credit Card",
                    date: "",
                    location: "",
                    description: "",
                }
            ]
        }
        const storageItems = JSON.parse(window.localStorage.getItem("localStorage"));
        this.setState({
            items: [ storageItems ]
        });
        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }

    handleSubmit(event) {
        event.preventDefault();
   
        let newItem = {
          id: Math.random(),
          amount: this.state.amount,
          paymentType: this.state.paymentType,
          date: this.state.date,
          location: this.state.location,
          description: this.state.description,
        };

        this.setState({
          items: [newItem, ...this.state.items]
        });

        window.localStorage.setItem("localStorage", JSON.stringify(this.state.items));
    }

    handleDelete(itemId) {
        let items = this.state.items.filter(item => item.id !== itemId);
        this.setState({ items: items });
        window.localStorage.setItem("localStorage", JSON.stringify(this.state.items));
    }

    render() {
        return (
            <div id="expense-display">
                <ExpenseForm items={this.state.items} handleSubmit={this.handleSubmit} handleChange={this.handleChange} />
                <h3>Expense History</h3>
                <ExpenseTable items={this.state.items} handleDelete={this.handleDelete} />
            </div>
        )
    }
}
export default App