import { useSelector } from "react-redux";
import style from './Aside.module.css';
import { NavLink } from "react-router-dom";

const Aside = () => {
    const state = useSelector(state => state.aside);
    //console.log(state)
    return (
        <aside>
            <h2>Меню</h2>
            {state.map(item =>
                <NavLink to={item.root} key={item.title}>{item.title}</NavLink>
            )}
            <button>+</button>

        </aside>
    )
}
export { Aside };