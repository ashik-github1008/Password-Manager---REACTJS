import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import PasswordCard from '../PasswordCard/index'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    passwordList: [],
    isChecked: false,
    searchInput: '',
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  handleCheckboxChange = event => {
    this.setState({isChecked: event.target.checked})
  }

  onAddPassword = event => {
    event.preventDefault()
    console.log('add-btn-click')
    const {website, username, password, passwordList} = this.state
    const newPassword = {
      id: uuidv4(),
      website,
      username,
      password,
    }

    this.setState(prevState => ({
      passwordList: [...prevState.passwordList, newPassword],
      website: '',
      username: '',
      password: '',
    }))
  }

  deletePasswordCard = id => {
    const {passwordList} = this.state
    const filteredPasswordList = passwordList.filter(each => each.id !== id)

    this.setState({passwordList: filteredPasswordList})
  }

  onChangeWebsite = event => {
    this.setState({website: event.target.value})
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  render() {
    const {website, username, password, passwordList, isChecked, searchInput} =
      this.state
    // console.log(passwordList)
    const searchResults = passwordList.filter(eachList =>
      eachList.website.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo mb-5"
        />
        <div className="add-password-container">
          <form className="form-container" onSubmit={this.onAddPassword}>
            <h1 className="form-heading mb-4">Add New Password</h1>
            <div className="input-container mb-4">
              <div className="input-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                  alt="website"
                  className="input-logo"
                />
              </div>
              <input
                placeholder="Enter Website"
                className="input"
                value={website}
                onChange={this.onChangeWebsite}
              />
            </div>
            <div className="input-container mb-4">
              <div className="input-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                  alt="username"
                  className="input-logo"
                />
              </div>
              <input
                placeholder="Enter Username"
                className="input"
                value={username}
                onChange={this.onChangeUsername}
              />
            </div>
            <div className="input-container">
              <div className="input-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                  alt="password"
                  className="input-logo"
                />
              </div>
              <input
                placeholder="Enter Password"
                className="input"
                value={password}
                onChange={this.onChangePassword}
                type="password"
              />
            </div>
            <div className="add-btn-container mt-4">
              <button className="add-btn" type="submit">
                Add
              </button>
            </div>
          </form>
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            alt="password manager"
            className="password-manager-img"
          />
        </div>
        <div className="passwords-container mt-3">
          <div className="password-count-search-container">
            <div className="password-count-container">
              <h1 className="your-password-text mr-3">Your Passwords</h1>
              <p className="password-count">{passwordList.length}</p>
            </div>
            <div className="search-input-container">
              <div className="input-logo-container search-logo-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                  alt="search"
                  className="input-logo"
                />
              </div>
              <input
                placeholder="Search"
                className="input search-input"
                onChange={this.onChangeSearchInput}
                value={searchInput}
                type="search"
              />
            </div>
          </div>
          <div className="hr-line-checkbox-container">
            <hr className="hr-line" />
            <div className="showpassword-checkbox-container">
              <input
                type="checkbox"
                className="checkbox mr-2"
                id="passwordCheckbox"
                onChange={this.handleCheckboxChange}
              />
              <label className="show-passwords-text" htmlFor="passwordCheckbox">
                Show passwords
              </label>
            </div>
          </div>
          {searchResults.length === 0 ? (
            <div className="nopassword-img-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                alt="no passwords"
                className="no-password-img mb-3"
              />
              <p className="your-password-text">No Passwords</p>
            </div>
          ) : (
            <ul className="password-list-container">
              {searchResults.map(eachPassword => (
                <PasswordCard
                  key={eachPassword.id}
                  passwordDetails={eachPassword}
                  isChecked={isChecked}
                  deletePasswordCard={this.deletePasswordCard}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}

export default PasswordManager
