var PlayerProfile = React.createClass({
  render: function() {
    var _this = this;
    var createItem = function(item, index) {
      return (
        <div key={ index }>
          <h1>Profile</h1>
          <div>First: { item.first /**this ".name" changes the attribute displayed in the todo list */ }</div>
          <div>Last:{ item.position }</div>
          <div>Phone:{ item.height}</div>
          
        </div>
      );
    };
    return <div>{ this.props.prospects.map(createItem) }</div>;
  }
});

var ProfileViewPage = React.createClass ({
  mixins: [ReactFireMixin],

  componentWillMount: function() {
    var firebaseRef = new Firebase('https://sweltering-fire-7944.firebaseio.com');
    this.bindAsArray(firebaseRef.limitToLast(25), 'prospects');
  },

  

  render: function() {
    return (
      <section id="page">
    	<div className="container">
    		<div className="row">
    			<div className="col-sm-4">
        			<PlayerProfile prospects={ this.state.prospects } />
      			</div>
      		</div>
      	</div>
      </section>
    );
  }
});


ReactDOM.render(<ProfileViewPage />,
    document.getElementById('profileView')
);