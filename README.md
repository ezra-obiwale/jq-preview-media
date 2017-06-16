# jq-preview-media
A JQuery plugin to enable preview of media files (images, videos, audios) before they are sent to the server.

## Usage

### HTML

#### Image File
```html
<img src="#" id="preview" />
<input type="file" id="file" accept="image/*" />
```

#### Video File
```html
<video id="preview" controls autoplay>
Your browser does not support the video element.
</video>
<input type="file" id="file" accept="video/*" />
```

#### Audio File
```html
<audio  id="preview" controls autoplay>
Your browser does not support the audio element.
</audio>
<input type="file" id="file" accept="audio/*" />
```

### Javascript

```javascript
$('#file').previewMedia('#target');
```

To get the a url string representing the media or just know when the media has been changed, pass a callback as the second parameter.
The callback would be passed a url string if a file is selected or nothing if nothing was selected.

```javascript
$('#file').previewMedia('#target', function(url){
    // process url
});
```

If no preview element is provided, sibling img, audio and video elements are used automatically.

```javascript
$('#file).previewMedia(); // preview on sibling media element
```

In the case of dynamically loaded content,

```javascript
$('body').previewMedia({
    selector: '#file', // file input element
    target: '#target' // img, audio or video element,
    callback: function(url) {}
}, callback);
```

The callback function may be put in the first parameter object or passed as the second parameter.

To handle all files changes,

```javascript
$('body').previewMedia();
```

The above assumes that each file input element has a sibling media element.

The optional callback can be passed as the only parameter:

```javascript
$('#file').previewMedia(callback);

// or for dynamically loaded file elements

$('body').previewMedia(callback);
```