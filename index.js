var React = require('react');
var SuperPreview = require('super-preview');
var superPreview = new SuperPreview();

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

    handleLoadEvent: function(e) {
        this.setState({
            loading: false
        });
    },

    render: function render() {
        var imageData = superPreview.assemble(this.props.compressed);

        return React.createElement('div', {
            onLoad: this.handleLoadEvent,
            className: 'super-preview ' + (this.state.loading ? "super-preview--loading" : '' ),
            style: {
                paddingBottom: ((this.props.height / this.props.width) * 100) + '%'
            }
        }, React.createElement('img', {
            className: 'super-preview__image',
            src: this.props.url,
            style: {
                backgroundImage: 'url(data:image/jpeg;base64,' + imageData.base64 + ')'
            }
        }));
    }
})