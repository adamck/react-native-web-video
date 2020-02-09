"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Video = void 0;

var _react = _interopRequireWildcard(require("react"));

var _openFullscreen = require("./utils/open-fullscreen");

var _closeFullscreen = require("./utils/close-fullscreen");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Video =
/*#__PURE__*/
function (_Component) {
  _inherits(Video, _Component);

  function Video() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Video)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_root", (0, _react.createRef)());

    _defineProperty(_assertThisInitialized(_this), "setNativeProps", function () {});

    _defineProperty(_assertThisInitialized(_this), "seek", function (time, _) {
      var element = _this._root.current;

      if (element) {
        element.currentTime = time;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "save", function () {
      console.log("Saving in local..");
      return Promise.resolve();
    });

    _defineProperty(_assertThisInitialized(_this), "presentFullscreenPlayer", function () {
      var element = _this._root.current;

      if (element) {
        (0, _openFullscreen.openFullscreen)(element);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dismissFullscreenPlayer", function () {
      (0, _closeFullscreen.closeFullscreen)();
    });

    _defineProperty(_assertThisInitialized(_this), "_onProgress", function () {
      var element = _this._root.current;

      if (_this.props.onProgress && element) {
        _this.props.onProgress({
          currentTime: element.currentTime,
          // @todo add support for these values
          playableDuration: 0,
          seekableDuration: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onLoadStart", function () {
      if (_this.props.onLoadStart) {
        _this.props.onLoadStart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onLoad", function () {
      var element = _this._root.current;

      if (_this.props.onLoad && element) {
        _this.props.onLoad({
          canPlayFastForward: true,
          canPlayReverse: true,
          canPlaySlowForward: true,
          canStepBackward: true,
          canStepForward: true,
          canPlaySlowReverse: true,
          currentTime: element.currentTime,
          duration: element.duration,
          naturalSize: {
            height: element.videoHeight,
            width: element.videoWidth,
            orientation: "horizontal"
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onError", function (error) {
      if (_this.props.onError) {
        _this.props.onError({
          error: {
            '': '',
            errorString: error instanceof Error ? error.message : "Unexpected error"
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onSeek", function () {
      var element = _this._root.current;

      if (_this.props.onSeek && element) {
        _this.props.onSeek({
          currentTime: element.currentTime,
          // @todo add support for these values
          seekTime: 0,
          target: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "_onEnd", function () {
      if (_this.props.onEnd) {
        _this.props.onEnd();
      }
    });

    return _this;
  }

  _createClass(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          fullscreen = _this$props.fullscreen,
          rate = _this$props.rate,
          seek = _this$props.seek;
      var element = this._root.current;

      if (element) {
        if (fullscreen) {
          (0, _openFullscreen.openFullscreen)(element);
        }

        element.addEventListener("progress", this._onProgress);
        element.addEventListener("seeking", this._onSeek);
        element.addEventListener("ended", this._onEnd);

        if (rate) {
          element.playbackRate = rate;
        }

        if (seek) {
          this.seek(seek);
        }
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          fullscreen = _this$props2.fullscreen,
          rate = _this$props2.rate,
          seek = _this$props2.seek,
          currentTime = _this$props2.currentTime,
          paused = _this$props2.paused,
          muted = _this$props2.muted;
      var element = this._root.current;

      if (element) {
        if (fullscreen !== prevProps.fullscreen) {
          if (fullscreen) {
            (0, _openFullscreen.openFullscreen)(element);
          } else {
            (0, _closeFullscreen.closeFullscreen)();
          }
        }

        if (rate !== prevProps.rate && rate) {
          element.playbackRate = rate;

          if (this.props.onPlaybackRateChange) {
            this.props.onPlaybackRateChange({
              playbackRate: rate
            });
          }
        }

        if (seek !== prevProps.seek && seek) {
          element.currentTime = seek;
        }

        if (currentTime !== prevProps.currentTime && currentTime) {
          element.currentTime = currentTime;
        }

        if (paused !== prevProps.paused && paused !== undefined) {
          if (paused) {
            element.pause();
          } else {
            element.play();
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          volume = _this$props3.volume,
          muted = _this$props3.muted,
          controls = _this$props3.controls,
          paused = _this$props3.paused,
          style = _this$props3.style;
      return (0, _react.createElement)('video', {
        src: this._url,
        onLoadStart: this._onLoadStart,
        onLoadedData: this._onLoad,
        onError: this._onError,
        onProgress: this._onProgress,
        onSeeking: this._onSeek,
        onEnded: this._onEnd,
        onLoadedMetadata: this.props.onTimedMetadata,
        onCanPlay: this.props.onReadyForDisplay,
        onStalled: this.props.onPlaybackStalled,
        volume: volume,
        controls: controls,
        ref: this._root,
        style: style,
        paused: paused,
        muted: muted,
        autoPlay: true
      });
    }
  }, {
    key: "_url",
    get: function get() {
      var source = this.props.source;
      return typeof source !== "number" ? source.uri : source;
    }
  }]);

  return Video;
}(_react.Component);

exports.Video = Video;
var _default = Video;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WaWRlby50c3giXSwibmFtZXMiOlsiVmlkZW8iLCJ0aW1lIiwiXyIsImVsZW1lbnQiLCJfcm9vdCIsImN1cnJlbnQiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInByb3BzIiwib25Qcm9ncmVzcyIsInBsYXlhYmxlRHVyYXRpb24iLCJzZWVrYWJsZUR1cmF0aW9uIiwib25Mb2FkU3RhcnQiLCJvbkxvYWQiLCJjYW5QbGF5RmFzdEZvcndhcmQiLCJjYW5QbGF5UmV2ZXJzZSIsImNhblBsYXlTbG93Rm9yd2FyZCIsImNhblN0ZXBCYWNrd2FyZCIsImNhblN0ZXBGb3J3YXJkIiwiY2FuUGxheVNsb3dSZXZlcnNlIiwiZHVyYXRpb24iLCJuYXR1cmFsU2l6ZSIsImhlaWdodCIsInZpZGVvSGVpZ2h0Iiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwib3JpZW50YXRpb24iLCJlcnJvciIsIm9uRXJyb3IiLCJlcnJvclN0cmluZyIsIkVycm9yIiwibWVzc2FnZSIsIm9uU2VlayIsInNlZWtUaW1lIiwidGFyZ2V0Iiwib25FbmQiLCJmdWxsc2NyZWVuIiwicmF0ZSIsInNlZWsiLCJhZGRFdmVudExpc3RlbmVyIiwiX29uUHJvZ3Jlc3MiLCJfb25TZWVrIiwiX29uRW5kIiwicGxheWJhY2tSYXRlIiwicHJldlByb3BzIiwicGF1c2VkIiwibXV0ZWQiLCJvblBsYXliYWNrUmF0ZUNoYW5nZSIsInVuZGVmaW5lZCIsInBhdXNlIiwicGxheSIsInZvbHVtZSIsImNvbnRyb2xzIiwic3R5bGUiLCJzcmMiLCJfdXJsIiwiX29uTG9hZFN0YXJ0Iiwib25Mb2FkZWREYXRhIiwiX29uTG9hZCIsIl9vbkVycm9yIiwib25TZWVraW5nIiwib25FbmRlZCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJvblRpbWVkTWV0YWRhdGEiLCJvbkNhblBsYXkiLCJvblJlYWR5Rm9yRGlzcGxheSIsIm9uU3RhbGxlZCIsIm9uUGxheWJhY2tTdGFs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REQ7QUFxQkE7Ozt3QkE1TCtDO0FBQUEsVUFDdkNDLE1BRHVDLEdBQzVCLEtBQUs5RCxLQUR1QixDQUN2QzhELE1BRHVDO0FBRS9DLGFBQU8sT0FBT0EsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBTSxDQUFDQyxHQUFwQyxHQUEwQ0QsTUFBakQ7QUFDQTs7OztFQU55QkUsZ0I7OztlQWtNWjNFLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQsIFJlYWN0RXZlbnRIYW5kbGVyLCBjcmVhdGVSZWYgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBWaWRlb1Byb3BlcnRpZXMgfSBmcm9tICdyZWFjdC1uYXRpdmUtdmlkZW8nO1xuaW1wb3J0IHsgb3BlbkZ1bGxzY3JlZW4gfSBmcm9tICcuL3V0aWxzL29wZW4tZnVsbHNjcmVlbic7XG5pbXBvcnQgeyBjbG9zZUZ1bGxzY3JlZW4gfSBmcm9tICcuL3V0aWxzL2Nsb3NlLWZ1bGxzY3JlZW4nO1xuXG5leHBvcnQgdHlwZSBWaWRlb1NvdXJjZSA9IHsgdXJpPzogc3RyaW5nIH0gfCBudW1iZXJcblxuZXhwb3J0IGNsYXNzIFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFZpZGVvUHJvcGVydGllcz4ge1xuXHRwcml2YXRlIF9yb290ID0gY3JlYXRlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KCk7XG5cblx0cHJpdmF0ZSBnZXQgX3VybCgpOiBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGNvbnN0IHsgc291cmNlIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiB0eXBlb2Ygc291cmNlICE9PSBcIm51bWJlclwiID8gc291cmNlLnVyaSA6IHNvdXJjZVxuXHR9XG5cblx0cHVibGljIHNldE5hdGl2ZVByb3BzID0gKCkgPT4geyB9XG5cblx0cHVibGljIHNlZWsgPSAodGltZTogbnVtYmVyLCBfPzogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIHNhdmUgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgaW4gbG9jYWwuLlwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH1cblxuXHRwdWJsaWMgcHJlc2VudEZ1bGxzY3JlZW5QbGF5ZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0b3BlbkZ1bGxzY3JlZW4oZWxlbWVudCk7XG5cdFx0fVxuXHR9XG5cblx0cHVibGljIGRpc21pc3NGdWxsc2NyZWVuUGxheWVyID0gKCkgPT4ge1xuXHRcdGNsb3NlRnVsbHNjcmVlbigpO1xuXHR9XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuLCByYXRlLCBzZWVrIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKGZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0b3BlbkZ1bGxzY3JlZW4oZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHRoaXMuX29uUHJvZ3Jlc3MpXG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWVraW5nXCIsIHRoaXMuX29uU2Vlayk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLl9vbkVuZCk7XG5cblx0XHRcdGlmIChyYXRlKSB7XG5cdFx0XHRcdGVsZW1lbnQucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlZWspIHtcblx0XHRcdFx0dGhpcy5zZWVrKHNlZWspXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogVmlkZW9Qcm9wZXJ0aWVzKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuLCByYXRlLCBzZWVrLCBjdXJyZW50VGltZSwgcGF1c2VkLCBtdXRlZCB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmIChmdWxsc2NyZWVuICE9PSBwcmV2UHJvcHMuZnVsbHNjcmVlbikge1xuXHRcdFx0XHRpZiAoZnVsbHNjcmVlbikge1xuXHRcdFx0XHRcdG9wZW5GdWxsc2NyZWVuKGVsZW1lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsb3NlRnVsbHNjcmVlbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyYXRlICE9PSBwcmV2UHJvcHMucmF0ZSAmJiByYXRlKSB7XG5cdFx0XHRcdGVsZW1lbnQucGxheWJhY2tSYXRlID0gcmF0ZTtcblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5vblBsYXliYWNrUmF0ZUNoYW5nZSkge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRcdFx0cGxheWJhY2tSYXRlOiByYXRlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlZWsgIT09IHByZXZQcm9wcy5zZWVrICYmIHNlZWspIHtcblx0XHRcdFx0ZWxlbWVudC5jdXJyZW50VGltZSA9IHNlZWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjdXJyZW50VGltZSAhPT0gcHJldlByb3BzLmN1cnJlbnRUaW1lICYmIGN1cnJlbnRUaW1lKSB7XG5cdFx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhdXNlZCAhPT0gcHJldlByb3BzLnBhdXNlZCAmJiBwYXVzZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAocGF1c2VkKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfb25Qcm9ncmVzcyA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmICh0aGlzLnByb3BzLm9uUHJvZ3Jlc3MgJiYgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblByb2dyZXNzKHtcblx0XHRcdFx0Y3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cblx0XHRcdFx0Ly8gQHRvZG8gYWRkIHN1cHBvcnQgZm9yIHRoZXNlIHZhbHVlc1xuXHRcdFx0XHRwbGF5YWJsZUR1cmF0aW9uOiAwLFxuXHRcdFx0XHRzZWVrYWJsZUR1cmF0aW9uOiAwLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfb25Mb2FkU3RhcnQgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25Mb2FkU3RhcnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25Mb2FkU3RhcnQoKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25Mb2FkOiBSZWFjdEV2ZW50SGFuZGxlcjxIVE1MVmlkZW9FbGVtZW50PiA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmICh0aGlzLnByb3BzLm9uTG9hZCAmJiBlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uTG9hZCh7XG5cdFx0XHRcdGNhblBsYXlGYXN0Rm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuUGxheVJldmVyc2U6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlTbG93Rm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuU3RlcEJhY2t3YXJkOiB0cnVlLFxuXHRcdFx0XHRjYW5TdGVwRm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuUGxheVNsb3dSZXZlcnNlOiB0cnVlLFxuXHRcdFx0XHRjdXJyZW50VGltZTogZWxlbWVudC5jdXJyZW50VGltZSxcblx0XHRcdFx0ZHVyYXRpb246IGVsZW1lbnQuZHVyYXRpb24sXG5cdFx0XHRcdG5hdHVyYWxTaXplOiB7XG5cdFx0XHRcdFx0aGVpZ2h0OiBlbGVtZW50LnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdHdpZHRoOiBlbGVtZW50LnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0b3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkVycm9yID0gKGVycm9yOiBhbnkpID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkVycm9yKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRXJyb3Ioe1xuXHRcdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRcdCcnOiAnJyxcblx0XHRcdFx0XHRlcnJvclN0cmluZzogZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVuZXhwZWN0ZWQgZXJyb3JcIixcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uU2VlayA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmICh0aGlzLnByb3BzLm9uU2VlayAmJiBlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2Vlayh7XG5cdFx0XHRcdGN1cnJlbnRUaW1lOiBlbGVtZW50LmN1cnJlbnRUaW1lLFxuXG5cdFx0XHRcdC8vIEB0b2RvIGFkZCBzdXBwb3J0IGZvciB0aGVzZSB2YWx1ZXNcblx0XHRcdFx0c2Vla1RpbWU6IDAsXG5cdFx0XHRcdHRhcmdldDogMCxcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkVuZCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkVuZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVuZCgpO1xuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIoKSB7XG5cdFx0Y29uc3QgeyB2b2x1bWUsIG11dGVkLCBjb250cm9scywgcGF1c2VkLCBzdHlsZSB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiAoXG5cdFx0XHRjcmVhdGVFbGVtZW50KCd2aWRlbycsIHtcblx0XHRcdFx0c3JjOiB0aGlzLl91cmwsXG5cdFx0XHRcdG9uTG9hZFN0YXJ0OiB0aGlzLl9vbkxvYWRTdGFydCxcblx0XHRcdFx0b25Mb2FkZWREYXRhOiB0aGlzLl9vbkxvYWQsXG5cdFx0XHRcdG9uRXJyb3I6IHRoaXMuX29uRXJyb3IsXG5cdFx0XHRcdG9uUHJvZ3Jlc3M6IHRoaXMuX29uUHJvZ3Jlc3MsXG5cdFx0XHRcdG9uU2Vla2luZzogdGhpcy5fb25TZWVrLFxuXHRcdFx0XHRvbkVuZGVkOiB0aGlzLl9vbkVuZCxcblx0XHRcdFx0b25Mb2FkZWRNZXRhZGF0YTogdGhpcy5wcm9wcy5vblRpbWVkTWV0YWRhdGEsXG5cdFx0XHRcdG9uQ2FuUGxheTogdGhpcy5wcm9wcy5vblJlYWR5Rm9yRGlzcGxheSxcblx0XHRcdFx0b25TdGFsbGVkOiB0aGlzLnByb3BzLm9uUGxheWJhY2tTdGFsbGVkLFxuXHRcdFx0XHR2b2x1bWUsXG5cdFx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0XHRyZWY6IHRoaXMuX3Jvb3QsXG5cdFx0XHRcdHN0eWxlLFxuXHRcdFx0XHRwYXVzZWQsXG5cdFx0XHRcdG11dGVkLFxuXHRcdFx0XHRhdXRvUGxheTogdHJ1ZVxuXHRcdFx0fSlcblx0XHQpXG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iXX0=