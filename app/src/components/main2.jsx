// import React, { useState } from "react";

// export default function Main() {
//   const [income, setIncome] = useState(0);
//   const [expense, setExpense] = useState(0);
//   const [inputIncome, setInputIncome] = useState("");
//   const [inputExpense, setInputExpense] = useState("");

//   // Добавляем доход к текущему income
//   const incomeChange = () => {
//     const value = parseFloat(inputIncome);
//     if (!isNaN(value) && value > 0) {
//       setIncome(prev => prev + value);
//       setInputIncome(""); // очистить поле после добавления
//     }
//   };

//   // Добавляем расход к текущему expense
//   const expenseChange = () => {
//     const value = parseFloat(inputExpense);
//     if (!isNaN(value) && value > 0) {
//       setExpense(prev => prev + value);
//       setInputExpense("");
//     }
//   };

//   const balance = income - expense; // Остаток

//   return (
//     <section>
//       <header></header>
//       <div>
//         <div>
//           <span>Доход</span>
//           <input
//             placeholder="Введите доход"
//             value={inputIncome}
//             onChange={(e) => setInputIncome(e.target.value)}
//             type="number"
//             min="0"
//           />
//           <button onClick={incomeChange}>+</button>
//         </div>
//         <div>
//           <span>Расход</span>
//           <input
//             placeholder="Введите расход"
//             value={inputExpense}
//             onChange={(e) => setInputExpense(e.target.value)}
//             type="number"
//             min="0"
//           />
//           <button onClick={expenseChange}>-</button>
//         </div>
//       </div>
//       <footer>
//         <div>
//           <span>Осталось: {balance.toFixed(2)}</span>
//           <span>Потрачено: {expense.toFixed(2)}</span>
//         </div>
//         {/* Кнопка Учесть сейчас не используется, можно удалить или сделать логику */}
//         <button disabled>Учесть</button>
//       </footer>
//     </section>
//   );
// }
