
var MarketingServiceAdd = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(prospect, index) {
      return (
         <div id="marketing-add" className="marketing-add-container text-center">
          <u><h3>Marketing Service</h3></u>
          <div className="marketing-attributes background-light-gray">
          	<ul className="list-inline">
          		<li><input type="checkbox" /><span>Click here if you want to add our marketing service to your cart (send video directly to coaches)</span></li>
          	</ul> 
        	<h4>Thanks for submitting your game film!</h4>
        	<p className="text-left" >Our team will take these files and create a highlight 
        	video and make game film available upon request for interested college coaches. You will 
        	receive a notification when your video is complete.</p>
			<p className="text-left">Your CC on file will be charged accordingly for this service. You will be charged $100 
			for the video service and an additional $100 IF you clicked above to include our marketing service.</p>
          </div>        
        </div>
      );
    };
    return <ul className="prospect-list list-unstyled">{ this.props.prospects.map(createItem) }</ul>;
  }
});


var VideoService = React.createClass({
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

  handleVideoClick: function(event) {
    document.getElementById("marketing-add").style.display='block';
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
    						<div className="text-center" ><h3>Premium Video Service</h3></div>
    						<p id="video-paragraph" >When you subscribe to our Premium Video Service, all you have to do is 
    						upload your video, and we will take it from there!</p>
						</div>    				
    				</div>
    				<div className="col-sm-8 col-md-9">
    					<div className="prospect-container">
    						<button className="btn btn-default btn-large center-button background-light-gray"><h5>View Uploaded Video Files</h5></button>
    						<ul className="video-upload-container list-unstyled">
								<li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
								<li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
								<li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
								<li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>
								<li>Upload Video<input className="custom-file-input" type="file" name="video" accept="video/*" /></li>    							
    						</ul>
    						<button className="btn btn-default btn-large center-button" onClick={this.handleVideoClick}>Submit Video Order</button>
    					</div>
    				</div>
    			</div>
    	  	</div>
    	  	<MarketingServiceAdd prospects={this.state.prospects} />
    	  	
    </section>
    );
  }
});

ReactDOM.render(<VideoService/>, document.getElementById('video-service'));

