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
$('#file').previewMedia('#preview');
```

When the file is to be uploaded with ajax, provide a function as the second parameter. This would be
 provided with a data parameter containing the file content.
```javascript
$('#file').previewMedia('#preview', function(data){
    // send data to server to be saved as the content
});
```

If no preview element is provided, sibling img, audio and video elements are used automatically.