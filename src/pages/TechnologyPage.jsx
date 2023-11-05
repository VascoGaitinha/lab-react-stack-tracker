import React from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function TechnologyPage(props) {
  let techs = props.techs; 
  console.log(techs)
  let { slug } = useParams();
  let tech = techs.find((tech) => tech.slug === slug)
  return (
<div>
        <h1>Company Profile</h1>
          <div className="individual-display">
            <div>
              <img className="comp-logo" src={tech.image}/>
            </div>
            <div className="comp-logo-text">
              <h2>{tech.name}</h2>
              <h3>About</h3>
              <p className='comp-logo-paragraph'>{tech.description}</p>
            </div>
            
          </div>
          <div className="btn-div"><Link to={"../"}><button>Back</button></Link></div>

    </div>
  );
}

export default TechnologyPage;
