// Importing Styles
import '../../global.css';
import './card.css';


const Card = ({pic, name, authors}) => {
    return (
        <div id="card">
            <img src={pic} alt="" />
            <h4>{name}</h4>
            <p>{authors}</p>
        </div>
    );
}

export default Card;
