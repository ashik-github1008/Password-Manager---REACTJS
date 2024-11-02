import './index.css'

const PasswordCard = props => {
  const {passwordDetails, isChecked, deletePasswordCard} = props
  const {username, website, password, id} = passwordDetails

  const onDelete = () => {
    deletePasswordCard(id)
  }

  return (
    <li className="password-list">
      <div className="text-center initial-container">
        <p className="initial mr-2">{username[0]}</p>
      </div>
      <div className="website-name-pwd-container">
        <p className="website mb-0">{website}</p>
        <p className="mb-1">{username}</p>
        {isChecked ? (
          <p className="password">{password}</p>
        ) : (
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
            alt="stars"
            className="star-img w-100"
          />
        )}
      </div>
      <button onClick={onDelete} className="delete-btn" data-testid="delete">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
          alt="delete"
          className="delete-icon"
        />
      </button>
    </li>
  )
}

export default PasswordCard
