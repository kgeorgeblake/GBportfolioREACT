import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class AboutMe extends Component {
    render () {
        return (
            <div style= {{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
             
                <div className="banner-text"/>
                <h1>About Me </h1>
                <p>I am currently enrolled in Case Western Reserve University's Full Stack Web Development Bootcamp (MERN). I am particularly interested in how coding can be a tool for living, solving problems and having wonderful ideas.
              Additionally, I am a Postdoctoral Scholar at Case Western Reserve University. My ongoing work in the digital humanities is oriented around enriching research methods, extending music education and promoting digital literacy.</p>
                <hr/>

                  <p>George Blake, Full-Stack Developer : HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB | ArcGIS </p>
                    
                  <div className='social-links'>
                        {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/george-blake-1195b11a6/" target="_blank">
                    <i className="fa fa-linkedin-square" rel="nooperner noreferrer" aria-hidden="true" />
                    </a>

                         {/* gitHub */}
                         <a href="https://github.com/kgeorgeblake" target="_blank">
                    <i className="fa fa-github-square" rel="nooperner noreferrer" aria-hidden="true" />
                    </a>

                              {/* CWRU */}
                              <a href="https://case.edu/artsci/music/about/people/faculty/george-blake" target="_blank">
                    <i className="fa fa-square" rel="nooperner noreferrer" aria-hidden="true" />
                    </a>


                    </div>


                </Cell>
            </Grid>
        </div>
        )
    }
}
export default AboutMe;