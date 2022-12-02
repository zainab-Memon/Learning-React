import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
function App() {
  // ALL OF THIS IS NOW MANAGED IN AUTHCONTEXT COMPONENT
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // useEffect(() => {
  //   const StoredUserLoggedInInfo = localStorage.getItem("isLoggedIn");
  //   if (StoredUserLoggedInInfo === "1") {
  //     setIsLoggedIn(true);
  //   }
  // }, []);
  // const loginHandler = (email, password) => {
  //   // We should of course check email and password
  //   // But it's just a dummy/ demo anyways
  //   //storing this state in local storage or browser
  //   localStorage.setItem("isLoggedIn", "1"); //1 for logged in
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   setIsLoggedIn(false);
  // };
  const ctx = useContext(AuthContext);
  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;