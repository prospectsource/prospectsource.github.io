var CollegeCoachesPlansFeatures = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      items: [],
      text: ''
    };
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/players/');
    this.bindAsArray(firebaseRef.limitToLast(25), 'items');
  },

  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  
  onChange2: function(e) {
    this.setState({text2: e.target.value});
  },
  
  onChange3: function(e) {
    this.setState({text3: e.target.value});
  },

  removeItem: function(key) {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/players/');
    firebaseRef.child(key).remove();
  },

  handleButtonClick: function(event) {

    // Prevent default anchor click behavior
    event.preventDefault();

    // Store hash
    

    // Using jQuery's animate() method to add smooth page scroll
    // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
    $('html, body').animate({
      scrollTop: $(coachBilling).offset().top - 60
    }, 800);
  },

  render: function() {
    return (
      
      <section className="page">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-gray">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">CREATE ACCOUNT</h5>
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
    			<div className="col-xs-12">
    				<div className="header text-center">
    					<h2>Plans & Features</h2>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    		  <div className="col-md-4">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features">
							<h5>Basic</h5> 
							<div className="cost" >Free</div> 
							<div>Sit back & receive referrals from Clubs around the country</div>
						</th>		
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Receive Prospect Referrals(no registration required)</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Free!</div>
						</td>
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-4">
    			<table id="plans-features-table" className="text-center">
					
					<thead>	  
					  <tr id="table-header-row">
						<th className="features">
							<h5>Plus Membership</h5> 
							<div className="cost" >$120/Year</div>
							<div>Access our database to filter serches to see all D1, D2, D3, NAIA, JUCO recruited prospects</div>
						</th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Receive Prospect Referrals(no registration required)</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Contact Information</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Athletic Information</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Academic Information</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View Prospect Level of Recruitment (D1,D2,D3,NAIA,JUCO)</td>
				      </tr>
					  <tr>
						<td className=" background-blue" >Request Full Game Film</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>3 Month Free Trial!</div>
							<div>Monthly</div>
							<div>$10.00/month</div>
						</td>
					  </tr>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Yearly</div>
							<div>$108.00</div>
							<div>(10% off)</div>
						</td>
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-4">
    			<table id="plans-features-table" className="text-center">
					
					<thead>	  
					  <tr id="table-header-row">
						<th className="features">
							<h5>Premium Membership</h5> 
							<div className="cost" >$20/Month</div>
							<div>3 Months Free!</div>
						</th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Receive Prospect Referrals(no registration required)</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Contact Information</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Athletic Information</td>
					  </tr>
					  <tr>
						<td className="" >Access Prospect Academic Information</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View Prospect Level of Recruitment (D1,D2,D3,NAIA,JUCO)</td>
				      </tr>
					  <tr>
						<td className=" background-blue" >Request Full Game Film</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View Which Schools Have Recruited the Prospect</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >View How Prospects Are Being Contacted (letter, text, visit, etc)</td>
				      </tr>
				      <tr>
						<td className=" background-blue" >Set Notifications On Atheletes (notified when a college recruits them)</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >Access Recruiting Feeds (all athletes being recruited by level)</td>
				      </tr>
					</tbody>
					<tfoot>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>3 Month Free Trial!</div>
							<div>Monthly</div>
							<div>$20.00/month</div>
						</td>
					  </tr>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Yearly</div>
							<div>$216.00</div>
							<div>(10% off)</div>
						</td>
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  
    		  
    		</div>
    	</div>
    	
        <form className="text-center" onSubmit={ this.handleSubmit }>
        
          	<a onClick={this.handleButtonClick} className="btn btn-default btn-large">To Billing</a>
       
        </form>
      </section>
    );
  }
});

ReactDOM.render(<CollegeCoachesPlansFeatures />, document.getElementById('collegeCoachesPlansFeatures'));