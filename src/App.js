import "./App.css";
import { Switch, Route } from "react-router-dom";

import SideBar from "./components/sideBar";
import Dashboard from "./components/dashboard";
import List from "./components/list";
import Insert from "./components/insert";
import Delete from "./components/delete";

function App() {
  return (
    <div className="grid relative grid-cols-5">
      <SideBar className="absolute t-1 b-1 col-span-1" />
      <div className="col-span-4">
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/list" exact component={List} />
          <Route path="/insert" exact component={Insert} />
          <Route path="/delete/:stockId" exact component={Delete} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
