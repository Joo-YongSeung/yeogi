import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Recommends from './pages/Recommends';
import RecommendDetail from './pages/RecommendDetail';
import RecommendRegist from './pages/RecommendRegist';
import RecommendModify from './pages/RecommendModify';
import Layout from './layouts/Layout';
import Login from './pages/Login';
import Error from './pages/Error';
import PhotoDetail from './pages/PhotoDetail';
import PhotoModifyForm from './components/form/PhotoModifyForm';
import PhotoRegistForm from './components/form/PhotoRegistForm';
import Photos from './pages/Photos';
import BoardList from './pages/BoardList';
import BoardNew from './components/board/BoardNew';
import BoardContent from './components/board/BoardContent';
import ButtonFooter from './components/board/ButtonFooter';
import BoardRegist from './pages/BoardRegist';
// import Board from './pages/Board';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path="/" element={ <Layout/> }>
            <Route index element={ <Home/> }/>
            <Route path="recommend">
              <Route index element={ <Recommends/> }/>
              <Route path=":id" element={<RecommendDetail/>}/>
              <Route path="regist" element={<RecommendRegist/>}/>
              <Route path="modify">
                <Route path=":id" element={<RecommendModify/>}/>
              </Route>
            </Route>

            <Route path = "photokey">
            <Route index element={ <Photos/> }/>
            <Route path=":id" element= { <PhotoDetail/>}/> 
            <Route path="regist" element= { <PhotoRegistForm/>}/> 
            <Route path ="modify">
              <Route path=":id" element={ <PhotoModifyForm/>}/>
            </Route>
            </Route>
            
            <Route path ="board">
            <Route index element={ <BoardList/>}  />
              <Route path="BoardNew" element={ <BoardRegist/> } />
              <Route path="BoardContent" element={ <BoardContent/> } />            
            </Route>
          
            <Route path="login" element={ <Login/> }/>
          </Route>

          <Route path="*" element={ <Error/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;