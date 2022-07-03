import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import "./style/style.scss";
import "swiper/css/bundle";
import MainErrorMessage from "./components/MainErrorMessage";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import AdminNav from "./components/AdminNav";
import AdminTopBar from "./components/AdminTopBar";
import Users from "./pages/admin/Users";
import AdminRouter from "./components/AdminRouter";
import Activities from "./pages/admin/Activities";
import Projects from "./pages/admin/Projects";
import News from "./pages/admin/News";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import About from "./pages/About";
function App() {
  const [pathName, setPathName] = useState("");
  const [pathStatus, setPathStatus] = useState(false);

  const userSignIn = useSelector((state) => state.userSignIn);
  const { userInfo } = userSignIn;

  useEffect(() => {
    if (!pathStatus) {
      setPathName(window.location.pathname);
      setPathStatus(true);
    }
  }, [pathStatus, pathName]);

  return (
    <>
      <Router>
        {userInfo?.data.isAdmin && pathName.includes("/admin") ? (
          <>
            <AdminNav />
            <AdminTopBar />
          </>
        ) : (
          <Navbar />
        )}

        <AdminRouter path="/admin/users" exact component={() => <Users />} />
        <AdminRouter
          path="/admin/activities"
          exact
          component={() => <Activities />}
        />
        <AdminRouter
          path="/admin/projects"
          exact
          component={() => <Projects />}
        />
        <AdminRouter path="/admin/news" exact component={() => <News />} />
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
        <Route path="/basket" exact component={Basket} />
        <Route path="/error" exact component={MainErrorMessage} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/paymentSuccess" exact component={PaymentSuccess} />
      </Router>
    </>
  );
}

export default App;
