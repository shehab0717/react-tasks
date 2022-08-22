import React from "react";

function withLocalStorage(WrappedComponent, key){


    return class extends React.Component{

        constructor(props){
            super(props);
            this.state={
                data: []
            }

        }
        render(){

            const data = localStorage.getItem('books');
            const jsonData = JSON.parse(data) ?? [];
            const filteredBooks = jsonData.filter(book=>book.list == key);
            return <WrappedComponent {...this.props} data={filteredBooks}/>
        }

    }
}


export default withLocalStorage;