import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import TableDemo from './pages/TableDemo'
import TaskTracker from './pages/TaskTracker'

const App = () => {

    return(
      <Router>
        <div>
            <Routes>
              <Route path='/' element={<Home/>} >
                <Route path='task-tracker' element={<TaskTracker/>}/>
                <Route path='table-demo' element={<TableDemo/>}/>
              </Route>
            </Routes>
        </div>
      </Router>
    )
}

export default App