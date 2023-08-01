import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Homepage/Homepage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import MovieDetail from "./pages/MovieDetail/MovieDetail";
import "./App.css";
import SideBar from "./components/SideBar/SideBar";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="app">
      <SideBar className="SideBar" />
      <main className="main-content">
        <Routes>
          <Route path="/login" component={Login} />
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/movies/:movieId" element={<MovieDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </main>
    </div>
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
