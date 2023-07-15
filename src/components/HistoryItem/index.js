import './index.css'

const HistoryItem = props => {
  const {historyDetails, deleteHistory} = props
  const {timeAccessed, logoUrl, title, domainUrl, id} = historyDetails

  const onDelete = () => {
    deleteHistory(id)
  }

  return (
    <li className="history-items">
      <p className="time">{timeAccessed}</p>
      <div className="items-container">
        <div className="domain-details">
          <img src={logoUrl} className="logo" alt="domain logo" />
          <div className="details">
            <p className="title">{title}</p>
            <p className="domain">{domainUrl}</p>
          </div>
        </div>
        <button
          type="button"
          className="delete-button"
          onClick={onDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            className="delete"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
