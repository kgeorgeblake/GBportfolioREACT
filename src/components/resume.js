import React,{ Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import resume from "../assets/GB.pdf"

class Resume extends Component {
    render () {
        return (
            <div style= {{width: '100%', margin: 'auto'}}>
            <Grid className="landing-grid">
                <Cell col={12}>
             
                <div className="banner-text"/>
                <a href={resume} target="_blank">
                <h1>Resume 
             

                </h1>
                </a>
                <hr/>

                  <p>CWRU Coding Boot Camp, Full Stack Summer 2020 HTML5, CSS3, JavaScript, jQuery, Bootstrap, Express.js, React.js, Java, Node.js, Database Theory, Bookshelf.js, MongoDB, MySQL, Command Line, Git. </p>
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
export default Resume;