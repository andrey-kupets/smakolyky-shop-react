import './App.css';
import { HeaderBlock, Login, Register } from "./components";
import {
  Link,
  // Switch,
  // Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <HeaderBlock/>
      <Link to='/'>
        <Login/>
      </Link>
      <Link to='/register'>
        <Register/>
      </Link>

      {/*<Switch>*/}
      {/*  <Route path='/'>*/}
      {/*    <Login/>*/}
      {/*  </Route>*/}
      {/*</Switch>*/}

      {/*<Routes>    -- for version 6 and up and works incorrect now cause 'Routes' are not exported still*/}
      {/*  <Route path='/'>*/}
      {/*    <Login/>*/}
      {/*  </Route>*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
