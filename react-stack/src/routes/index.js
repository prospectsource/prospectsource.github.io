import React from 'react';
import App from '../components/App.jsx';
import Chat from '../components/Chat.jsx';
import SelectClub from '../components/SelectClub.jsx';
import ProspectRegistration from '../components/ProspectRegistration.jsx';
import GeneralInformation from '../components/GeneralInformation.jsx';
import PlansFeatures from '../components/PlansFeatures.jsx';
import Billing from '../components/Billing.jsx';
import ThankYou  from '../components/ThankYou.jsx';

import Login from '../components/Login.jsx';
import Router from 'react-router';
let Route = Router.Route;
let DefaultRoute = Router.DefaultRoute;

let routes = (
  <Route path="/" handler={App}>
    <DefaultRoute handler={Chat} />
    <Route path="prospectregistration" handler={ProspectRegistration} />
    <Route path="select_club" handler={SelectClub} />
    <Route path="General_Information" handler={GeneralInformation} />
    <Route path="Plans_and_Features" handler={PlansFeatures} />
    <Route path="Billing" handler={Billing} />    
    <Route path="thank_you" handler={ThankYou} />

//    <Route path="Dashboard" handler={GeneralInformation} />

    <Route path="chat" handler={Chat} />
    <Route path="chat/:channel" handler={Chat} />
    <Route path="login" handler={Login} />
  </Route>
);

Router.run(routes, Router.HashLocation, (Root)=> {
  React.render(<Root />, document.getElementById('container'));
});


