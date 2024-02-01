import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./pages/login";
import SignUpComponent from "./pages/signup";

function App() {
  return (
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
            <Route path="/login" element={<LoginComponent />} />
            <Route path="/signup" element={<SignUpComponent />} />
            <Route path="/" element={}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
