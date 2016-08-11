var React = require('react');
var SuperPreviewClient = require('super-preview-client');

var client = new SuperPreviewClient();

module.exports = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired,
        compressed: React.PropTypes.string
    },

    render: function render() {
        var div = React.createFactory('div');

        return div({ className: 'my-div' });
    }
})