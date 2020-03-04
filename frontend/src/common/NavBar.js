import React from 'react'
import { Link, withRouter } from 'react-router-dom'

class Navbar extends React.Component {
  state = {
    navbarOpen: false
  }
  toggleNavbar = () => {
    this.setState({ navbarOpen: !this.state.navbarOpen })
  }
  handleLogout = () => {
    // auth.logout()
    this.props.history.push('/')
  }
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      this.setState({ navbarOpen: false })
    }
  }
  render() {
    const { navbarOpen } = this.state
    return (
      <nav className="navbar is-black">
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item is-white" to="/">Home </Link>
            <a className={`navbar-burger is-black ${navbarOpen ? 'is-active' : ''}`} onClick={this.toggleNavbar} >
              <span></span>
              <span></span>
              <span></span>
            </a>
          </div>
          <div className={`navbar-menu ${navbarOpen ? 'is-active' : ''}`}>
            <div className="navbar-end">
              <Link className="navbar-item" to="/trainers">Trainers</Link>
              <Link className="navbar-item" to="/register">Register</Link>
              <Link className="navbar-item" to="/login">Login</Link>
              <a onClick={this.handleLogout} className="navbar-item">Logout</a>
              {/* {auth.isAuthenticated() && <Link className="navbar-item" to="/profile">My Profile</Link>} */}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
export default withRouter(Navbar)


