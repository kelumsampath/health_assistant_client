import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Homepage from '../container/HomePage';
import Login from '../container/SignInPage';
import Register from '../container/SignUpPage';
import Services from '../container/Services';
import Projects from '../container/Projects';
import About from '../container/About';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Navbar />
            <Switch>
                <Route path="/" component={Homepage} exact={true} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/about" component={About} />
                <Route path="/projects" component={Projects} />
                <Route path="/services" component={Services} />
                {/* <Route component={NotFoundPage} /> */}
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;