
import "../index.css"
import React,{useState} from "react";
export default function Main(){
    
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [balance, setBalance] = useState(parseFloat( localStorage.getItem("balance")));
    const [spent, setSpent] = useState(parseFloat( localStorage.getItem("spent")));

    const incomeChange=(e)=>{
        console.log("Доход", e.target.value)
        const value = parseFloat(e.target.value);          
         if (value > 0) {                      
             setIncome(value);   
                         
         }
    };

    const resetButton =(e) =>{
        setBalance(0)
        localStorage.setItem("balance",0)
    }

    const clearSpent =(e) =>{
        setSpent(0)
        localStorage.setItem("spent",0)
    }
    const incomeChangeSubmit =(e) =>{
        console.log(balance)
        let value = income+balance
        setBalance(value)
        localStorage.setItem("balance",value)   
    }
    const expenseChange=(e)=>{
        console.log("Расход", e.target.value)
        const value = parseFloat(e.target.value)
        if (value > 0) {                      
             setExpense(value); 
                
         }
         
    }
    const expenseChangeSubmit =(e) => {
        let value = balance-expense
        setSpent(expense + spent)
        setBalance(value)
        localStorage.setItem("balance",value)
       localStorage.setItem("spent", expense+spent)
    }
    return(
    <section className="app-container">
  <header className="app-header">
    <h1>Финансовый трекер</h1>
  </header>

  <main className="app-main">
    <div className="income-section">
      <label className="input-label">
        Доход
        <input type="number" placeholder="Введите доход" onChange={incomeChange} className="input-field"/>
      </label>
      <button onClick={incomeChangeSubmit} className="btn btn-add">+</button>
    </div>

    

    <div className="expense-section">
      <label className="input-label">
        Расход
        <input type="number" placeholder="Введите расход" onChange={expenseChange} className="input-field"/>
      </label>
      <button onClick={expenseChangeSubmit} className="btn btn-subtract">-</button>
    </div>

   
  </main>

  <footer className="app-footer">
    <div className="balance-info">
      <span>Осталось: <strong>{balance}</strong></span>
      <span>Потрачено: <strong>{spent}</strong></span>
    </div>
  </footer>
<div className="reset-section">
      <button onClick={resetButton} className="btn btn-reset">Сброс</button>
    </div>
   <div className="spent-section">
      <button onClick={clearSpent} className="btn btn-clear-spent">Потрачено</button>
    </div>
</section>

    )
}