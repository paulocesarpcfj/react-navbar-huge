import React from 'react';
import { Route, Redirect } from 'react-router';

import { Main } from 'views/Main';
import Work from 'views/Work';

export default (
    <Route>
        <Route path="/" component={Main}>
            <Route path="work" component={Work} />
        </Route>

        <Redirect from="*" to="/work" />
    </Route>
);
