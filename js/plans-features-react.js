var PlayerRegistration = React.createClass({
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
      scrollTop: $(billing).offset().top - 100
    }, 800);
  },

  render: function() {
    return (
      
      <section className="page">
    	<div className="container">
    		<div className="row">
    			<div className="col-xs-12">
    				<div className="header text-center">
    					<img id="table-logo" src="img/ps-logo-sm.png" className="img-responsive" alt=""/>
    					<h2>Plans & Features</h2>
    				</div>
    			</div>
    		</div>
    		<div className="row">
    		  <div className="col-md-offset-1 col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Basic</h5> <div className="cost" >Free</div> <div>Showcase & track your recruiting</div></th>		
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Athletic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					</tbody>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Plus</h5> <div className="cost" >$60/year</div> <div className="cost-month" >($5/month)</div> <div>Track other recruits and who is following you</div></th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Athletic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Who Is Recruiting Other Prospects</td>
				      </tr>
					  <tr>
						<td className=" background-light-gray" >Store Unlimited Game Film</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Views On Profile</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Notifications Set On Your Profile</td>
				      </tr>
					</tbody>
					<tfoot>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Monthly</div>
							<div>$5.00/month</div>
						</td>
					  </tr>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Yearly</div>
							<div>$54.00</div>
							<div>(10% off)</div>
						</td>
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Premium 1</h5> <div className="cost">$160/year</div> <div className="cost-month" >($13.33/month)</div> <div>Let us send out your highlight video</div></th>
						</tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Athletic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Who Is Recruiting Other Prospects</td>
				      </tr>
					  <tr>
						<td className=" background-light-gray" >Store Unlimited Game Film</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Views On Profile</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Notifications Set On Your Profile</td>
				      </tr>
					  <tr>
						<td className=" background-gray" >Highlight Distributed To College Coaches</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Monthly</div>
							<div>$13.33/month</div>
						</td>
					  </tr>
					  <tr>
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Yearly</div>
							<div>$144.00</div>
							<div>(10% off)</div>							
						</td>
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Premium 2</h5> <div className="cost" >$260/year</div> <div className="cost-month" >($21.67/month)</div> <div>Let us create and send one video/year</div></th>		
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Athletic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Who Is Recruiting Other Prospects</td>
				      </tr>
					  <tr>
						<td className=" background-light-gray" >Store Unlimited Game Film</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Views On Profile</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Notifications Set On Your Profile</td>
				      </tr>
					  <tr>
						<td className=" background-gray" >Highlight Distributed To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >Highlight Produced & Distributed To College Coaches (Once)</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Monthly</div>
							<div>$21.67/month</div>
						</td>		
					  </tr>
					  <tr>
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Yearly</div>
							<div>$234.00</div>
							<div>(10% off)</div>
						</td>
					  </tr>
					</tfoot>
				</table>
    		  </div>
    		  <div className="col-md-2">
    			<table id="plans-features-table" className="text-center">
					<thead>	  
					  <tr id="table-header-row">
						<th className="features"><h5>Premium 3</h5> <div className="cost" >$460/year</div> <div className="cost-month" >($38.33/month)</div> <div>Let us create and send two video/year</div></th>
					  </tr>
					</thead>
					<tbody>
					  <tr>
						<td className="" >Showcase Contact Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Athletic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Academic Information to College Coaches</td>
					  </tr>
					  <tr>
						<td className="" >Showcase Recruiting Interest To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Who Is Recruiting Other Prospects</td>
				      </tr>
					  <tr>
						<td className=" background-light-gray" >Store Unlimited Game Film</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Views On Profile</td>
					  </tr>
					  <tr>
						<td className=" background-light-gray" >See Coach Notifications Set On Your Profile</td>
				      </tr>
					  <tr>
						<td className=" background-gray" >Highlight Distributed To College Coaches</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >Highlight Produced & Distributed To College Coaches (Once)</td>
					  </tr>
					  <tr>
						<td className=" background-blue" >Highlight Produced & Distributed To College Coaches (Twice)</td>
					  </tr>
					</tbody>
					<tfoot>
					  <tr>
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Monthly</div>
							<div>$38.33/month</div>
						</td>
					  </tr>
					  <tr>	
						<td className=" background-blue">
							<input name="price-choice" type="radio" onChange={this.handleUserInput} value={ this.state } />
							<div>Yearly</div>
							<div>$414.00</div>
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

ReactDOM.render(<PlayerRegistration />, document.getElementById('plansFeatures'));