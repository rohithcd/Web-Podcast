// Importing Styles 
import '../../global.css';

// Importing Layouts
import GridDeck from '../../layouts/gridDeck/gridDeck';
import Header from '../../layouts/header/header';

// Importing Images 
import headerBg from '../../assets/images/header-bg.jpg';

const Library = () => {
    return (
        <main id="library">
            <Header pic={headerBg} title="My Library"/>
            <GridDeck items={audioItems}/>
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

export default Library;