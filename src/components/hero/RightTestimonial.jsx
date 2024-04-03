export default function RightTestimonial({data}) {
  const { title, desc, image, quote, fullname, cityyear, program } = data

  return (
    <div className="margin70">
        <div className="center">
            <p className="sub-title">{title}</p>          
            <h2>{desc}</h2>          
        </div>  

        <div className="hero right-hero">
            <div>
                <img
                className="hero-img"
                src={image}
                />
            </div>

            <div className="column-div-right quote-div">
                {/* <h1><span class="big-quote">&lsquo;</span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h1> */}
                <h3 className="italics quote-text">
                    <span class="med-quote">&lsquo;</span>
                    {quote}
                </h3>

                <div> 
                    <span className="bold lightfont">Meet {fullname}</span><br /><br />
                    <span className="darkfont">{cityyear}</span><br/>
                    <span className="darkfont bold">{program}</span>
                </div>
            </div>
        </div>
    </div>
  );
}
