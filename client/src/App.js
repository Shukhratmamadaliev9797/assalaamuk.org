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
import AdminActivities from "./pages/admin/AdminActivities";
import AdminProjects from "./pages/admin/AdminProjects";
import News from "./pages/admin/News";
import Basket from "./pages/Basket";
import Checkout from "./pages/Checkout";
import PaymentSuccess from "./pages/PaymentSuccess";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Activitiy from "./pages/Activitiy";
import Project from "./pages/Project";
import Profile from "./pages/Profile";
import NewsPage from "./pages/NewsPage";
import NewsList from "./pages/NewsList";
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
          component={() => <AdminActivities />}
        />
        <AdminRouter
          path="/admin/projects"
          exact
          component={() => <AdminProjects />}
        />
        <AdminRouter path="/admin/news" exact component={() => <News />} />
        <Route path="/" exact component={Home} />
        <Route path="/basket" exact component={Basket} />
        <Route path="/error" exact component={MainErrorMessage} />
        <Route path="/checkout" exact component={Checkout} />
        <Route path="/paymentSuccess" exact component={PaymentSuccess} />
        <Route path="/projects" exact component={Projects} />
        <Route path="/about" exact component={About} />
        <Route path="/activity/:id" exact component={Activitiy} />
        <Route path="/project/:id" exact component={Project} />
        <Route path="/profile" exact component={Profile} />
        <Route path="/news/:id" exact component={NewsPage} />
        <Route path="/news" exact component={NewsList} />
      </Router>
    </>
  );
}

export default App;
