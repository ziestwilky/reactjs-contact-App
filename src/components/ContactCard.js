import React from "react";
import addressbook from "../images/addressbook.png";

const ContactCard = (props) => {
    const {id, name, email,phone} = props.contact;
    
    return(
    <div className="item">
    <img alt='addressbook' className="ui avatar image " src={addressbook} />
    <div className="content">

        <div className="header">{name}</div>
        <div>{email}</div>
        <div>{phone}</div>
        <div className="id">{id}</div>
    </div>
    <i className="trash alternate outline icon "  onClick={()=> props.clickHandler(id)}></i>
     </div>
    )
}

export default ContactCard;