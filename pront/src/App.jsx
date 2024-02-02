import {BrowserRouter, Route, Routes} from "react-router-dom";
// import LoginComponent from "./pages/login";
// import SignUpComponent from "./pages/signup";
import Main from "./components/Main";

function App() {
  return (

      <BrowserRouter>
       <Routes>
            <Route path="/" element = {<Main/>}/>
       </Routes>
      </BrowserRouter>
  );
}
//      <Route path="/login" element={<LoginComponent />} />
//      <Route path="/signup" element={<SignUpComponent />} />
export default App;
