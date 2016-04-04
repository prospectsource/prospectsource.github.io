import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class ThankYou extends React.Component {
  render(){
    return (
      <section className="page">
       	<form >
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-12">
    					<h3 className="text-center" >You have successfully created your prospect profile!</h3>
    					<p>Now that you have created your profile, you will be entered into our master 
    					prospect database. This database is searched by coaches of all levels.</p>
						<p>In order to increase your chance of appearing in database searches, please 
						add recruiting interest to your profile. Once you are on the dashboard, you will
						 be able to let everyone know who is currently recruiting you. </p>
						<p>In addition to adding recruiting interest to your profile, you can order 
						premium video and marketing service to get your information in front of more 
						coaches.</p>
    				</div>
    			</div>
    	  	</div>
          	<button className="btn btn-default btn-large center-button">View Profile</button>
    	</form>
    </section>
    );
  }
  }

export default ThankYou;
