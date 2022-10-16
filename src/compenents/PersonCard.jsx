import data from "../data";

const PersonCard = (props) => {
  return (
    (data.slice(props.count, props.count+5).map((item)=>
    {
        const {name,id,image,email,age}=item
        return (
            <div key={id} className="container">
              <div className="image">
                  <img src={image} alt="" />
              </div>
              <div className="title">
                  <p className="name">{name}</p>
                  <p className="age">Age: {age}</p>
                  <a href={email} className="email">{email}</a>
              </div>
            </div>
                ) 
    }
    ))
  )
}

export default PersonCard;