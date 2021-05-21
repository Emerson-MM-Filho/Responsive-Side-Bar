import './asideButton.css'

function button({icon, text}) {
  return (
    <button>
      {icon}
      <p>{text}</p>
    </button>
  )
}

export default button