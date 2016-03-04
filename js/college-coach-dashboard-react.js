
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


var CollegeCoachDashboard = React.createClass({
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
    						<div id="program-name" ><h5>School Name</h5></div>
    						<div id="" className="data-cat-btn background-gray">
    							<h5>Dashboard</h5>
							</div>
    						<div className="panel-cat-name">
    							<h5>Edit Information</h5>
    						</div>
    						<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
    							<h5>School Information</h5>
							</div>
							<div id="" className="data-cat-btn background-gray" onClick={this.handleContactClick}>
								<h5>Coach Information</h5>
							</div>
							<div className="panel-cat-name">
								<h5>Recruiting Feeds</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D1 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D2 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>D3 Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>NAIA Recruiting</h5>
							</div>
							<div id="" className="data-cat-btn background-blue" onClick={this.handleContactClick}>
								<h5>JUCO Recruiting</h5>
							</div>
						</div>    				
    				</div>
    				<div className="col-md-9">
    					<div className="prospect-container">
							<div id="">    						
								<ul id="coach-tracking" className="list-inline">
									<li className="college-coach-cats background-gray" onClick={this.handleLetterClick}><h5>Prospect Database</h5></li>
									<li className="college-coach-cats background-gray"><h5>Club Database</h5></li>
									<li className="college-coach-cats background-gray"><h5>My Recruits</h5></li>
								</ul>
							</div>
							<div>
								<img id="coach-dashboard-logo" src="img/ps-logo-md.png" className="img-responsive" alt=""/>
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

ReactDOM.render(<CollegeCoachDashboard/>, document.getElementById('college-coach-dashboard'));

