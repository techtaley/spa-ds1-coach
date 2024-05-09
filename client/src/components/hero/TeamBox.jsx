export default function TeamBox({ data }) {
  const { image, firstname, title, social } = data;

  return (
    <div className="left-team">
        <img
            className="hero-img"
            src={image}
        />
            
        <div className="column-div-left">
            <span className="medium-font bold">{firstname}</span>
            <span className="small-font italics">{title}</span>

            <p className="small-font">
              {social.map(icon  => 
                <span className="social-icon">{icon}</span>
              )}
            </p>
        </div>
    </div> 
  );
}
