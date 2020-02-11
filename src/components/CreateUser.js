import React, { Component } from 'react'
import axios from 'axios'

class CreateUser extends Component {

    state = {
        users: []
    }

    async componentDidMount() {
       const res = await axios.get('http://localhost:4000/api/users')
       this.setState({users: res.data})
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    form user
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.users.map(user =>
                                <li key={user._id} className="list-group-item list-group-item-action">{user.username}</li>)
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default CreateUser