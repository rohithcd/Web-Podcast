// Importing Styles 
import '../../global.css';

// Importing Layouts
import SwipeDeck from '../../layouts/swipeDeck/swipeDeck';


const Search = () => {
    return (
        <main id="search">
            <SwipeDeck title="Recent Searches" items={audioItems}/>
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

export default Search;