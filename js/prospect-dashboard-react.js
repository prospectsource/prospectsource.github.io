
var Letter = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(prospect, index) {
      return (
         <div id="letter-update" className="recruit-update-container text-center">
          <u><h3>Recruiting Letter</h3></u>
          <input type="text"/><div className="btn-default search">Search School</div>
          <div className="letter-attributes background-light-gray">
          	<ul className="list-inline">
          		<li><input type="checkbox" /><span>Mens</span></li>
          		<li><input type="checkbox" /><span>Womens</span></li>
          	</ul> 
        	<label htmlFor="sel1"></label>
    				<select id="sel1" className="form-control standalone" type="select" label="Select" placeholder="select">
      					<option value="NCAA D1  V">NCAA D1  V</option>
    					<option value="NCAA D2  V">NCAA D2  V</option>
    					<option value="NCAA D3  V">NCAA D3  V</option>
    					<option value="NCAA NAIA  V">NCAA NAIA  V</option>
     				</select> 
          </div>        
        </div>
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});


var ProspectDashboard = React.createClass({
  mixins: [ReactFireMixin],

  getInitialState: function() {
    return {
      items: [],
      text: ''
    };
  },

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com/prospects');
    this.bindAsArray(firebaseRef.limitToLast(25), 'prospects');
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
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com');
    firebaseRef.child(key).remove();
  },

  handleLetterClick: function(event) {
    document.getElementById("letter-update").style.display='block';
  },

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs['prospects'].push({
        name: this.state.text,
        position: this.state.text2, // "name:" changes the input attribute category
        height: this.state.text3
      });
      this.setState({
        name: '',
        position: '',
        height: ''
      });
    }
    this.state.text = String.Empty;
    this.state.text2 = String.Empty;
    this.state.text3 = String.Empty;
  },



  render: function() {
    return (
      
    <section className="">
    		<div className="container">
    			<div className="row">
    				<div className="col-md-3">
    					<div className="panel-container">
    						<div id="program-name" ><h5>Prospect Name</h5></div>
    						<div id="" className="data-cat-btn background-gray">
    							<h5>Dashboard</h5>
							</div>
    						<div className="panel-cat-name">
    							<h5>Edit Information</h5>
    						</div>
    						<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
    							<h5>Contact Information</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Athletic Information</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Academic Information</h5>
							</div>
							<div className="panel-cat-name">
								<h5 >Order Premium Service</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Video Service</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Marketing Service</h5>
							</div>
						</div>    				
    				</div>
    				<div className="col-md-9">
    					<div id="prospect-clubname"><u><h5>Club Name</h5></u></div>
    					<div id="prospect-account"><u><h5>Account</h5></u></div>
    					<div className="prospect-container">
    						<ul className="prospect-categories list-inline">
    							<li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />D1</li>
    							<li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />D2</li>
    							<li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />D3</li>
    							<li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />NAIA</li>
    							<li className="cat-btn background-blue"><input type="checkbox" onChange={this.handleUserInput} value={ this.state } />JUCO</li>
    						</ul>
    						<h2 id="prospect-interest" className="text-center" >My Recruiting Interest</h2>
							<div id="recruiting-tracking">    						
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue" onClick={this.handleLetterClick}><h5>RECEIVED A LETTER</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"><h5>RECEIVED A TEXT</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"><h5>RECEIVED AN EMAIL</h5></div>
								</div>
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue"><h5>RECEIVED A PHONECALL</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"><h5>WAS INVITED TO A CAMP</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"><h5>HAD A PRIVATE WORKOUT</h5></div>
								</div>
								<div className="row">
									<div className="col-sm-4 recruiting-tracking-btn background-blue"><h5>WAS INVITED TO CAMPUS</h5></div>
									<div className="col-sm-4 recruiting-tracking-btn background-blue"><h5>WAS OFFERED</h5></div>
								</div>
							</div>
    					</div>
    				</div>
    			</div>
    	  	</div>
    	  	<Letter prospects={this.state.prospects} />
    	  	
    </section>
    );
  }
});

ReactDOM.render(<ProspectDashboard/>, document.getElementById('prospect-dashboard'));

