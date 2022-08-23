import React  from 'react';
import { Router, Routes, Route } from 'react-router-dom';
// import '@css/style.css';
import BoardList from '../components/BoardList';
import BoardNew from '../components/BoardNew';
import BoardContent from '../components/BoardContent';
import ButtonFooter from '../components/ButtonFooter';

function App () {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path='/' element={ <BoardList/>}  />
            <Route path='/BoardNew' element={ <BoardNew/> } />
            <Route path='/BoardContent' element={ <BoardContent/> } />
          </Routes>
        </div>
        <div>
          <ButtonFooter />
        </div>
      </Router>
    </div>
  )
}
export default App;