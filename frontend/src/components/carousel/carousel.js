// Importing Styles 
import '../../global.css';
import './carousel.css';

// Importing Components
import Card from '../card/card';

// Importing Icons 
import arrowLeftIcon from '../../assets/icons-dark/arrow.svg';


const Carousel = ({cardDetails}) => {
    return (
        <div className="carousal-wrapper">
            <img className="carousal-arrow c-left c-ptr" src={arrowLeftIcon} alt="" />
            <div className="carousal">
                {cardDetails.map((card) => (
                    <Card pic={card.pic} name={card.name} authors={card.authors}/>
                ))}
            </div>
            <img className="carousal-arrow c-right c-ptr" src={arrowLeftIcon}  alt="" />
        </div>
    );
}

export default Carousel;