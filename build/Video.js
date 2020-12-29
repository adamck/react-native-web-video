"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.Video = void 0;

var _react = _interopRequireWildcard(require("react"));

var _openFullscreen = require("./utils/open-fullscreen");

var _closeFullscreen = require("./utils/close-fullscreen");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Video = /*#__PURE__*/function (_Component) {
  _inherits(Video, _Component);

  var _super = _createSuper(Video);

  function Video() {
    var _this;

    _classCallCheck(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

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
            "": "",
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

    _defineProperty(_assertThisInitialized(_this), "render", function () {
      var _this$props = _this.props,
          volume = _this$props.volume,
          muted = _this$props.muted,
          controls = _this$props.controls,
          paused = _this$props.paused,
          style = _this$props.style,
          poster = _this$props.poster;
      return (0, _react.createElement)("video", {
        src: _this._url,
        onLoadStart: _this._onLoadStart,
        onLoadedData: _this._onLoad,
        onError: _this._onError,
        onProgress: _this._onProgress,
        onSeeking: _this._onSeek,
        onEnded: _this._onEnd,
        onLoadedMetadata: _this.props.onTimedMetadata,
        onCanPlay: _this.props.onReadyForDisplay,
        onStalled: _this.props.onPlaybackStalled,
        volume: volume,
        controls: controls,
        ref: _this._root,
        paused: paused,
        muted: muted,
        autoPlay: !paused,
        styles: style,
        poster: poster,
        playsinline: true
      });
    });

    return _this;
  }

  _createClass(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props2 = this.props,
          fullscreen = _this$props2.fullscreen,
          rate = _this$props2.rate,
          seek = _this$props2.seek;
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
      var _this$props3 = this.props,
          fullscreen = _this$props3.fullscreen,
          rate = _this$props3.rate,
          seek = _this$props3.seek,
          currentTime = _this$props3.currentTime,
          paused = _this$props3.paused;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WaWRlby50c3giXSwibmFtZXMiOlsiVmlkZW8iLCJ0aW1lIiwiXyIsImVsZW1lbnQiLCJfcm9vdCIsImN1cnJlbnQiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsInByb3BzIiwib25Qcm9ncmVzcyIsInBsYXlhYmxlRHVyYXRpb24iLCJzZWVrYWJsZUR1cmF0aW9uIiwib25Mb2FkU3RhcnQiLCJvbkxvYWQiLCJjYW5QbGF5RmFzdEZvcndhcmQiLCJjYW5QbGF5UmV2ZXJzZSIsImNhblBsYXlTbG93Rm9yd2FyZCIsImNhblN0ZXBCYWNrd2FyZCIsImNhblN0ZXBGb3J3YXJkIiwiY2FuUGxheVNsb3dSZXZlcnNlIiwiZHVyYXRpb24iLCJuYXR1cmFsU2l6ZSIsImhlaWdodCIsInZpZGVvSGVpZ2h0Iiwid2lkdGgiLCJ2aWRlb1dpZHRoIiwib3JpZW50YXRpb24iLCJlcnJvciIsIm9uRXJyb3IiLCJlcnJvclN0cmluZyIsIkVycm9yIiwibWVzc2FnZSIsIm9uU2VlayIsInNlZWtUaW1lIiwidGFyZ2V0Iiwib25FbmQiLCJ2b2x1bWUiLCJtdXRlZCIsImNvbnRyb2xzIiwicGF1c2VkIiwic3R5bGUiLCJwb3N0ZXIiLCJzcmMiLCJfdXJsIiwiX29uTG9hZFN0YXJ0Iiwib25Mb2FkZWREYXRhIiwiX29uTG9hZCIsIl9vbkVycm9yIiwiX29uUHJvZ3Jlc3MiLCJvblNlZWtpbmciLCJfb25TZWVrIiwib25FbmRlZCIsIl9vbkVuZCIsIm9uTG9hZGVkTWV0YWRhdGEiLCJvblRpbWVkTWV0YWRhdGEiLCJvbkNhblBsYXkiLCJvblJlYWR5Rm9yRGlzcGxheSIsIm9uU3RhbGxlZCIsIm9uUGxheWJhY2tTdGFsbGVkIiwicmVmIiwiYXV0b1BsYXkiLCJzdHlsZXMiLCJwbGF5c2lubGluZSIsImZ1bGxzY3JlZW4iLCJyYXRlIiwic2VlayIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5YmFja1JhdGUiLCJwcmV2UHJvcHMiLCJvblBsYXliYWNrUmF0ZUNoYW5nZSIsInVuZGVmaW5lZCIsInBhdXNlIiwicGxheSIsInNvdXJjZSIsInVyaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNYUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSSx1Qjs7cUVBT1EsWUFBTSxDQUFFLEM7OzJEQUVsQixVQUFDQyxJQUFELEVBQWVDLENBQWYsRUFBOEI7QUFDM0MsVUFBTUMsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1pBLFFBQUFBLE9BQU8sQ0FBQ0csV0FBUixHQUFzQkwsSUFBdEI7QUFDQTtBQUNELEs7OzJEQUVhLFlBQXFCO0FBQ2xDTSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0EsSzs7OEVBRWdDLFlBQU07QUFDdEMsVUFBTVAsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1osNENBQWVBLE9BQWY7QUFDQTtBQUNELEs7OzhFQUVnQyxZQUFNO0FBQ3RDO0FBQ0EsSzs7a0VBa0VxQixZQUFNO0FBQzNCLFVBQU1BLE9BQU8sR0FBRyxNQUFLQyxLQUFMLENBQVdDLE9BQTNCOztBQUNBLFVBQUksTUFBS00sS0FBTCxDQUFXQyxVQUFYLElBQXlCVCxPQUE3QixFQUFzQztBQUNyQyxjQUFLUSxLQUFMLENBQVdDLFVBQVgsQ0FBc0I7QUFDckJOLFVBQUFBLFdBQVcsRUFBRUgsT0FBTyxDQUFDRyxXQURBO0FBR3JCO0FBQ0FPLFVBQUFBLGdCQUFnQixFQUFFLENBSkc7QUFLckJDLFVBQUFBLGdCQUFnQixFQUFFO0FBTEcsU0FBdEI7QUFPQTtBQUNELEs7O21FQUVzQixZQUFNO0FBQzVCLFVBQUksTUFBS0gsS0FBTCxDQUFXSSxXQUFmLEVBQTRC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RUFBeUQ7QUFDeEQsY0FBSS9CLE1BQUosRUFBWTtBQUNYdkMsWUFBQUEsT0FBTyxDQUFDdUUsS0FBUjtBQUNBLFdBRkQsTUFFTztBQUNOdkUsWUFBQUEsT0FBTyxDQUFDd0UsSUFBUjtBQUNBO0FBQ0Q7QUFDRDtBQUNEOzs7d0JBNUYrQztBQUFBLFVBQ3ZDQyxNQUR1QyxHQUM1QixLQUFLakUsS0FEdUIsQ0FDdkNpRSxNQUR1QztBQUUvQyxhQUFPLE9BQU9BLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQU0sQ0FBQ0MsR0FBcEMsR0FBMENELE1BQWpEO0FBQ0E7Ozs7RUFOeUJFLGdCOzs7ZUFtTVo5RSxLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCBSZWFjdEV2ZW50SGFuZGxlciwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWRlb1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXZpZGVvXCI7XG5pbXBvcnQgeyBvcGVuRnVsbHNjcmVlbiB9IGZyb20gXCIuL3V0aWxzL29wZW4tZnVsbHNjcmVlblwiO1xuaW1wb3J0IHsgY2xvc2VGdWxsc2NyZWVuIH0gZnJvbSBcIi4vdXRpbHMvY2xvc2UtZnVsbHNjcmVlblwiO1xuXG5leHBvcnQgdHlwZSBWaWRlb1NvdXJjZSA9IHsgdXJpPzogc3RyaW5nIH0gfCBudW1iZXI7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFZpZGVvUHJvcGVydGllcyB7fVxuXG5leHBvcnQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcblx0cHJpdmF0ZSBfcm9vdCA9IGNyZWF0ZVJlZjxIVE1MVmlkZW9FbGVtZW50PigpO1xuXG5cdHByaXZhdGUgZ2V0IF91cmwoKTogbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCB7IHNvdXJjZSB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gdHlwZW9mIHNvdXJjZSAhPT0gXCJudW1iZXJcIiA/IHNvdXJjZS51cmkgOiBzb3VyY2U7XG5cdH1cblxuXHRwdWJsaWMgc2V0TmF0aXZlUHJvcHMgPSAoKSA9PiB7fTtcblxuXHRwdWJsaWMgc2VlayA9ICh0aW1lOiBudW1iZXIsIF8/OiBudW1iZXIpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50LmN1cnJlbnRUaW1lID0gdGltZTtcblx0XHR9XG5cdH07XG5cblx0cHVibGljIHNhdmUgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgaW4gbG9jYWwuLlwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH07XG5cblx0cHVibGljIHByZXNlbnRGdWxsc2NyZWVuUGxheWVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdG9wZW5GdWxsc2NyZWVuKGVsZW1lbnQpO1xuXHRcdH1cblx0fTtcblxuXHRwdWJsaWMgZGlzbWlzc0Z1bGxzY3JlZW5QbGF5ZXIgPSAoKSA9PiB7XG5cdFx0Y2xvc2VGdWxsc2NyZWVuKCk7XG5cdH07XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuLCByYXRlLCBzZWVrIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKGZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0b3BlbkZ1bGxzY3JlZW4oZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHRoaXMuX29uUHJvZ3Jlc3MpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Vla2luZ1wiLCB0aGlzLl9vblNlZWspO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5fb25FbmQpO1xuXG5cdFx0XHRpZiAocmF0ZSkge1xuXHRcdFx0XHRlbGVtZW50LnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWVrKSB7XG5cdFx0XHRcdHRoaXMuc2VlayhzZWVrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBWaWRlb1Byb3BlcnRpZXMpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW4sIHJhdGUsIHNlZWssIGN1cnJlbnRUaW1lLCBwYXVzZWQgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRpZiAoZnVsbHNjcmVlbiAhPT0gcHJldlByb3BzLmZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0aWYgKGZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0XHRvcGVuRnVsbHNjcmVlbihlbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbG9zZUZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmF0ZSAhPT0gcHJldlByb3BzLnJhdGUgJiYgcmF0ZSkge1xuXHRcdFx0XHRlbGVtZW50LnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cblx0XHRcdFx0aWYgKHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKHtcblx0XHRcdFx0XHRcdHBsYXliYWNrUmF0ZTogcmF0ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWVrICE9PSBwcmV2UHJvcHMuc2VlayAmJiBzZWVrKSB7XG5cdFx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSBzZWVrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3VycmVudFRpbWUgIT09IHByZXZQcm9wcy5jdXJyZW50VGltZSAmJiBjdXJyZW50VGltZSkge1xuXHRcdFx0XHRlbGVtZW50LmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXVzZWQgIT09IHByZXZQcm9wcy5wYXVzZWQgJiYgcGF1c2VkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKHBhdXNlZCkge1xuXHRcdFx0XHRcdGVsZW1lbnQucGF1c2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX29uUHJvZ3Jlc3MgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAodGhpcy5wcm9wcy5vblByb2dyZXNzICYmIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25Qcm9ncmVzcyh7XG5cdFx0XHRcdGN1cnJlbnRUaW1lOiBlbGVtZW50LmN1cnJlbnRUaW1lLFxuXG5cdFx0XHRcdC8vIEB0b2RvIGFkZCBzdXBwb3J0IGZvciB0aGVzZSB2YWx1ZXNcblx0XHRcdFx0cGxheWFibGVEdXJhdGlvbjogMCxcblx0XHRcdFx0c2Vla2FibGVEdXJhdGlvbjogMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uTG9hZFN0YXJ0ID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uTG9hZFN0YXJ0KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uTG9hZFN0YXJ0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uTG9hZDogUmVhY3RFdmVudEhhbmRsZXI8SFRNTFZpZGVvRWxlbWVudD4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkxvYWQgJiYgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkxvYWQoe1xuXHRcdFx0XHRjYW5QbGF5RmFzdEZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlSZXZlcnNlOiB0cnVlLFxuXHRcdFx0XHRjYW5QbGF5U2xvd0ZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblN0ZXBCYWNrd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuU3RlcEZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlTbG93UmV2ZXJzZTogdHJ1ZSxcblx0XHRcdFx0Y3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cdFx0XHRcdGR1cmF0aW9uOiBlbGVtZW50LmR1cmF0aW9uLFxuXHRcdFx0XHRuYXR1cmFsU2l6ZToge1xuXHRcdFx0XHRcdGhlaWdodDogZWxlbWVudC52aWRlb0hlaWdodCxcblx0XHRcdFx0XHR3aWR0aDogZWxlbWVudC52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25FcnJvciA9IChlcnJvcjogYW55KSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25FcnJvcikge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVycm9yKHtcblx0XHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0XHRcIlwiOiBcIlwiLFxuXHRcdFx0XHRcdGVycm9yU3RyaW5nOlxuXHRcdFx0XHRcdFx0ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVuZXhwZWN0ZWQgZXJyb3JcIlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25TZWVrID0gKCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKHRoaXMucHJvcHMub25TZWVrICYmIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZWVrKHtcblx0XHRcdFx0Y3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cblx0XHRcdFx0Ly8gQHRvZG8gYWRkIHN1cHBvcnQgZm9yIHRoZXNlIHZhbHVlc1xuXHRcdFx0XHRzZWVrVGltZTogMCxcblx0XHRcdFx0dGFyZ2V0OiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25FbmQgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25FbmQpIHtcblx0XHRcdHRoaXMucHJvcHMub25FbmQoKTtcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgdm9sdW1lLCBtdXRlZCwgY29udHJvbHMsIHBhdXNlZCwgc3R5bGUsIHBvc3RlciB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KFwidmlkZW9cIiwge1xuXHRcdFx0c3JjOiB0aGlzLl91cmwsXG5cdFx0XHRvbkxvYWRTdGFydDogdGhpcy5fb25Mb2FkU3RhcnQsXG5cdFx0XHRvbkxvYWRlZERhdGE6IHRoaXMuX29uTG9hZCxcblx0XHRcdG9uRXJyb3I6IHRoaXMuX29uRXJyb3IsXG5cdFx0XHRvblByb2dyZXNzOiB0aGlzLl9vblByb2dyZXNzLFxuXHRcdFx0b25TZWVraW5nOiB0aGlzLl9vblNlZWssXG5cdFx0XHRvbkVuZGVkOiB0aGlzLl9vbkVuZCxcblx0XHRcdG9uTG9hZGVkTWV0YWRhdGE6IHRoaXMucHJvcHMub25UaW1lZE1ldGFkYXRhLFxuXHRcdFx0b25DYW5QbGF5OiB0aGlzLnByb3BzLm9uUmVhZHlGb3JEaXNwbGF5LFxuXHRcdFx0b25TdGFsbGVkOiB0aGlzLnByb3BzLm9uUGxheWJhY2tTdGFsbGVkLFxuXHRcdFx0dm9sdW1lLFxuXHRcdFx0Y29udHJvbHMsXG5cdFx0XHRyZWY6IHRoaXMuX3Jvb3QsXG5cdFx0XHRwYXVzZWQsXG5cdFx0XHRtdXRlZCxcblx0XHRcdGF1dG9QbGF5OiAhcGF1c2VkLFxuXHRcdFx0c3R5bGVzOiBzdHlsZSxcblx0XHRcdHBvc3Rlcixcblx0XHRcdHBsYXlzaW5saW5lOiB0cnVlXG5cdFx0fSk7XG5cdH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZGVvO1xuIl19