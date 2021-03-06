var React = require('react');
var Layout = require('./layout');

var Error = React.createClass({
	render: function () {
		return (
			<Layout name={this.props.name}>
				<h1>{this.props.message}</h1>
				<h2>{this.props.error.status}</h2>
				<pre>{this.props.error.stack}</pre>
			</Layout>
		)
	}
});

module.exports = Error;