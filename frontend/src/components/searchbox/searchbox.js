// Importing Styles 
import '../../global.css';
import './searchbox.css';

// Importing Icons 
import searchIcon from '../../assets/icons-dark/search.svg';
import arrowLeftIcon from '../../assets/icons-dark/arrow.svg';


const Searchbox = () => {
    return (
        <div className="search-box">
            <button className="back-btn">
                <img src={arrowLeftIcon} alt=""/>
            </button>
            <input id="search-input" type="text" placeholder="Which podcast you want to listen to?"/>
            <button className="search-btn">
                <img src={searchIcon} alt=""/>Search</button>
        </div>
    );
}

export default Searchbox;