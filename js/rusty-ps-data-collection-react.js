/** @jsx React.DOM */

var ContactInfoRow = React.createClass({
    render: function() {
        var contactProperties = ['FIRST NAME', 
        				  'LAST NAME',
        				  'PHONE (ATHLETE)',
        				  'EMAIL (ATHLETE OR PARENT)',
        				  'ADDRESS','CITY/STATE/ZIP',
        				  'AAU COACH NAME',
        				  'AAU COACH EMAIL',
        				  'AAU COACH PHONE', 
        				  'HS COACH NAME',
          				  'HS COACH EMAIL',
          				  'HS COACH PHONE'];
        var lastCategory = null;
    	this.props.products.forEach(function(product) {
      if (product.category !== lastCategory) {
        rows.push(<ProductCategoryRow category={product.category} key={product.category} />);
      }
      rows.push(<ProductRow product={product} key={product.name} />);
      lastCategory = product.category;
    });
        return (
        		<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>CONTACT INFORMATION</h4>
            			<div>{contactProperties}<input onChange={ this.onChange } value={ this.state.text } /></div>
            		</div>
            	</div>;
    }
});

var AthleticInfoRow = React.createClass({
    render: function() {
        var athleticProperties = ['ATHLETIC INFORMATION',
            			  'GRADE/CLASS',
            			  'HEIGHT',
            			  'WEIGHT',
            			  'VERTICAL JUMP', 
            			  'POSITION',
            			  'AAU PROGRAM',
            			  'AAU JERSEY',
            			  'HIGH SCHOOL',
            			  'HUDL PROFILE'];
        return (
        		<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ATHLETIC INFORMATION</h4>
            			<div>{athleticProperties}<input onChange={ this.onChange } value={ this.state.text } /></div>
            		</div>
            	</div>;
    }
});

var AcademicInfoRow = React.createClass({
    render: function() {
        var athleticProperties = ['GPA',
        						  'ACT',
        						  'CLASS RANK'];
        return (
        		<div className="col-md-4 input-box">
    				<div className="input-container">
            			<h4>ACADEMIC INFORMATION</h4>
            			<div>{properties}<input onChange={ this.onChange } value={ this.state.text } /></div>
            		</div>
            	</div>;
    }
});






var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

var PLAYERS = [
	{firstName:'Rusty', lastName:'Hutchison', phone:'5555555555', email:'rusty@gmail.com', address:'2314 Main', 
	cityStZip:'Ankeny', aauCoach:'Ralph', aauCoachEmail:'ralph@ralph.com', aauCoachPhone:'6666666666', 
	hsCoach:'Ronnie', hsCoachEmail:'Ronnie@ronnie.com',hsCoachPhone:'7777777777'},
	{firstName:'Rusty2', lastName:'Hutchison2', phone:'5555555552', email:'rusty@gmail.com2', address:'2314 Main2', 
	cityStZip:'Ankeny2', aauCoach:'Ralph2', aauCoachEmail:'ralph@ralph.com2', aauCoachPhone:'6666666662', 
	hsCoach:'Ronnie2', hsCoachEmail:'Ronnie@ronnie.com2',hsCoachPhone:'7777777772'},
];

var playerCategories [
	{firstName:'FIRST NAME', lastName:'LAST NAME', phone:'PHONE (ATHLETE)', email:'EMAIL (ATHLETE OR PARENT)', address:'ADDRESS', 
	cityStZip:'CITY/STATE/ZIP', aauCoach:'AAU COACH NAME', aauCoachEmail:'AAU COACH EMAIL', aauCoachPhone:'AAU COACH PHONE', 
	hsCoach:'HS COACH NAME', hsCoachEmail:'HS COACH EMAIL',hsCoachPhone:'HS COACH PHONE'
];
 
React.render(
    <ContactInfoRow products={PRODUCTS} />,
    document.getElementById('container2')
);