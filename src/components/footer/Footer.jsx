import { NavLink, Link } from 'react-router-dom';
import logoImg from '/assets/organic-6074992_640.png';
import EmailSubscribe from './../../components/subscriber/EmailSubscribeForm'
import './footer.css';
import Nav from '../nav/Nav';
import EmailSubscribeForm from './../../components/subscriber/EmailSubscribeForm';
//import Box from './../../components/hero/Box';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-top">          
        <div className="footer-div nav-logo">
          <div className="column_div">
            
            <div className="row_div">
              {/* <Link to="/"><img src={logoImg} /></Link>
              <Link to="/" className="logo-link"><h1>CoachMe</h1></Link> */}
              <a href="#home" ><img src={logoImg} /></a>
              <a href="#home" className="logo-link"><h1>CoachMe</h1></a>    
            </div>

            <div className="row_div">
              {/* <Link className="footer-link" to="/about-us">about</Link>
              <Link className="footer-link" to="/contact-us">contact</Link>
              <Link className="footer-link" to="/our-programs">programs</Link> 
              */}

              <a href="#services" className="footer-link">services</a>              
              <a href="#about" className="footer-link">about</a>              
              <a href="#contact" className="footer-link">contact</a>              
                  
            </div>              
          </div>        
      </div>  

      <div className="footer-div">
        <EmailSubscribeForm />
      </div>

        <div className="footer-div">
          <Link className="footer-link" to="/terms">terms</Link>
          <Link className="footer-link" to="/privacy">privacy</Link>

          {/* 
          <Link className="footer-link" to="/member">Become a member</Link>
          <Link className="footer-link" to="/volunteer">Volunteer</Link>
          <Link className="footer-link" to="/get-involved">Get Involved</Link>
          <Link className="footer-link" to="/donate">Donate</Link>
          <Link className="footer-link" to="/news">News</Link>
          <Link className="footer-link" to="/events">Events</Link> 
          */}
        </div>
        {/* <div className="footer-div">
          <a>LinkedIn</a>
          <a>Facebook</a>
          <a>Instagram</a>
          <a>Discord</a>
          <a>YouTube</a>                    
        </div> 
        */}
      </div>

      <div className="footer-bottom">
        &copy; {currentYear}{' '}<Link className="footer-link" to="https://expansivedesigns.com">Expansive Designs</Link>
      </div>
    </footer>
  )
}
