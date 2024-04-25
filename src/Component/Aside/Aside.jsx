import { useSelector } from "react-redux";
import style from './Aside.module.css';
import { NavLink } from "react-router-dom";
import img from './../../img/logo.JPG';
const Aside = () => {
    const state = useSelector(state => state.aside);
    return (
        <aside className={style.aside}>
            <img src={img} alt="" />
            <h2>Меню:</h2>
            {state.map(item =>
                <NavLink to={item.root} key={item.title}>{item.title}</NavLink>
            )}
            <button>+</button>

        </aside>
    )
}
export { Aside };