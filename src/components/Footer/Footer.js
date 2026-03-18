import "./style.css"
import { NavLink } from "react-router-dom";

const Footer = () => {
    return ( 
        <footer className="footer">
            <div  className="footer__wrapper">
                <ul className="txt">
                    <div><NavLink to="/OrderList" className="point">Мои заказы</NavLink></div>
                    <div><NavLink to="/" className="point">О нас</NavLink></div>
                    <div><NavLink to="/OrderAdd" className="point">Сделать заказ</NavLink></div>
                </ul>
                <ul className="social">
                    <a href="https://vk.com/a_z_i_m_y_t" target="_blank" rel="noreferrer">
                        <svg className="social__item"  xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256" ><g strokeWidth="1" strokeLinecap="butt"><g transform="scale(5.12,5.12)">
                            <path id="social__item" d="M41,4h-32c-2.76,0 -5,2.24 -5,5v32c0,2.76 2.24,5 5,5h32c2.76,0 5,-2.24 5,-5v-32c0,-2.76 -2.24,-5 -5,-5zM37.72,33l-3.73,-0.01c0,0 -0.08,0.01 -0.21,0.01c-0.3,0 -0.92,-0.08 -1.65,-0.58c-1.31,-0.91 -2.56,-3.17 -3.55,-3.17c-0.07,0 -0.13,0.01 -0.19,0.03c-0.86,0.27 -1.12,1.13 -1.12,2.18c0,0.37 -0.26,0.54 -0.96,0.54h-1.93c-2.16,0 -4.25,-0.05 -6.6,-2.62c-3.46,-3.79 -6.7,-10.53 -6.7,-10.53c0,0 -0.18,-0.39 0.01,-0.62c0.18,-0.21 0.6,-0.23 0.76,-0.23c0.04,0 0.06,0 0.06,0h4c0,0 0.37,0.07 0.64,0.27c0.23,0.17 0.35,0.48 0.35,0.48c0,0 0.68,1.32 1.53,2.81c1.43,2.46 2.2,3.28 2.75,3.28c0.09,0 0.18,-0.02 0.27,-0.07c0.82,-0.45 0.58,-4.09 0.58,-4.09c0,0 0.01,-1.32 -0.42,-1.9c-0.33,-0.46 -0.96,-0.59 -1.24,-0.63c-0.22,-0.03 0.14,-0.55 0.62,-0.79c0.62,-0.3 1.65,-0.36 2.89,-0.36h0.6c1.17,0.02 1.2,0.14 1.66,0.25c1.38,0.33 0.91,1.62 0.91,4.71c0,0.99 -0.18,2.38 0.53,2.85c0.05,0.03 0.12,0.05 0.21,0.05c0.46,0 1.45,-0.59 3.03,-3.26c0.88,-1.52 1.56,-3.03 1.56,-3.03c0,0 0.15,-0.27 0.38,-0.41c0.22,-0.13 0.22,-0.13 0.51,-0.13h0.03c0.32,0 3.5,-0.03 4.2,-0.03h0.08c0.67,0 1.28,0.01 1.39,0.42c0.16,0.62 -0.49,1.73 -2.2,4.03c-2.82,3.77 -3.14,3.49 -0.8,5.67c2.24,2.08 2.7,3.09 2.78,3.22c0.93,1.54 -1.03,1.66 -1.03,1.66z"></path></g></g>
                        </svg>
                    </a>
                    <a href="https://t.me/Egor_Craftman" target="_blank" rel="noreferrer">
                        <svg className="social__item" xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256" ><g strokeWidth="1" strokeLinecap="butt"><g transform="scale(5.12,5.12)">
                            <path id="social__item" d="M46.137,6.552c-0.75,-0.636 -1.928,-0.727 -3.146,-0.238h-0.002c-1.281,0.514 -36.261,15.518 -37.685,16.131c-0.259,0.09 -2.521,0.934 -2.288,2.814c0.208,1.695 2.026,2.397 2.248,2.478l8.893,3.045c0.59,1.964 2.765,9.21 3.246,10.758c0.3,0.965 0.789,2.233 1.646,2.494c0.752,0.29 1.5,0.025 1.984,-0.355l5.437,-5.043l8.777,6.845l0.209,0.125c0.596,0.264 1.167,0.396 1.712,0.396c0.421,0 0.825,-0.079 1.211,-0.237c1.315,-0.54 1.841,-1.793 1.896,-1.935l6.556,-34.077c0.4,-1.82 -0.156,-2.746 -0.694,-3.201zM22,32l-3,8l-3,-10l23,-17z"></path></g></g>
                        </svg>
                    </a>
                    <NavLink to="/">
                        <svg className="social__item"  xmlns="https://www.w3.org/2000/svg" x="0px" y="0px" width="25" height="25" viewBox="0,0,256,256" ><g strokeWidth="1" strokeLinecap="butt"><g transform="scale(5.12,5.12)">
                            <path id="social__item" d="M25,2C12.297,2,2,12.297,2,25s10.297,23,23,23s23-10.297,23-23S37.703,2,25,2z M25,11c1.657,0,3,1.343,3,3s-1.343,3-3,3 s-3-1.343-3-3S23.343,11,25,11z M29,38h-2h-4h-2v-2h2V23h-2v-2h2h4v2v13h2V38z"></path></g></g>
                        </svg>
                    </NavLink>
                </ul>
            </div>
            <div className="copyright">
                © 2025 DaryaFrontDev.github.io
            </div>
        </footer>
     );
}
 
export default Footer;