import React from "react";


class AddContacts extends React.Component{
     state = {
         name: "",
         email: "",
         phone: "",
     }
     add = (e) => {
         e.preventDefault();
         if(this.state.name === "" || this.state.email === "" || this.state.phone === ""){
             alert('all the fields are mandetory');
             return

         }
         this.props.addContactHandler(this.state);
         this.setState({ name: "", email: "", phone: ""});
     }
    
    render(){

        return(
            <div className='ui main container'>
            <h2>Add Contact</h2>
            <form className="ui form" onSubmit={this.add}>
                <div className="field">
                    <label>Name</label>
                    <input type='text' name='name' placeholder='Name' value={this.state.name} onChange={ (e) => this.setState({name: e.target.value})} />
                </div>
                <div className="field">
                    <label>Email</label>
                    <input type='text' name='email' placeholder='Email' value={this.state.email} onChange={ (e) => this.setState({email: e.target.value})} />
                </div>
                <div className="field">
                    <label>Phone</label>
                    <input type='text' name='phone' placeholder='phone' value={this.state.phone} onChange={ (e) => this.setState({phone: e.target.value})} />
                </div>
                <div className="field">
                   <button type="submit" className="ui blue button">Add</button>
                </div>
            </form>

            </div>
        )
    }
    
}

export default AddContacts;