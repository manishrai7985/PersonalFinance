import './App.css'
import {BrowserRouter as Router,Routes,Route, Link} from "react-router-dom";

import { Auth } from './pages/auth';
import { DashBoard } from './pages/dashboard';
import { FinancialRecordsProvider } from './contexts/financial-record-context';
import { SignedIn, UserButton } from '@clerk/clerk-react';
import {dark} from "@clerk/themes";
function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">DashBoard</Link>
          <SignedIn>
           <UserButton showName appearance={{baseTheme:dark}}/>
          </SignedIn>
        </div>
        <Routes> 
          <Route path='/auth'element={<Auth/>}/>
          <Route path='/'element={<FinancialRecordsProvider>
            <DashBoard/>
          </FinancialRecordsProvider>}/>
        </Routes>
      </div>
    </Router>
  )
}

export default App
