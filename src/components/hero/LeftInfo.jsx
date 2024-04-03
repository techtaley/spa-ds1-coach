import React from "react";
import {Link} from 'react-router-dom'

export default function LeftInfo({data, index}) {
  const { bannerImg, subtitle, list, linkbtn} = data

  return (
    <div className="left-hero">

      <div>
        <img
          className="hero-img"
          src={bannerImg}
        />
      </div>

      <div className="column-div-left" key={index}>
        <h3>{subtitle}</h3>

        <ul className="square-li">
            {list.map(li => 
              <li>{li}</li>
            )}
        </ul>
        <Link className="darkbtn">{linkbtn}</Link>
      </div>
    </div>            
    
  );
}

// import React from "react";
// import { Link } from 'react-router-dom'

// export default function LeftInfo({data, index}) {

//   const { title, list, linkbtn } = data

//   return (
//     <div className="left-hero">

//       <div>
//         <img
//           className="hero-img"
//           src="https://place-hold.it/400x400/666/fff/000?text=Graphic laying out solution"
//         />
//       </div>

//       <div className="column-div-left" key={index}>
//       <h3>{title}</h3>

//         <ul className="square-li">
//             <li>{list}</li>
//         </ul>
//         <Link className="bold darkbtn">{linkbtn}</Link>
//       </div>
//     </div>
//   );
// }
