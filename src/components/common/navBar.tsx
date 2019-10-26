import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import '../../styles/css/navBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUser } from '@fortawesome/free-solid-svg-icons';

interface props {

}

interface state {
}

class NavBar extends Component<props, state> {
    constructor(props: Readonly<props>) {
        super(props);
        this.state = {
            search: '',
        }
    }

     handleChange = (e:any) => {
    this.setState({ search: e.target.value });
  };

    search = (event:any) => {
        event.preventDefault();
    }
    render() {
        return (
            <div className="topnav" id="myTopnav">
                <Link to="/" id='brand'>MEYLLOS SCHOOL</Link>
                <div className='menu'>
                    <div className='search-field'>
                        <form className='search_form' onSubmit={this.search}>
                            <input className='search' type='text' placeholder='search' onChange={this.handleChange} />
                            <button className='search-btn' type='submit' value='search'>
                                <FontAwesomeIcon icon={faSearch} />
                            </button>
                        </form>
                    </div>
                    <Link to="/login">
                        <FontAwesomeIcon icon={faUser} />
                    </Link>
                </div>
            </div>
        );
        }
    }

export default NavBar;