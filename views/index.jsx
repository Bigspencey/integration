var React = require('react');
var Layout = require('./layout');

var HelloMessage = React.createClass({
  	render: function() {
    	return (
    		<Layout name={this.props.name}>
    			<div>Hello {this.props.name}</div>
    		</Layout>
    	)
   	}
});

module.exports = HelloMessage;