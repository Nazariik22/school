import { useSelector } from "react-redux";
import style from './Header.module.css';
import { NavLink } from "react-router-dom";

const Header = () => {
    const state = useSelector(state => state.header);
    return (
        <header>
            <div className="structura">
                {state.structura.map(item =>
                    <span  key={item.title}>
                        {item.title}
                    </span>
                )}
            </div>
            <ul>
            {state.menu.map(item =>
                    <li key={item.title}>
                     <NavLink to={item.root}>{item.title}</NavLink>   
                    </li>
                )}
                <li>+</li>
            </ul>
        </header>
    )
}
export { Header };