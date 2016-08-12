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

        return React.createElement('div', {
            onLoad: this.handleLoadEvent,
            className: 'super-preview ' + (this.state.loading ? "super-preview--loading" : '' ),
            style: {
                paddingBottom: ((this.props.height / this.props.width) * 100) + '%'
            }
        }, React.createElement('img', {
            className: 'super-preview__image',
            style: {
                backgroundImage: 'url(data:image/jpeg;base64,' + imageData.base64 + ')'
            }
        }));
    }
})