import React from 'react';
import { AppContext } from './app-context';

const withContext = (Component) => {
    return (props) => {
        return (
            <AppContext.Consumer>
                {context => <Component {...props} context={context} />}
            </AppContext.Consumer>
        )
    }
}

export default withContext;