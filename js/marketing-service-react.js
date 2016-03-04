
var MarketingServiceAd = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(prospect, index) {
      return (
         <div id="marketing-confirm" className="marketing-confirm-container text-center">
          <div className="marketing-confirm background-light-gray">
        	<h4>Thanks for submitting your highlight video!</h4>
        	<p className="text-left" >Thanks for submitting a highlight video. Our team will post this video to our YouTube channel and/or distribute it directly to college
			coaches within your rating. If you only submitted your Hudl highlight URL, we will send this directly to college coaches and push
			them towards your Hudl profile. </p>
			<p className="text-left">Your CC on file will be charged accordingly for this service.</p>
          </div>        
        </div>
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});


var MarketingService = React.createClass({
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

  handleMarketingClick: function(event) {
    document.getElementById("marketing-confirm").style.display='block';
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
    				<div className="col-sm-4 col-md-3">
    					<div id="video-description" className="panel-container">
    						<div className="text-center" ><h3>Marketing Service</h3></div>
    						<p id="video-paragraph" >When you upload your highlight video to our Premium
    						 Marketing Service, we will send it out to coaches for you!</p>
						</div>    				
    				</div>
    				<div className="col-sm-8 col-md-9">
    					<div className="prospect-container">
    						<ul className="video-upload-container list-unstyled">
								<li>Upload Highlight Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
								<li>Hudl Highlight URL<input className="custom-file-input" type="text" name="hudl-url" /></li>
								</ul>
    						<button className="btn btn-default btn-large center-button" onClick={this.handleMarketingClick}>Submit Marketing Order</button>
    					</div>
    				</div>
    			</div>
    	  	</div>
    	  	<MarketingServiceAd prospects={this.state.prospects} />
    	  	
    </section>
    );
  }
});

ReactDOM.render(<MarketingService/>, document.getElementById('marketing-service'));

