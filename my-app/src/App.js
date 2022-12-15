import logo from './logo.svg';
import './App.css';
import './expenses.css';
import NewExpenseItem from './components/Expenses/NewExpenseItems';
import NewExpense from './components/NewExpense/NewExpense';
const expenses = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const addExpenseHandler = expense => {
    console.log('In App.js');
    console.log(expense);
  };

  return (
    <div className="App">
     <h2>Let's Gte started</h2>
     <NewExpense onAddExpense={addExpenseHandler} />
    <NewExpenseItem expenses={expenses} className='expenses'/>
    </div>
  );
}

export default App;
