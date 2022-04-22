import './App.css';
import { HeaderBlock, Login, Register } from "./components";
import {
  Switch,
  Route
} from "react-router-dom";
import { EmailConfirmer } from "./helper-copmonents";

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact>
          <HeaderBlock/>
        </Route>

        <Route path='/login'>
          <Login/>
        </Route>

        <Route path='/register'>
          <Register/>
        </Route>

        <Route path='/email/confirm/:token' component={EmailConfirmer}/>
      </Switch>

      {/*<Routes>    -- for version 6 and up and works incorrect now cause 'Routes' are not exported still*/}
      {/*  <Route path='/'>*/}
      {/*    <Login/>*/}
      {/*  </Route>*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
