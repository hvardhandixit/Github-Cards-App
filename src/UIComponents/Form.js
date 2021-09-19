import React from 'react';
import axios from 'axios';
class Form extends React.Component{
    constructor(){
        super();
        this.state = {inputValue : ''};
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        // alert('Card added - '+this.state.inputValue);
        const resp = await axios.get(`https://api.github.com/users/${this.state.inputValue}`);
        this.props.onSubmit(resp.data);
        this.setState({ inputValue: '' });
    }
    handleChange = (e) => {
        this.setState({inputValue : e.target.value});
    }
    render(){
        return(
            <div className='form-container'>
                <form className="inputForm">
                    <input type="text" onChange={this.handleChange}/>
                    <button onClick={this.handleSubmit}>Add Card</button>
                </form>
            </div>
        )
    }
}

export default Form;