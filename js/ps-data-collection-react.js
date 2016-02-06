/** @jsx React.DOM */


var TodoList3 = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <li key={ index }>
          <div>Name: { item.name /**this ".name" changes the attribute displayed in the todo list */ }</div>
          <div>Position: { item.position }</div>
          <div>Height: { item.height }</div>
          <div><span onClick={ _this.props.removeItem.bind(null, item['.key']) }
                style={{ color: 'red', marginLeft: '10px', cursor: 'pointer' }}>
                  Delete Player
          	</span>
          </div>
        </li>
      );
    };
    return <ul>{ this.props.items.map(createItem) }</ul>;
  }
});

var TodoApp3 = React.createClass({
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

  handleSubmit: function(e) {
    e.preventDefault();
    if (this.state.text && this.state.text.trim().length !== 0) {
      this.firebaseRefs['items'].push({
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
      
      <section id="data-collection">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
    				<div className="timeline-image1 background-gray">
    					<h2>1</h2>
    				</div>
    				<h5 className="timeline-heading1">REGISTER WITH AAU CLUB</h5>
    			</div>
    			<div className="col-sm-4">
    				<div className="timeline-image2 background-blue">
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
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>CONTACT INFORMATION</h4>
            			<div>FIRST NAME <input onChange={ this.onChange } value={ this.state.text } /></div>
						<div>LAST NAME <input onChange={ this.onChange } value={ this.state.text } /></div>            			
            			<div>PHONE (ATHLETE) <input onChange={ this.onChange } value={ this.state.text } /></div>
          				<div>EMAIL (ATHLETE OR PARENT) <input onChange={ this.onChange2 } value={ this.state.text2 } /></div>
          				<div>ADDRESS <input onChange={ this.onChange3 } value={ this.state.text3 } /></div>
          				<div>CITY/STATE/ZIP <input onChange={ this.onChange4 } value={ this.state.text4 } /></div>
          				<div>AAU COACH NAME <input onChange={ this.onChange5 } value={ this.state.text5 } /></div>
          				<div>AAU COACH EMAIL <input onChange={ this.onChange6 } value={ this.state.text6 } /></div>
          				<div>AAU COACH PHONE <input onChange={ this.onChange7 } value={ this.state.tex7 } /></div>
          				<div>HS COACH NAME <input onChange={ this.onChange8 } value={ this.state.text8 } /></div>
          				<div>HS COACH EMAIL <input onChange={ this.onChange9 } value={ this.state.text9 } /></div>
          				<div>HS COACH PHONE <input onChange={ this.onChange10 } value={ this.state.text10 } /></div>
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ATHLETIC INFORMATION</h4>
            			<div>GRADE/CLASS <input onChange={ this.onChange11 } value={ this.state.text11 } /></div>
          				<div>HEIGHT <input onChange={ this.onChange12 } value={ this.state.text12 } /></div>
          				<div>WEIGHT <input onChange={ this.onChange13 } value={ this.state.text13 } /></div>
          				<div>VERTICAL JUMP <input onChange={ this.onChange14 } value={ this.state.text14 } /></div>
          				<div>POSITION <input onChange={ this.onChange15 } value={ this.state.text15 } /></div>
          				<div>AAU PROGRAM <input onChange={ this.onChange16 } value={ this.state.text16 } /></div>
          				<div>AAU JERSEY <input onChange={ this.onChange17 } value={ this.state.text17 } /></div>
          				<div>HIGH SCHOOL <input onChange={ this.onChange18 } value={ this.state.text18 } /></div>
          				<div>HUDL PROFILE <input onChange={ this.onChange19 } value={ this.state.text19 } /></div>
       				 </div>
    			</div>
    			<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ACADEMIC INFORMATION</h4>
            			<div>GPA <input onChange={ this.onChange20 } value={ this.state.text20 } /></div>
          				<div>ACT <input onChange={ this.onChange21 } value={ this.state.text21 } /></div>
          				<div>CLASS RANK <input onChange={ this.onChange22 } value={ this.state.text22 } /></div>
       				</div>
    			</div>
    		</div>
    	</div>
    	
        <form className="text-center" onSubmit={ this.handleSubmit }>
          
          <button className="btn btn-default btn-large">NEXT</button>
        </form>
      </section>
    );
  }
});

React.render(<TodoApp3 />, document.getElementById('generalInformation'));