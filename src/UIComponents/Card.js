import React from "react";

class Card extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        let username = this.props.cardDetails.name;
        let company = this.props.cardDetails.company;
        let avatar = this.props.cardDetails.avatar_url;
        return(
            <div className='github-profile'>
                <div>
                    <img src={avatar} alt='think github picture!' />
                </div>
                <div className='info'>
                    <div className='name'>{username}</div>
                    <div className='company'>{company}</div>
                </div>
            </div>
        )
    }
}

export default Card;