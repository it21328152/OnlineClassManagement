import Header from './components/Header';
import DaySchedule from './components/DaySchedule';
import AddClass from './components/AddClass';
import AllClasses from './components/AllClasses';
import TimeTable from './components/TimeTable';
import {BrowserRouter as Router,Routes, Route} from "react-router-dom"
import UpdateClass from './components/UpdateClass';






function App() {
  return (
  <Router>
    <div>
    
      <Header/>
      
      <Routes>
      <Route path="/add" element={<AddClass/>}/>
      <Route path="/" element={<AllClasses/>}/>
      <Route path="/table" element={<TimeTable/>}/>
      <Route path="/schedule" element={<DaySchedule/>}/>
      

      <Route path="/get/:id" element={<UpdateClass/>}/>
      <Route path="/update/:id" element={<UpdateClass/>}/>
      </Routes>
      
      
    </div>
    </Router>
  ); 
}

export default App;
 