import { useState } from "react";
import "./App.scss";
import BooksList from "./components/BooksList/BooksList";
import NavBar from "./components/NavBar/NavBar";
import SearchFrom from "./components/SearchcForm/SearchFrom";
import Footer from "./components/Footer/Footer";

function App() {
    const [searchTerm, setSearchTerm] = useState<string>("React Js");
        
    return (
        <>
            <div className="app-container">
                <NavBar />
                <SearchFrom setSearchTerm={setSearchTerm}/>
                <BooksList searchTerm={searchTerm} />
                <Footer />
            </div>
        </>
    );
}

export default App;
