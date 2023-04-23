// Importing Styles 
import '../../global.css';
import './searchbox.css';

// Importing Icons 
import searchIcon from '../../assets/icons-dark/search.svg';


const Searchbox = () => {
    return (
        <div className="search-box">
            <button>Back Button</button>
            <input id="search-input" type="text" placeholder="Which podcast you want to listen to?"/>
            <button className="search-btn">
                <img src={searchIcon} alt=""/>Search</button>
        </div>
    );
}

export default Searchbox;