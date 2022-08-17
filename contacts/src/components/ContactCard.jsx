import React from "react";

class ContactCard extends React.Component{

    constructor(props){
        super(props);

    }
    render(){
        const {name, phone, email} = this.props;
        return(
            <div className="col-12 col-sm-6 col-md-6 col-lg-4">
                <div className="card contact-card">
                    <div className="card-body">
                        <ul>
                            <li>Name: {name}</li>
                            <li>phone: {phone}</li>
                            <li>email: {email}</li>
                        </ul>
                        <div className="card-footer">
                            <button onClick={()=>this.props.onDelete(this.props.id)} className="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
        
    }
}

export default ContactCard;