import React,{Component} from 'react'
import logo3 from '../logo3.png'


export default class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state={pageTitle:"Dashboard"};
    }
    logout(){
      sessionStorage.clear();
      window.location="/login";
    }
    
    render(){
        return(
            <>
            <div>
            <h3>{this.state.pageTitle}</h3>  

            <div className='container2' >
            <a href="/" className='brand-logo '><img className="logo" src={logo3} /></a>
            <p>Welcome, {sessionStorage.getItem("username")}</p>             
  <div className='user-image-sec'>
  <div className='userImage'>
    
            <img className='sidenav_image' src='assets/images/MYPIC.png'/>
  </div>
  </div>
  
  <ul className='nav-menu2'>
  <li> <a href="/"><i className='fa fa-home'></i> Home</a></li>
  <li> <a href="/dashboard"><i className='fa fa-tachometer'></i> Dashboard</a></li> 
    <li><a href='/login'><i className='fa fa-user'></i> Login</a></li>
    <li><a href='/signup'><i className='fa fa-book'></i> Signup</a></li>
    <li><a onClick={this.logout}><i className='fa fa-unlock'></i> Logout</a></li>
  </ul>
  </div>          </div>

  <div className="container">
      <div className="row2">
        <div className="col-lg-3">
          <div className="service-item first-service">
            <div className="icon"></div>
            <h4></h4>
            <p></p>
            <div className="text-button">
              <a href="#">View Resume  <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item second-service">
            <div className="icon"></div>
            <h4></h4>
            <p></p>
            <div className="text-button">
              <a href="#">View Resume <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item third-service">
            <div className="icon"></div>
            <h4></h4>
            <p> <a rel="nofollow" href="https://paypal.me/templatemo" target="_blank"></a></p>
            <div className="text-button">
              <a href="#"> View Resume <i className="fa fa-arrow-right"></i></a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="service-item fourth-service">
            <div className="icon"></div>
            <h4> </h4>
            <p></p>
            <div className="text-button">
             <a href="#"> Add Resume  <i className="fa fa-view"></i></a>
              
              <a href="#"> Download Resume <i className="fa fa-download"></i></a>
            
            </div>
          </div>
        </div>
      </div>
    </div>
  
            </>
        );
    }
}