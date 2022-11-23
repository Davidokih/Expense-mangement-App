import React from 'react'
import ExpComp from './ExpComp/ExpenseComp/ExpComp'
import Header from './ExpComp/Header/Header'
import EditExpense from './ExpComp/ExpenseComp/EditExpense'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        
        <Routes>
          <Route path="/expense" element={ <ExpComp />} />
          <Route path="/editExpense" element={ <EditExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App