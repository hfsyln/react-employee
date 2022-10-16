
const Button = ({clickFunc}) => {

  const değiştir = (e) => {
    clickFunc(e.target.value)
  }

  return (
    <div className="btncnt">
        <button onClick={değiştir} value="prev">Prev</button>
        
        <button onClick={değiştir} value="next">Next</button>
    </div>
  )
}

export default Button;