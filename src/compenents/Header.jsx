const Header = (props) => {
  return (
    <div className='header'>
        
        <h1>Employee List</h1>
        
        <p>(Employees {props.count + 1} to {props.count + 5})</p>
       
    </div>
  );
};

export default Header;