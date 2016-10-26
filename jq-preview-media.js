(function () {
    /**
     * Enables previewing media files before sending to server
     * 
     * @param {string} previewElem The element id or class on which to preview the media
     * @param {function} callback The function call after previewing. this object is the file input 
     * element and parameter is window.FileReader
     * @returns {jQuery}
     */
    $.fn.previewMedia = function (previewElem, callback) {
        return this.each(function () {
            $(this).change(function () {
                var elem = this;
                if (typeof (window.FileReader) !== "undefined") {
                    var reader = new FileReader(), URL = window.URL || window.webkitURL;
                    reader.onload = function (e) {
                        if (callback && typeof callback === 'function') {
                            callback.call(elem, this.result);
                        }
                    };
                    reader.readAsDataURL($(this)[0].files[0]);
                    if (previewElem) {
                        $(previewElem).attr('src', URL.createObjectURL($(this)[0].files[0]));
                    }
                }
            });
        });
    };
})(window);