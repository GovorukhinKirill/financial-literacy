

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
    <section>
        <header>

       </header>
     <div>
         <div>
            <span>Доход</span>
            <input type="number" placeholder="Введите доход" onChange={incomeChange}/>
            <button onClick={incomeChangeSubmit}>+</button>
         </div>
         <div>
         <span>Сброс</span>
         <button onClick={resetButton}></button> 

         </div>
        <div> 
            <span>Расход</span>
            <input type="number" placeholder="Введите расход" onChange={expenseChange}/>
            <button onClick={expenseChangeSubmit}>-</button>
        </div>

     </div>
    <footer>
        <div>
            <span> Осталось: {balance} </span>
            <span> Потрачено:{spent} </span>
        </div>
    </footer>
    </section>
)
} 