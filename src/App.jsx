import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Header } from '../components/Header/Header';
import { Login } from '../components/Login/Login';
import { MainPage } from '../components/MainPage/MainPage';
import { SignUp } from '../components/SignUp/SignUp';
import { ItemPage } from '../components/ItemPage/ItemPage';
import { Sidebar } from '../components/Sidebar/SideBar';
import { ProfilePage } from '../components/Profile/ProfilePage';
import { CatalogPage } from '../components/CatalogPage/CatalogPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        {/* <Sidebar /> */}

        <div className="main-content-wrapper">
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<ProfilePage />}/>
            <Route path="/movies" element={<CatalogPage type="movie" />} />
            <Route path="/tv-series" element={<CatalogPage type="tv" />} />
            <Route path="/item/:id" element={<ItemPage />} />
          </Routes>
        </div>        
      </div>
    </Router>
  )
}

export default App;