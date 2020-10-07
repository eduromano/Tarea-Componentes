import React, {Fragment} from 'react';
import Masthead from './masthead';
import Portafolio from './portafolio';
import About from './about';
import Contact from './contact';

const Root = () => {
    return(
        <Fragment>
            <Masthead />
            <Portafolio />
            <About />
            <Contact />
        </Fragment>
    )
}

export default Root;