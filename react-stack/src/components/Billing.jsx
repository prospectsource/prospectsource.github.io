import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class Billing extends React.Component {
  render(){
    return (
      <section className="page">
       	<form >
    		<div className="container">
    			<div className="row">
    				<div className="col-sm-4">
    					<div className="timeline-image1 background-gray">
    						<h2>1</h2>
    					</div>
    					<h5 className="timeline-heading1">SELECT CLUB</h5>
    				</div>
    				<div className="col-sm-4">
    					<div className="timeline-image2 background-gray">
    						<h2>2</h2>
    					</div>
    					<h5 className="timeline-heading2">GENERAL INFORMATION</h5>
    				</div>
    				<div className="col-sm-4">
    					<div className="timeline-image3 background-blue">
    						<h2>3</h2>
    					</div>
	    				<h5 className="timeline-heading3">BILLING</h5>
    				</div>
    			</div>
    			<div className="row">
    				<div className="col-md-4 input-box">
    					<div id="fee-info" className="">
    						<h4><u>Once registered...</u></h4>
							<div>you will have
								access to our premium services:
								<ul>
									<li>- Video Service</li>
									<li>- Marketing Service</li>
									<li>- Consulting Service</li>
								</ul>
								When premium services are purchased,
								we will bill the credit card
								on file. You can delete or remove
								your credit card and profile at any
								time.
							</div>
    					</div>
    				</div>
    				<div className="col-md-4 input-box">
    					<div className="input-container cc-info">
    						<h3>CC Information</h3>
    						<div>CC Number<input  /></div>
          					<div>Security Code<input  /></div>
          					<div>Expiration <input  /></div>
          					<div>Name On Card<input  /></div>
    					</div>
    				</div>
    				<div className="col-md-4 input-box">
    					<div className="input-container cc-info">
    						<h3>Billing Address</h3>
    						<div>Street<input  /></div>
          					<div>City<input  /></div>
          					<div>State <input  /></div>
          					<div>Zip<input /></div>
    					</div>
    				</div>
    			</div>
    	  	</div>
          	<a className="btn btn-default btn-large center-button">Finish</a>
    	</form>
    </section>
    );
  }
  }

export default Billing;
