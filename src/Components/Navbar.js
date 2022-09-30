import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
    render() {
        return (
            <div style={{display:'flex',padding:'0.5'}} className="navbar navbar-expand-lg navbar-dark bg-dark">
                <Link to="/" style={{textDecoration:'none'}}><h1 style={{marginTop:'1rem',marginLeft:'1rem'}} className="text-white bg-dark">Movies App</h1></Link>
                <Link to="/favourites" style={{textDecoration:'none'}}><h2 style={{marginLeft:'2rem',marginTop:'1.5rem'}} className="text-white bg-dark">Favourites</h2></Link>
                
                
            </div>
        )
    }
}
