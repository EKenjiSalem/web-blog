import "../../App.css";
import main from "../../images/programming.jpg";

const Header = () => {
  return (
    <div className="header">
     <div className="header-title">
      <span className="lg-title"> <span className="code-title"> Coder </span> Life </span>
    </div>
      <img className="header-img" src={main} alt="" /> 
      {/* <h1 className="main-featured"> Featured Post</h1> */}
    </div>
  )
}

export default Header