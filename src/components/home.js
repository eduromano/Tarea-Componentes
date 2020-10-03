import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Footer from './footer';
import About from './about';
import Masthead from './masthead';
import Contact from './contact';
import Portafolio from './portafolio';
import Navigation from './navigation';

const Home = () => {
    return( 
        <div>
            <Navigation />
            <div>
                <Switch>
                    <Route exact={true} path="/" component={Masthead} />
                    <Route path="/portfolio" component={Portafolio} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Switch>
            </div>
            <Footer />
        </div>
    )
}

export default Home;