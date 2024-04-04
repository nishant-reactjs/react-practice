import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import LoadMore from "./pages/LoadMore";
import ReadMore from "./pages/ReadMore";
import "./assets/appStyle.css";
import DarkMode from "./pages/DarkMode";
import LifeCycle from "./pages/LifeCycle";
import SearchFilter from "./pages/SearchFilter";
import TwoApi from "./pages/TwoApi";
import Timer from "./pages/Timer";
import Home from "./api/Home";
import Movie from "./Movie/Header";
import Test from "./pages/Test";
import OtpLogin from "./pages/OtpLogin/OtpLogin";
import UseRef from "./pages/hooks/UseRef";
import Child1 from "./pages/hooks/contextApi/Child1";
import UseMemo from "./pages/hooks/UseMemo";
import UseCallback from "./pages/hooks/useCallBack/UseCallback";
import UseReducer from "./pages/hooks/UseReducer";
import ReduxHome from "./pages/Home";
import ProductHome from "./cart-Demo/Home";
import Todo from "./TodoApp/Task";
import Todos from "./pages/Todo/Todos";
import Calculator from "./pages/Calculator";
import SignupPage from "./pages/MuiSignup";
import Dashboard from "./pages/Dashboard";
// import styles from "./assets/appStyle.module.css";

function App() {
  return (
    <>
      <Router>
        {/* <Header /> */}
        <div className='container'>
          <Routes>
            <Route path='/dashboard' element={<Dashboard />}></Route>
            <Route path='/cartdemo' element={<ProductHome />}></Route>
            <Route path='/Calculator' element={<Calculator />}></Route>
            <Route path='/SignupPage' element={<SignupPage />}></Route>

            <Route path='/movie' element={<Movie />}></Route>
            <Route path='/loadmore' element={<LoadMore />}></Route>
            <Route path='/readmore' element={<ReadMore />}></Route>
            <Route path='/darkmode' element={<DarkMode />}></Route>
            <Route path='/LifeCycle' element={<LifeCycle />}></Route>
            <Route path='/twoapi' element={<TwoApi />}></Route>
            <Route path='/timer' element={<Timer />}></Route>
            <Route path='/home' element={<Home />}></Route>
            <Route path='/otp-login' element={<OtpLogin />}></Route>
            <Route path='/test' element={<Test />}></Route>
            <Route path='/ReduxHome' element={<ReduxHome />}></Route>
            <Route path='/todo' element={<Todo />}></Route>
            <Route
              exact
              path='/searchfilter'
              element={<SearchFilter />}
            ></Route>
            <Route path='/todoredux' element={<Todos />}></Route>

            {/* Hooks */}
            <Route path='/useref' element={<UseRef />}></Route>
            <Route path='/contextapi' element={<Child1 />}></Route>
            <Route path='/usememo' element={<UseMemo />}></Route>
            <Route path='/usecallback' element={<UseCallback />}></Route>
            <Route path='/usereducer' element={<UseReducer />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
