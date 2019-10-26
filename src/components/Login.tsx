import * as React from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../styles/css/login.css';
import { connect } from 'react-redux'
import { LoginAction } from '../redux/actions/login.actions'

interface props {
	LoginAction: Function,
	user: any,
	window: {
		location: any
	}
}

interface state {
	isLoading: boolean,
	email: string,
	password: string
}

class Login extends React.Component<props, state>  {
	constructor(props: any, state: any) {
		super(props);
		this.check();
		this.state = {
			isLoading: false,
			email: '',
			password: ''
		}
	}
	handleChange = (e: any) => {
		// this.setState({ [e.target.name]: e.target.value })
		e.target.name === 'email' ? 
		this.setState({ email: e.target.value})
		:this.setState({ password: e.target.value })
	}

	check = () => {
		if (localStorage.getItem('token') !== null) {
			window.location.assign('/');
		}
	}
	handleSubmit = (e: any) => {
		e.preventDefault();
		this.setState({ isLoading: true })
		const data = {
			email: this.state.email,
			password: this.state.password
		}
		this.props.LoginAction(data)
	}
	handleError = (user:any) => {
		// this.setState({ isLoading: false })

	}

	authenticateUser = (user: any) => {
		localStorage.setItem('token', user.token)
		window.location.assign('/');
	}
	render() {
		const { user } = this.props
		console.log(user)
		if (user.token !== undefined) {
			this.authenticateUser(user)
		}
		 else {
			this.handleError(user)
		}
		return (
			<React.Fragment>
				<div className="login-title">
					<p>Login for better experience</p>
				</div>
				<div className="login-section">
					<form className='login-form' onSubmit={this.handleSubmit}>
						<div className="container">
							<input
								className="login-inputs"
								type="text"
								placeholder="Enter Username"
								name="email"
								required
								onChange={this.handleChange}
							/>
							<input
								className="login-inputs"
								type="password"
								placeholder="Enter Password"
								name="password"
								required
								onChange={this.handleChange}
							/>
							<button className="login-btn" type="submit">
								{ this.state.isLoading ? 'Loading...': 'Login'}
							</button>
							<label>
								<span className='create-account'>
									don't have account <Link to="/signup">create one</Link>
								</span>
							</label>
						</div>
					</form>
				</div>
			</React.Fragment>
		);
	}
}
const mapStateToProps = (state: any) => ({
	user: state.user,
	LoginError: state.loginError
})
export default connect(
	mapStateToProps,
	{ LoginAction }
)(Login);
