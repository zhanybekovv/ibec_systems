import React from 'react';
import axios from 'axios';
import Card from '../Card/Card';
import { EmployeeImg } from '../../static/static';

type PeopleState = {
    
}

interface Person {
    name?: string;
  }
  
class Contacts extends React.Component<PeopleState, any> {

    constructor(props: PeopleState){
        super(props);
        this.state = {}
    }
    
    instance = axios.create({
        withCredentials: true,
        baseURL: "https://jsonplaceholder.typicode.com/users"
    })

    getUser(){
        this.instance.get("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                this.setState(response.data)
            })
    }

    componentDidMount(){
        this.getUser()
    }

    render(){
        const contacts = this.state;
      return (
        <div className="mt-4">
            { Object.keys(contacts).map( id => 
                        <Card name={contacts[id].name!} 
                            email={contacts[id].email!} 
                            phone={contacts[id].phone!} 
                            adress={contacts[id].address.street + " " + contacts[id].address.suite + " " + contacts[id].address.city} 
                            zipcode = {contacts[id].address.zipcode} 
                            height="200px" 
                            width="100%" 
                            heightImg="198px" 
                            widthImg="200px" 
                            logo={EmployeeImg} 
                            hr={false}/> 
                        ) }
        </div>
    );
    }
}

export default Contacts;
