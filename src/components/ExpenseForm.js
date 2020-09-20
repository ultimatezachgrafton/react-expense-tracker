import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function ExpenseForm(props) {

    return (

        <Form onSubmit={props.handleSubmit} id="expense-form">
            <h2>Expense Tracker</h2>
            <div class="form-input-group">
                <div class="form-input-item">
                    <Form.Group controlId="formBasicAmount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            type="number"
                            value={props.items.amount}
                            name="amount"
                            onChange={props.handleChange}
                            required
                        />
                    </Form.Group>
                </div>

                <div class="form-input-item">
                    <Form.Group controlId="formBasicPaymentType">
                        <Form.Label>Payment Type</Form.Label>
                        <form onSubmit={props.handleSubmit}>
                            <select defaultValue="Credit Card"
                                value={props.items.paymentType} name="paymentType"
                                onChange={props.handleChange} class="form-dropdown"
                                required>
                                <option value="Credit Card">Credit Card</option>
                                <option value="Paypal">Paypal</option>
                                <option value="Google Pay">Google Pay</option>
                            </select>
                        </form>

                    </Form.Group>
                </div>
                <div class="form-input-item">
                    <Form.Group controlId="formBasicDate">
                        <Form.Label>Date</Form.Label>
                        <Form.Control class="formInputField"
                            type="date"
                            value={props.items.date}
                            name="date"
                            onChange={props.handleChange}
                            required
                        />
                    </Form.Group>
                </div>
            </div>

            <div class="form-input-group" id="inputLine2">
                <div class="form-input-item">
                    <Form.Group controlId="formBasicDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            value={props.items.description}
                            name="description"
                            onChange={props.handleChange}
                        />
                    </Form.Group>
                </div>
                <div class="form-input-item">
                    <Form.Group controlId="formBasicextLocation">
                        <Form.Label>Location</Form.Label>
                        <Form.Control class="formInputField" type="text" value={props.items.location}
                            name="location"
                            onChange={props.handleChange}
                            required
                        />
                    </Form.Group>
                </div>

                <div class="form-input-item">
                    <Button variant="primary" type="submit" onClick={props.handleSubmit} id="submit-button">
                        Submit
                        </Button>
                </div>
            </div>

        </Form>
    )
}

export default ExpenseForm