// Importing Styles 
import '../../global.css';
import './input.css';

const Input = ({type, name, dummytext}) => {
    return (
        <input className="form-input" type={type} name={name} placeholder={dummytext} required/>
    );
}

export default Input;