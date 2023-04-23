// Importing Styles 
import '../../global.css';
import './header.css';

const Header = ({pic, title}) => {
    return (
        <section id="header">
            <figure className="figure">
                <img src={pic} alt="" />
            </figure>
            <h1 className="title">{title}</h1>
        </section>
    );
}

export default Header;