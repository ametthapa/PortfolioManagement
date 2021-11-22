import "./App.css";
import { Switch, Route, useHistory, useLocation } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

import SideBar from "./components/sideBar";
import Dashboard from "./components/dashboard";
import List from "./components/list";
import Insert from "./components/insert";
import Delete from "./components/delete";
import Register from "./components/Register";
import Login from "./components/Login";
import Error from "./components/Error";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const localStorageValue = localStorage.getItem("loggedIn");
    if (localStorageValue) {
      history.push(location.pathname);
      setLoggedIn(true);
    } else {
      if (location.pathname !== "/signup") {
        history.push("/signin");
      }
      setLoggedIn(false);
    }
  }, [location.pathname, history]);
  return (
    <div className="grid relative grid-cols-5">
      {loggedIn ? (
        <SideBar className="absolute t-1 b-1 col-span-1" />
      ) : (
        console.log("First Login")
      )}

      <div className="col-span-4">
        <Switch>
          {loggedIn ? (
            <>
              <Route path="/list" exact component={List} />
              <Route path="/insert" exact component={Insert} />
              <Route path="/delete/:stockId" exact component={Delete} />
              <Route path="/" exact component={Dashboard} />
            </>
          ) : (
            <Fragment>
              <Route path="/signin" exact component={Login} />
              <Route path="/signup" exact component={Register} />
            </Fragment>
          )}
          <Route component={Error} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
