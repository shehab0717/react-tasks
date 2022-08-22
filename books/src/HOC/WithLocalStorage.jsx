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

            const data = localStorage.getItem(key);
            console.log(data);
            const jsonData = JSON.parse(data) ?? [];
            return <WrappedComponent {...this.props} data={jsonData}/>
        }

    }
}


export default withLocalStorage;