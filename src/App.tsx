import './App.css'
import NavBar from "./components/NavBar/NavBar.tsx";
import {Route, Routes} from "react-router-dom";
import {Home} from "@mui/icons-material";
import NewMessage from "./containers/NewMessage/NewMessage.tsx";

const App = () => (
    <>
        <NavBar/>
        <Routes>
            <Route path='/' element={(<Home/>)}/>
            <Route path='/add' element={(<NewMessage/>)}/>
            <Route path='*' element={(<h1>Page not found</h1>)}/>
        </Routes>
    </>
);

export default App
