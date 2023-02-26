import React from "react";
import './NewExpenseForm.css'
const NewExpenseForm=()=>{
    return(
            <form>
                <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="expense_title" id="title" />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="amount">Amount</label>
                    <input type="number" name="expense_amount" id="amount" min="0"/>
                </div>
                <div className="new-expense__control">
                    <label htmlFor="date">Date</label>
                    <input type="date" name="expense_date" id="date" />
                </div>
                </div>
                <div className="new-expense__actions">
                <button type="reset">Cancel</button>
                <button type="submit">Add Expense</button>
                </div>
            </form>
       
    );
}

export default NewExpenseForm