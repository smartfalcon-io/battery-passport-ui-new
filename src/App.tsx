import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import SignIn from "./components/SignIn";
import RegisteredUser from "./components/RegisteredUsers";
import VerifiableCredentials from "./components/VerifiableCredentials";
import PassportDetails from "./components/PassportDetails";
import Starter from "./components/Starter";
import Main from "./components/Main";
import Issuer from "./components/Issuer";

// import BatteryPassport from "./components/BatteryPassport";
import "./App.css";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/home" element={<Home />} />
          <Route path="/starter" element={<Starter />} />
          <Route path="/issuer" element={<Issuer />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/passport-details" element={<PassportDetails />} />
          <Route path="/registered-user" element={<RegisteredUser />} />
          <Route
            path="/verifiable-credentials"
            element={<VerifiableCredentials />}
          />
        </Routes>
      </>
    </Router>
  );
};

export default App;
