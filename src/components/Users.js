// API RECUPERATION DE DONNEES
import React, {Component} from 'react';
import User from "./User"
import DataUsers from "../data/DataUsers"

class Users extends Component {
    state = {
        users:[...DataUsers]
    };
    render() {
        {
            if (this.state.users.length > 0) {
                return (
                    <div>
                        {
                            this.state.users.map((user) => {
                                return <User user ={user}/>
                            })
                        }
                    </div>
                )
            }
        }
        return (
            <div>
                <h1>Not found</h1>
            </div>
        )

    }
}

export default Users;