import { Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './pages/Home';
import StartGame from './pages/StartGame';
import ExecuteGameContainer from './pages/ExecuteGameContainer';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />}></Route>
        <Route path={'/startGame'} element={<StartGame />}></Route>
        <Route path={'/executeGameContainer'} element={<ExecuteGameContainer />}></Route>
      </Routes>
    </>
  );
}



export default App;
