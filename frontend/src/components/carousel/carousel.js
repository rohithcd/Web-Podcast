// Importing Styles 
import '../../global.css';
import './carousel.css';



const Carousel = ({cardDetails}) => {
    return (
        <div className="carousal-wrapper">
            <img className="carousal-arrow c-left c-ptr" alt="" />
            <div className="carousal">
                {cardDetails.map((card) => (
                    <Card pic={card.pic} name={card.name} authors={card.authors}/>
                ))}
            </div>
            <img className="carousal-arrow c-right c-ptr"  alt="" />
        </div>
    );
}

const Card = ({pic, name, authors}) => {
    return (
        <div id="card">
            <img src={pic} alt="" />
            <h4>{name}</h4>
            <p>{authors}</p>
        </div>
    );
}

export default Carousel;