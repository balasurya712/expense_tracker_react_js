
import { useState, useEffect } from 'react';
import './App.css';
import Expense from './component/expense/expense';
import NewExpense from './component/new_expense/NewExpense';

const DUMMY_DATA = [
  {
    id: 'e1',
    title: 'Groceries',
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  { id: 'e2', title: 'New Mobile', amount: 799.49, date: new Date(2020, 2, 12) },
  {
    id: 'e3',
    title: 'Car Repair',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New work desk',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];


function App() {
  const [dummy, setDummy] = useState(DUMMY_DATA)
  const [isLoading, setLoading] = useState(true)
  useEffect(() => {
    fetch('http://localhost:8080/api/v1/expenseTracker')
      .then(Response => Response.json())
      .then((expense) => {
        console.log(expense);
        setDummy(expense.data)
        setLoading(false)

      })
  }, [])
  const onSave = (new_expense = {}) => {
    const expense = {
      ...new_expense,
      Id: Math.random().toString()
    }
    setDummy((previous_list) => { return [...previous_list, new_expense] })
    DUMMY_DATA.push(expense)
    console.log(DUMMY_DATA);
  }
  return (

    <> <NewExpense onSave={onSave} />
      <Expense expense={dummy} isListLoading={isLoading} />
    </>
  );
}

export default App;
