// Importing Styles 
import '../../global.css';
import './input.css';

const Input = ({type, dummytext}) => {
    return (
        <input id="form-input" type={type} placeholder={dummytext} required/>
    );
}

export default Input;