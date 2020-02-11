import React, { Component } from 'react'
import {Link} from 'react-router-dom'


class Navigation extends Component {
    render() {
        return (
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
              <Link className="navbar-brand" to="/">Notes App</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" to="/">Notes </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/create">New note</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/user">New user</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        )
    }
}

export default Navigation