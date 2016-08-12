var React = require('react');
var SuperPreviewClient = require('super-preview-client');

var client = new SuperPreviewClient();

module.exports = React.createClass({
    getInitialState: function() {
        return {
            loading: true
        }
    }

    propTypes: {
        src: React.PropTypes.string.isRequired,
        compressed: React.PropTypes.string
    },

    render: function render() {
        var imageData = client.assemble(compressed);

        var div = React.createFactory('img', {
            onLoad: this.handleLoadEvent,
            className={ this.state.loading ? "loading" : '' }
            style: 'background-image:url(data:image/jpeg;base64,' + imageData.base64 + ')'
        });

        return div;
    }
})