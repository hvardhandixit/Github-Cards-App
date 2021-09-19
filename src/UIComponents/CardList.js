import React from "react";
import Card from "./Card";

class CardList extends React.Component{
    // constructor(props){
    //     super(props);
    // }
    render(){
        let carditems = this.props.carditems;
        return(
            <div className='cards-container'>
                {carditems.map((profile, index) => <Card cardDetails={profile} key={index}/>)}
            </div>
            
        )
    }
}

export default CardList;