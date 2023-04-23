// Importing Styles 
import '../../global.css';
import './gridDeck.css';

// Importing Components
import Card from '../../components/card/card';

// Importing Icons 
import heartIcon from '../../assets/icons-dark/heart.svg';

const GridDeck = ({items}) => {
    return (
        <section id="grid-deck">
            <div className="grid-item-1">
                <span>
                    <h2>56</h2>
                    <h6>Podcasts</h6>
                </span>
                <img src={heartIcon} alt=""/>
            </div>
            {
                items.map((item) => (
                    <Card pic={item.pic} name={item.name} authors={item.authors}/>
                ))
            }
        </section>
    );
}

export default GridDeck;