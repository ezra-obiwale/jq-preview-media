/**
 * @author Ezra Obiwale <contact@ezraobiwale.com>
 * @version 1.0.0
 */
(function () {
    var media, callback,
            preview = function () {
                callback = callback || function () {};
                var elem = this, $media = $(media);
                // no media specified: use siblings
                if (!$media.length)
                    $media = $(this).siblings('img,audio,video');
                // still no media: log error and cancel
                if (!$media.length) {
                    console.error('No target media element for preview!');
                    return callback.call(this);
                }
                // no file selected: remove picture from media and cancel
                if (!this.files.length) {
                    // restore old src if operated upon before
                    if ($media.hasClass('jq-previewed'))
                        $media.removeClass('jq-previewed')
                                .attr('src', $media.data('oldSrc'));
                    return callback.call(this);
                }
                // process selection(s)
                if (typeof (window.FileReader) !== "undefined") {
                    var reader = new FileReader(), URL = window.URL || window.webkitURL;
                    reader.onload = function (e) {
                        if (callback && typeof callback === 'function') {
                            callback.call(elem, this.result);
                        }
                    };
                    reader.readAsDataURL(this.files[0]);
                    // save old src, if not already saved, for if media is canceled
                    if (!$media.data('oldSrc'))
                        $media.data('oldSrc', $media.attr('src'));
                    // mark as previewed
                    $media.addClass('jq-previewed')
                            .attr('src', URL.createObjectURL(this.files[0]));
                }
                else {
                    $media.replaceWith('<strong>Your browser does not support media preview</strong>');
                }

            };
    /**
     * Enables previewing media files before sending to server
     * 
     * @param {string}|{object} previewElem The element id or class on which to preview the media
     * @param {function} callback The function call after previewing. this object is the file input 
     * element and parameter is window.FileReader
     * @returns {jQuery}
     */
    $.fn.previewMedia = function (previewElem, func) {
        media = previewElem;
        callback = func;
        var isObj = false;
        // check object parameter
        if ($.isPlainObject(previewElem)) {
            media = previewElem.target;
            if (previewElem.callback) callback = previewElem.callback;
            isObj = true;
        }
        else if ($.isFunction(previewElem)) {
            media = null;
            callback = previewElem;
        }
        return this.each(function () {
            var selector = isObj
                    ? previewElem.selector || 'input[type="file"]'
                    : 'input[type="file"]';
            if (isObj || this.type !== 'file')
                $(this).on('change', selector, preview);
            else $(this).on('change', preview);
        });
    };
})(window);