var React = require('react');
var SuperPreviewClient = require('super-preview-client');

var client = new SuperPreviewClient();

module.exports = React.createClass({
    propTypes: {
        src: React.PropTypes.string.isRequired,
        compressed: React.PropTypes.string
    },

    render: function render() {
        console.log(client.assemble(this.props.compressed));

        return (
            <img/>
        );
    }
})