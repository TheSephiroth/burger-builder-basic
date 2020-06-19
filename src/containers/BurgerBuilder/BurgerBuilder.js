import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';

class BurgerBuilder extends Component{
    render(){
        return(
            <div className="">
                <Aux>
                    <div>Burger</div>
                    <div>Build Controls</div>
                </Aux>
            </div>
        );
    }
}

export default BurgerBuilder;