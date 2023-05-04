// Importing components
import { Header } from "./components/Header";
import { Home } from "./pages/Home";
import { BadSorts } from "./pages/BadSorts"
import { GoodSorts } from "./pages/GoodSorts"
import { Trees } from "./pages/Trees"
import { Spa } from "./pages/Spa"

// React Router
import { Route, Routes } from "react-router-dom"

// Importing CSS file
import './App.css';

const App = () => {
    return (
        <>
        <Header />
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/badsorts" element={<BadSorts />}/>
            <Route path="/goodsorts" element={<GoodSorts />}/>
            <Route path="/trees" element={<Trees />}/>
            <Route path="/spa" element={<Spa />}/>
        </Routes>
        </>
    );
}

export default App;