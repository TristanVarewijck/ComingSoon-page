import "./App.scss";
import { Route } from "react-router-dom";
import Thankyou from "./components/Pages/Thankyou";
import ComingSoon from "./components/Pages/ComingSoon";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={ComingSoon} />
      {/* SEND FORM REDIRECT */}
      <Route path="/Thankyou" component={Thankyou} />
    </div>
  );
}

export default App;
