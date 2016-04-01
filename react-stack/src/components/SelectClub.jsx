import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';

class SelectClub extends React.Component {
  render(){
    return (
      <div>

      <section className="page">
       <form >
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-blue">
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
    				<div className="timeline-image3 background-gray">
    					<h2>3</h2>
    				</div>
	    			<h5 className="timeline-heading3">BILLING</h5>
    			</div>
    		</div>
    		<div className="row">
    			<div className="col-sm-3">
    				<div id="aau-prospect" className="background-blue">
    					<h5>AAU PROSPECT</h5>
    				</div>
    			</div>
    			<div className="col-sm-9">
    				<label htmlFor="aau-club">Select Your AAU Club</label>
    				<select  id="aau-club" name="aau-club" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="Kingdom Hoops">Kingdom Hoops</option>
    					<option value="Rusty's Rascals">Rustys Rascals</option>
    					<option value="McCall MadMen">McCall MadMen</option>
    					<option value="Alex's Angels">Maschoff Monsters</option>
     				</select>
    			</div>
    			<div className="col-sm-offset-3 col-sm-9">
    				<div>CREATE USERNAME <input  /></div>
          			<div>CREATE PASSWORD <input  /></div>
    			</div>
    		</div>
    	</div>
    	
          
          <button  className="btn btn-default btn-large center-button">NEXT</button>
        </form>
      </section>
      </div>
    );
  }
  }

export default SelectClub;
