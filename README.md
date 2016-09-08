React component for Super Preview
===

A React component that wraps the super previw client in order to facilitate implementing it in your React app.

```js
var SuperPreviewReact = require('super-preview-react');

class View extends React.Component {
    render() {
        return (
            <SuperPreviewReact
                url="http://example.com/full-size-image.jpeg"
                compressed="42:33:..." // Hex data after the second :
                width="1280"
                height="1024"
            />
        );
    }
}
```

The component uses the Super Preview client to assemble the base64 string for the image and show this until the `onLoad` event is triggered on the image, letting us know that the full image has been loaded. When this happens a class is added to the image wrapper and css can be used to hide the background.

## Necessary CSS
```css
.super-preview {
    width: 100%;
    position: relative;
}

.super-preview--loading {
    background-size: cover;
    -webkit-filter: blur(35px);
    -moz-filter: blur(35px);
    -o-filter: blur(35px);
    -ms-filter: blur(35px);
    filter: blur(35px);
}

.super-preview__image {
    background-size: cover;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
```

##  License

Copyright (c) 2015-2016,
Kristoffer Brabrand kristoffer@brabrand.no

Licensed under the MIT License
