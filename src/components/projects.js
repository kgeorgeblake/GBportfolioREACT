import React,{ Component } from 'react';
import { Grid, Cell, Tab, Tabs, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Projects extends Component {
   constructor(props){
    super(props);
    this.state = { activeTab: 0};
   }
   
   toggleCategories(){

    if (this.state.activeTab === 0) {
        return (
            <div class="demo-card-wide mdl-card mdl-shadow--2dp">
            <div class="mdl-card__title">
              <h2 class="mdl-card__title-text"></h2>
            </div>
            <div class="mdl-card__supporting-text">
          This is Dinner and a Show, an App for planning a night on the town
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <a href= 'https://kgeorgeblake.github.io/DinnerandaShow/' class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <a href= 'https://github.com/kgeorgeblake/DinnerandaShow' class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Github
              </a>
            </div>
            <div class="mdl-card__menu">
              <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                <i class="material-icons">share</i>
              </button>
            </div>
          </div>
        )
   } else if(this.state.activeTab === 1) {
    return(
     
        <div class="demo-card-wide mdl-card2 mdl-shadow--2dp">
        <div class="mdl-card__title2">
          <h2 class="mdl-card__title-text"></h2>
        </div>
        <div class="mdl-card__supporting-text2">
         This is groceri-emoji, an app for ordering food using emoji visuals
        </div>
        <div class="mdl-card__actions mdl-card--border">
          <a href="https://floating-eyrie-50408.herokuapp.com/index"
          class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
            Get Started
          </a>
          <a href= 'https://github.com/kgeorgeblake/groceri-emoji' class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Github
              </a>
        </div>
        <div class="mdl-card__menu2">
          <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
            <i class="material-icons"></i>
          </button>
        </div>
      </div>
    )

    
    } else if(this.state.activeTab === 2) {
        return(
            <div class="demo-card-wide mdl-card3 mdl-shadow--2dp">
            <div class="mdl-card__title3">
              <h2 class="mdl-card__title-text"></h2>
            </div>
            <div class="mdl-card__supporting-text3">
             The is an employee directory made with ReactJS
            </div>
            <div class="mdl-card__actions mdl-card--border">
              <a href=" https://secure-savannah-05576.herokuapp.com"
              class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Get Started
              </a>
              <a href= 'https://github.com/kgeorgeblake/employeeReact' class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    Github
                  </a>
            </div>
            <div class="mdl-card__menu2">
              <button class="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                <i class="material-icons"></i>
              </button>
            </div>
          </div>
        )
    }

   }
   

    render () {
        return (
        
            <div style= {{width: '100%', margin: 'auto'}}>
               <div className='category-tabs'>
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId})} ripple>
                <Tab>Project 1</Tab> 
                    <Tab>Project 2</Tab>
                   <Tab>React</Tab>
                   
                   </Tabs>

                
                   <Grid>
                        <Cell col={12}>
                            <div className='content'>  {this.toggleCategories()}</div>
                        </Cell>
                   </Grid>
                   
                </div>
        
            <Grid className="projects-grid">
                <Cell col={12}>
             
                <div className="banner-text"/>
                <h1>Projects </h1>

                <hr/>

                  <p>HTML/CSS | JavaScript | React | NodeJS | Express | MongoDB </p>
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
export default Projects;


