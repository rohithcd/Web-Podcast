// Importing Packages
import {Link, useLocation} from 'react-router-dom';

// Importing Styles 
import '../../global.css';
import './sidebar.css';

// Importing SVG Icons 
import homeIcon from '../../assets/icons-dark/home.svg';
import searchIcon from '../../assets/icons-dark/search.svg';
import libraryIcon from '../../assets/icons-dark/book.svg';
import lightModeIcon from '../../assets/icons-dark/light_mode.svg';
import LoginIcon from '../../assets/icons-dark/login.svg';

const sidebarTopItems = [
    {
        icon: homeIcon,
        itemName: "Home",
        path: "/"
    },
    {
        icon: searchIcon,
        itemName: "Search",
        path: "/search"
    },
    {
        icon: libraryIcon,
        itemName: "My Library",
        path: "/library"
    }

];

const sidebarBottomItems = [
    {
        icon: lightModeIcon,
        itemName: "Light Mode",
        path: "/light-mode"
    },
    {
        icon: LoginIcon,
        itemName: "Login",
        path: "/login"
    }
]

const Sidebar = () => {

    return (
        <aside id="sidebar">
            <ul>
                {
                    sidebarTopItems.map((item, index) => (
                        <SideItem key={index} icon={item.icon} itemName={item.itemName} path={item.path}/>
                    ))
                }

            </ul>
            <ul>
                {
                    sidebarBottomItems.map((item, index) => (
                        <SideItem key={index} icon={item.icon} itemName={item.itemName} path={item.path}/>
                    ))
                }
            </ul>
        </aside>
    );
}

export default Sidebar;

const SideItem = ({icon, itemName, path}) => {
    const location = useLocation();
    
    return (
        <Link to={path}>
            <img src={icon} className={(path === location.pathname) ? "item-active" : ""} alt=""/>
            <span>{itemName}</span>
        </Link>
    );
}