import React, { Component, Fragment } from 'react';
import '../styles/css/profile.css';
import NavBar from './common/navBar';

interface props {

}
class Login extends Component<props> {
	constructor(props: Readonly<props>) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<Fragment>
				<NavBar />
			</Fragment>
		);
	}
}

export default Login;
