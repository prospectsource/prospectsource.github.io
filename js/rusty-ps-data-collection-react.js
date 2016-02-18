
var ContactInfoLabels = React.createClass ({
	  
	  render(){
            return (
                <div>{this.props.category}</div>
            );
  	  }
});

//**----------------------------------------------------------------------------------**//


var ContactInfoInputs = React.createClass ({
	  	
  		handleChange: function() {
    			this.props.handleChange(
    				this.refs.first.value,
    				this.refs.last.value);
  		},
	  	
	  	render(){
        	return (
                <div><input type="text"
          					value={this.props.first}
          					ref= "first"
          					onChange={this.handleChange} />
          			 <input type="text"
          					value={this.props.last}
          					ref= "last"
          					onChange={this.handleChange} />
            	</div>
            );
  		}
});

//**----------------------------------------------------------------------------------**//


var ContactInfoLabelsAndInputs = React.createClass ({
	  
	 		
	 handleChange: function() {
    			this.props.handleChange(
    				this.refs.first.value,
    				this.refs.last.value,
    				this.refs.phone.value,
    				this.refs.email.value,
    				this.refs.address.value
    				);
  		},
	 	
	  render(){
        var labeled = this.props.labels.map(function(label) {
            return (
            		<div key={label.id}>
            			<ContactInfoLabels 
            					category={label.category} key={label.category}/>
            		<input type="text"
          					value={label.value}
          					ref={label.inputRefs}
          					onChange={this.handleChange} />	
            		</div>
            );
        }, this);
    	return (
    		<div>
    		<div>{labeled}</div>
    				<input className="updates-to-firebase" type="text"
          					value={this.props.first}
          					ref= "first"
          					onChange={this.handleChange} />
          			 <input className="updates-to-firebase" type="text"
          					value={this.props.last}
          					ref= "last"
          					onChange={this.handleChange} />
        	</div>
    	);
  	  }
});

//**----------------------------------------------------------------------------------**//

var ContactInfoContainer = React.createClass ({
		
		
		
		getInitialState: function() {
    		return {
      			items:[],
      			first: '',
      			last: '',
      			phone:'',
      			email:'',
      			address:''
    		};
  		},

		componentWillMount: function() {
    		this.firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com');
    		this.firebaseRef.limitToLast(25).on('value', function(dataSnapshot) {
      		var prospects = [];
      		dataSnapshot.forEach(function(childSnapshot) {
        	var prospect = childSnapshot.val();
        	prospect['.key'] = childSnapshot.key();
        	prospects.push(prospect);
      		}.bind(this));

      		this.setState({
        	prospects: prospects
      		});
    		}.bind(this));
  		},

  		componentWillUnmount: function() {
    		this.firebaseRef.off();
  		},

  		handleUserInput: function(first,last,phone,email,address) {
    		this.setState({
      			first: first,
      			last: last,
      			phone:phone,
      			email:email,
      			address:address
    		});
  		},
		
		handleSubmit: function(e) {
   			e.preventDefault();
    		if (this.state.first && this.state.first.trim().length !== 0) {
      			this.firebaseRef.push({
        			first: this.state.first,
        			last: this.state.last,
        			phone: this.state.phone,
        			email: this.state.email,
        			address: this.state.address,
      			});
      			this.setState({
        			first: '',
        			last: '',
        			phone: '',
        			email: '',
      				address:''
      			});
    		}
  		},
					
	  render(){
            return (
        <form className="text-center" onSubmit={ this.handleSubmit }>
            <div className="row">
              <div className="col-md-4 input-box">
    			<div className="input-container">
            		<h4>CONTACT INFORMATION</h4>
            		<div className="first-name-container">
            			<ContactInfoLabelsAndInputs
            					labels={this.props.labels} 
    							first={this.state.first}
    							last={this.state.last}
    							phone={this.state.phone}
    							email={this.state.email}
    							address={this.state.address}
          						handleChange={this.handleUserInput}/>		  
            		</div>
            	</div>
              </div>
            </div>
        <button className="btn btn-default btn-large">NEXT</button>
        </form>
            );

  		}
});

//**----------------------------------------------------------------------------------**//


 var CONTACTLABELS = [{id: 1, category:'FIRST NAME', inputRefs: 'first', value: 'this.props.first'}, 
						  {id: 2, category:'LAST NAME', inputRefs: 'last', value: '{this.props.last}' },
						  {id: 3, category:'PHONE (ATHLETE)', inputRefs: 'phone', value: '{this.props.phone}' },
						  {id: 4, category:'EMAIL (ATHLETE OR PARENT)', inputRefs: 'email', value: '{this.props.email}' },
						  {id: 5, category:'ADDRESS', inputRefs: 'address', value: '{this.props.address}' }
							];
 
 var INPUTREFS	= {
 			refs: ['first', 'last', 'phone', 'email', 'address']
 			};

ReactDOM.render(<ContactInfoContainer labels={CONTACTLABELS}/>,
    document.getElementById('players')
);
 