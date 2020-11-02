import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Contact extends Component {
    render () {
        return (
            <div className='contact-body'>
                    <Grid className='contact-grid'>
                    <Cell col= {6}>half page</Cell>
                    <Cell col= {6}>half page</Cell>
                    </Grid>
            




            <div style= {{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
             
                <div className="banner-text"/>
                <h1>Contact </h1>
                <p>georgekblake@gmail.com



                </p>

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
        </div>
        )
    }
}
export default Contact;