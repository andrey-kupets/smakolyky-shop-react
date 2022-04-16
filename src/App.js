import './App.css';
import { Login } from "./components";
import {
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Link to='/'>
        <Login/>
      </Link>

      {/*<Routes>    -- for version 6 and up and works incorrect now cause 'Routes' are not exported still*/}
      {/*  <Route path='/'>*/}
      {/*    <Login/>*/}
      {/*  </Route>*/}
      {/*</Routes>*/}
    </div>
  );
}

export default App;
