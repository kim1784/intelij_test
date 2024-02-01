import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginComponent from "./pages/login";

function App() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/login" element={<LoginComponent/>}/>
            </Routes>
        </BrowserRouter>
        // <Router>
        //     <Route path="/main" element={</>}/>
            // <Route path="/main" element={</>}/>
        // </Router>
    );
}

export default App;
