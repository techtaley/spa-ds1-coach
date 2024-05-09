import './../../styles/main/main.css'
import { FaQuoteLeft } from "react-icons/fa";


function QuoteHero({data}) {
    const { quote, author } = data; 
    
  return (
    <div className="quote-div">
      {/* <h1><span class="big-quote">&lsquo;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1> */}
      <FaQuoteLeft class="sm-quote"/>

      <h3 className="italics quote-text">
        {/* <span class="big-quote">&lsquo;</span> */}
        {quote}
        <hr className="short-hr"/>
        <p className="author">{author}</p>
      </h3>
    </div>
  );
}

export default QuoteHero;
