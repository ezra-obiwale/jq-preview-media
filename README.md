## jq-preview-media
======
A JQuery plugin to enable preview of media files (images, videos, audios) before they are sent to the server.

##Usage
======

###HTML

####Image File
```html
<img src="#" id="preview" />
<input type="file" id="file" />
```

####Video File
```html
<video id="preview" controls autoplay>
Your browser does not support the video element.
</video>
<input type="file" id="file" />
```

#### Audio File
```html
<audio  id="preview" controls autoplay/>
Your browser does not support the audio element.
</audio>
```

###JS
```javascript
$('#file').previewMedia('#preview');
```

When the file is to be uploaded with ajax, provide a function as the second parameter which is provide
with a data parameter containing the file content
```javascript
$('#file').previewMedia('#preview', function(data){
    // send data to server to be saved as the content
});
```