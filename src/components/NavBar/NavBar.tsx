import "./NavBar.scss";
import { FaBookOpenReader, FaMoon, FaSun } from "react-icons/fa6";
import { useThemeContext } from "../../context/ThemeContext";
export default function NavBar() {
    const { theme, handleThemeChangeClick } = useThemeContext();
    return (
        <nav>
            <div className="nav-bar-container">
                <section className="seciton-one">
                    <FaBookOpenReader />
                    <h1>BOOKS FINDER</h1>
                </section>
                <section className="section-two">
                    {theme === "light" ? <FaMoon onClick={() => handleThemeChangeClick("dark")} /> : <FaSun onClick={() => handleThemeChangeClick("light")} />}
                </section>
            </div>
        </nav>
    );
}
