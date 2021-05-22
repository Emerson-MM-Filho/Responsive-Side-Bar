import './asideButton.css'

function button({icon, text}) {
  return (
    <button className="asideButton">
      {icon}
      <p>{text}</p>
    </button>
  )
}

export default button