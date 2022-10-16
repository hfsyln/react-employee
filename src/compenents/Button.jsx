
const Button = ({clickFunc}) => {

  const değiştir = (e) => {
    clickFunc(e.target.value)
  }

  return (
    <div>
        <button onClick={değiştir} value="prev">Prev</button>
        
        <button onClick={değiştir} value="next">Next</button>
    </div>
  )
}

export default Button;