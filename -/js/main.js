// head {
var __nodeId__ = "eyecon_colorpicker__main";
var __nodeNs__ = "eyecon_colorpicker";
// }

(function (__nodeNs__, __nodeId__) {
    $.widget(__nodeNs__ + "." + __nodeId__, {
        options: {},

        _create: function () {
            this.bind();
        },

        _setOption: function (key, value) {
            $.Widget.prototype._setOption.apply(this, arguments);
        },

        bind: function () {
            var widget = this;

            $(widget.element).ColorPicker({
                eventName: "click",
                color:     '#' + widget.options.color,

                onChange: function (hsb, hex, rgb, el) {
                    $(widget.options.targetSelector).css("background-color", "#" + hex);

                    widget._trigger("_onchange", null, {
                        hsb:     hsb,
                        hex:     hex,
                        rgb:     rgb,
                        element: widget.element
                    });
                },

                onShow: function () {

                },

                onHide: function () {
                    widget._trigger("_onhide", null, {
                        element: widget.element
                    });
                },

                onSubmit: function (hsb, hex, rgb, el) {
                    $(widget.element).ColorPickerHide();

                    var requestData = widget.options.data;

                    $.extend(requestData, {value: hex});

                    request(widget.options.path, requestData);

                    widget._trigger("_onsubmit", null, {
                        hsb:     hsb,
                        hex:     hex,
                        rgb:     rgb,
                        element: widget.element
                    });
                }
            });
        }
    });
})(__nodeNs__, __nodeId__);
