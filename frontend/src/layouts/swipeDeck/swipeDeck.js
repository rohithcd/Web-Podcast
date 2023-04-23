// Importing Styles 
import '../../global.css';
import './swipeDeck.css';

// Importing Components
import Carousel from '../../components/carousel/carousel';


const SwipeDeck = ({title, items}) => {
    return (
        <section id="swipe-deck">
            <h2 className="title">{title}</h2>
            <Carousel cardDetails={items}/>
        </section>
    );
}

export default SwipeDeck;