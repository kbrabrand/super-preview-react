var React = require('react');
var SuperPreviewClient = require('super-preview-client');

var client = new SuperPreviewClient();

module.exports = React.createClass({
    getInitialState: function() {
        return {
            loading: true
        };
    },

    propTypes: {
        url: React.PropTypes.string.isRequired,
        compressed: React.PropTypes.string
    },

    render: function render() {
        var imageData = client.assemble(this.props.compressed);

        return React.createElement('img', {
            onLoad: this.handleLoadEvent,
            className: (this.state.loading ? "loading" : '' ),
            style: {
                width: this.props.width + 'px',
                height: this.props.height + 'px',
                backgroundImage: 'url(data:image/jpeg;base64,' + imageData.base64 + ')'
            }
        });
    }
})