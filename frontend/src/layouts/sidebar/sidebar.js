// Importing Packages
import {Link} from 'react-router-dom';

// Importing Styles 
import '../../global.css';
import './sidebar.css';

const Sidebar = () => {
    return (
        <aside id="sidebar">
            <ul>
                <SideItem icon="" itemName="Home"/>
                <SideItem icon="" itemName="Search"/>
                <SideItem icon="" itemName="My Library"/>
            </ul>
            <ul>
                <SideItem icon="" itemName="Light Mode"/>
                <SideItem icon="" itemName="Logout"/>
            </ul>
        </aside>
    );
}

export default Sidebar;

const SideItem = ({icon, itemName}) => {
    return (
        <Link to={itemName.toLowerCase()}>
            <img src={icon} alt=""/>
            <span>{itemName}</span>
        </Link>
    );
}