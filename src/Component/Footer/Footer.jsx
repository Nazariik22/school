import { useSelector } from "react-redux";
import style from './Footer.module.css';
import { NavLink } from "react-router-dom";

const Footer = () => {
    const state = useSelector(state => state.footer);
    return (
        <footer className={style.footer}>
            <section>
                {state.menu.map(item=>
                <div key={item.title}>
                    <h2>{item.title}</h2>
                    <ul>
                        <li>
                            <NavLink>1</NavLink>
                        </li>
                    </ul>
                </div>  
                )}
            </section>
        <p>Сайт розробив {state.admin} 
        Всі права захищені
        </p>
        </footer>
    )
}
export { Footer };