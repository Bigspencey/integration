var React = require('react');

var Layout = React.createClass({
	render: function () {
		return (
			<html lang="en">
				<head>
					<meta httpEquiv="Content-Type" content="text/html;charset=utf-8" />
					<title>{this.props.name}</title>
				</head>
				<body>
					{this.props.children}
				</body>
			</html>
		)
	}
});

module.exports = Layout;