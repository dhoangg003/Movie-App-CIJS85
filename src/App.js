import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
// import SettingPage from "./pages/SettingPage/SettingPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import SettingPage from "./pages/SettingPage/SettingPage";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import { createContext, useState } from "react";
import FavoritePage from "./pages/FavoritePage/FavoritePage";

export const AuthContext = createContext();

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signOut = () => {
    setIsLoggedIn(false);
  };
  const logIn = () => {
    setIsLoggedIn(true);
  };
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        signOut,
        logIn,
      }}
    >
      <div className="app">
        {isLoggedIn && <SideBar signOut={signOut} />}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            {/* <Route path="/settings" element={<SettingPage />} /> */}
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/favorite" element={<FavoritePage />} />
            <Route path="/movies/:movieId" element={<MovieDetail />} />
            <Route path="*" element={<SettingPage />} />
          </Routes>
        </main>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
/*
  Homepage:       /
  Login:          /login
  Signup          /signup
  Movie Detail    /movies/:id
  Page not found  /đường-dẫn-còn-lại
*/
