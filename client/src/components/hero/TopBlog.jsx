import { Link } from 'react-router-dom'

export default function TopBlog({ data, index }) {
    const { image, cat, excerpt, author, btn } = data;

  return (
    <div className="top-blog" key={index}>
        <img
            className="hero-img"
            src={image}
        />

      <div className="column-div-left">
          <p> 
            {/* <span className="small-font bold">November 7, 2023 | category 1</span><br/> */}
            <span className="small-font">{excerpt}</span> &nbsp;&nbsp;
            <Link className="bold small-font"><button className="regular-button">{btn}</button></Link>                       
          </p>  
          {/* <Link className="bold small-font"><button className="regular-button">Read more</button></Link> */}
      </div>
    </div> 
  )
}
