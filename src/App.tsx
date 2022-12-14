import React from 'react'
import ExpComp from './ExpComp/ExpenseComp/ExpComp'
import Header from './ExpComp/Header/Header'
import EditExpense from './ExpComp/ExpenseComp/EditExpense'
import Dashboard from './ExpComp/Screen/Dashboard'
import {BrowserRouter, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Header />
        
        <Routes>
          <Route path="/" element={ <Dashboard />} />
          <Route path="/expense" element={ <ExpComp />} />
          <Route path="/editExpense" element={ <EditExpense />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App