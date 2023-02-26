import React from "react";
import ExpenseItem from "./ExpenseItem/ExpenseItem";
import './expense.css'

const Expense=(props)=>{
    const {expense}=props;

   
        return (
          <div className="expenses">
          <ExpenseItem title={expense[0].title}
          amount={expense[0].amount}
          date={expense[0].date}
          />
          <ExpenseItem title={expense[1].title}
          amount={expense[1].amount}
          date={expense[1].date}
          />
          <ExpenseItem title={expense[2].title}
          amount={expense[2].amount}
          date={expense[2].date}
          />
          <ExpenseItem title={expense[3].title}
          amount={expense[3].amount}
          date={expense[3].date}
          />
          <ExpenseItem/>
      
          
       </div> 
       );
   
}

export default Expense;