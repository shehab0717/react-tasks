import React from "react";
import ContactCard from "./ContactCard";

class ContactsList extends React.Component {

    constructor() {
        super();

        this.state = {
            contacts: [],
            loading: true
        }
        this.onDelete = this.onDelete.bind(this);
    }

    onDelete(id) {
        const newContacts = this.state.contacts.filter(
            (contact) => contact.id != id
        );
        this.setState({contacts: newContacts});
    }
    render() {
        return this.state.loading
            ? (<div>Loading...</div>)
            : (
                <div className="row">
                    {
                        this.state.contacts.map(
                            (contact) => <ContactCard key={contact.id} onDelete={this.onDelete} {...contact} />
                        )
                    }
                </div>
            )
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                this.setState({ loading: false, contacts: data })
            })
    }
}

export default ContactsList;