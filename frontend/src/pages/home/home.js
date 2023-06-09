// Importing Styles 
import '../../global.css';
import './home.css';

// Importing Layouts
import Header from '../../layouts/header/header';
import SwipeDeck from '../../layouts/swipeDeck/swipeDeck';

// Importing Images 
import headerBg from '../../assets/images/header-bg.jpg';

const Home = () => {
    return (
        <main id="home">
            <Header pic={headerBg} title="Podcasts"/>
            <SwipeDeck title="Top Audio Podcasts" items={audioItems}/>
            <SwipeDeck title="Top Video Podcasts" items={audioItems}/>
        </main>
        
    );
}

const audioItems = [
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
    {pic: "https://picsum.photos/id/237/200/300", name: "sds", authors: "das"},
];

export default Home;