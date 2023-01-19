import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Candidates from './components/Candidates/Candidates';
import CandidatesGrid from './components/CandidatesGrid/CandidatesGrid';
import UsersPage from './components/UsersPage/UsersPage';
import AddCandidates from './components/AddCandidstes/AddCandidates';
import AddUsers from './components/AddUsers/AddUsers';
import FetchDataUsers from './components/FetchDataUsers/FetchDataUsers';
import List from './components/List/List';
import Settings from './components/Settings/Settings';
import RusumeCreate from './components/RusumeCreate/RusumeCreate';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Table from "./table";
function App() {
  return (
    <div className="App">
      
      <Router>
        <Header/>
              <Routes>
                    <Route element={<Home/>} path="/" exact/>
                    <Route element={<Candidates/>} path="/candidates" exact/>
                    <Route element={<CandidatesGrid/>} path="/candidatesgrid"/>
                    <Route element={<UsersPage/>} path="/products/:id"/>
                    <Route element={<RusumeCreate/>} path="/rusume" exact/>
                    <Route element={<AddCandidates />} path="/addCandidstes" exact/>
                    <Route element={<AddUsers />} path="/addUsers" exact/>
                    <Route element={<List />} path="/list" exact/>
                    <Route element={<FetchDataUsers/>} path="/fetchDataUsers" exact/>
                    <Route element={<Settings/>} path="/settings" exact/>
                
              </Routes>
          </Router>
    </div>
  );
}

export default App;
