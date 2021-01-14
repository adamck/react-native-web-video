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

    _defineProperty(_assertThisInitialized(_this), "_onProgress", function (event) {
      var element = _this._root.current;

      if (_this.props.onProgress && element) {
        _this.props.onProgress({
          currentTime: element.currentTime,
          // timeStamp: event.timeStamp,
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
          repeat = _this$props.repeat,
          controls = _this$props.controls,
          paused = _this$props.paused,
          style = _this$props.style,
          poster = _this$props.poster;
      return (0, _react.createElement)("video", {
        ref: _this._root,
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
        paused: paused,
        muted: muted,
        loop: repeat,
        autoPlay: !paused,
        style: style,
        poster: poster,
        playsInline: true
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
        } // element.addEventListener("progress", this._onProgress);


        element.addEventListener("timeupdate", this._onProgress);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WaWRlby50c3giXSwibmFtZXMiOlsiVmlkZW8iLCJ0aW1lIiwiXyIsImVsZW1lbnQiLCJfcm9vdCIsImN1cnJlbnQiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50IiwicHJvcHMiLCJvblByb2dyZXNzIiwicGxheWFibGVEdXJhdGlvbiIsInNlZWthYmxlRHVyYXRpb24iLCJvbkxvYWRTdGFydCIsIm9uTG9hZCIsImNhblBsYXlGYXN0Rm9yd2FyZCIsImNhblBsYXlSZXZlcnNlIiwiY2FuUGxheVNsb3dGb3J3YXJkIiwiY2FuU3RlcEJhY2t3YXJkIiwiY2FuU3RlcEZvcndhcmQiLCJjYW5QbGF5U2xvd1JldmVyc2UiLCJkdXJhdGlvbiIsIm5hdHVyYWxTaXplIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJvcmllbnRhdGlvbiIsImVycm9yIiwib25FcnJvciIsImVycm9yU3RyaW5nIiwiRXJyb3IiLCJtZXNzYWdlIiwib25TZWVrIiwic2Vla1RpbWUiLCJ0YXJnZXQiLCJvbkVuZCIsInZvbHVtZSIsIm11dGVkIiwicmVwZWF0IiwiY29udHJvbHMiLCJwYXVzZWQiLCJzdHlsZSIsInBvc3RlciIsInJlZiIsInNyYyIsIl91cmwiLCJfb25Mb2FkU3RhcnQiLCJvbkxvYWRlZERhdGEiLCJfb25Mb2FkIiwiX29uRXJyb3IiLCJfb25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIl9vblNlZWsiLCJvbkVuZGVkIiwiX29uRW5kIiwib25Mb2FkZWRNZXRhZGF0YSIsIm9uVGltZWRNZXRhZGF0YSIsIm9uQ2FuUGxheSIsIm9uUmVhZHlGb3JEaXNwbGF5Iiwib25TdGFsbGVkIiwib25QbGF5YmFja1N0YWxsZWQiLCJsb29wIiwiYXV0b1BsYXkiLCJwbGF5c0lubGluZSIsImZ1bGxzY3JlZW4iLCJyYXRlIiwic2VlayIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5YmFja1JhdGUiLCJwcmV2UHJvcHMiLCJvblBsYXliYWNrUmF0ZUNoYW5nZSIsInVuZGVmaW5lZCIsInBhdXNlIiwicGxheSIsInNvdXJjZSIsInVyaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNYUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSSx1Qjs7cUVBT1EsWUFBTSxDQUFFLEM7OzJEQUVsQixVQUFDQyxJQUFELEVBQWVDLENBQWYsRUFBOEI7QUFDM0MsVUFBTUMsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1pBLFFBQUFBLE9BQU8sQ0FBQ0csV0FBUixHQUFzQkwsSUFBdEI7QUFDQTtBQUNELEs7OzJEQUVhLFlBQXFCO0FBQ2xDTSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0EsSzs7OEVBRWdDLFlBQU07QUFDdEMsVUFBTVAsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1osNENBQWVBLE9BQWY7QUFDQTtBQUNELEs7OzhFQUVnQyxZQUFNO0FBQ3RDO0FBQ0EsSzs7a0VBbUVxQixVQUFDUSxLQUFELEVBQWdCO0FBQ3JDLFVBQU1SLE9BQU8sR0FBRyxNQUFLQyxLQUFMLENBQVdDLE9BQTNCOztBQUVBLFVBQUksTUFBS08sS0FBTCxDQUFXQyxVQUFYLElBQXlCVixPQUE3QixFQUFzQztBQUNyQyxjQUFLUyxLQUFMLENBQVdDLFVBQVgsQ0FBc0I7QUFDckJQLFVBQUFBLFdBQVcsRUFBRUgsT0FBTyxDQUFDRyxXQURBO0FBRXJCO0FBRUE7QUFDQVEsVUFBQUEsZ0JBQWdCLEVBQUUsQ0FMRztBQU1yQkMsVUFBQUEsZ0JBQWdCLEVBQUU7QUFORyxTQUF0QjtBQVFBO0FBQ0QsSzs7bUVBRXNCLFlBQU07QUFDNUIs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R0FBc0JBLFdBQXRCO0FBQ0E7O0FBRUQsWUFBSXNDLE1BQU0sS0FBSzZCLFNBQVMsQ0FBQzdCLE1BQXJCLElBQStCQSxNQUFNLEtBQUsrQixTQUE5QyxFQUF5RDtBQUN4RCxjQUFJL0IsTUFBSixFQUFZO0FBQ1h6QyxZQUFBQSxPQUFPLENBQUN5RSxLQUFSO0FBQ0EsV0FGRCxNQUVPO0FBQ056RSxZQUFBQSxPQUFPLENBQUMwRSxJQUFSO0FBQ0E7QUFDRDtBQUNEO0FBQ0Q7Ozt3QkE3RitDO0FBQUEsVUFDdkNDLE1BRHVDLEdBQzVCLEtBQUtsRSxLQUR1QixDQUN2Q2tFLE1BRHVDO0FBRS9DLGFBQU8sT0FBT0EsTUFBUCxLQUFrQixRQUFsQixHQUE2QkEsTUFBTSxDQUFDQyxHQUFwQyxHQUEwQ0QsTUFBakQ7QUFDQTs7OztFQU55QkUsZ0I7OztlQStNWmhGLEsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVFbGVtZW50LCBDb21wb25lbnQsIFJlYWN0RXZlbnRIYW5kbGVyLCBjcmVhdGVSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFZpZGVvUHJvcGVydGllcyB9IGZyb20gXCJyZWFjdC1uYXRpdmUtdmlkZW9cIjtcbmltcG9ydCB7IG9wZW5GdWxsc2NyZWVuIH0gZnJvbSBcIi4vdXRpbHMvb3Blbi1mdWxsc2NyZWVuXCI7XG5pbXBvcnQgeyBjbG9zZUZ1bGxzY3JlZW4gfSBmcm9tIFwiLi91dGlscy9jbG9zZS1mdWxsc2NyZWVuXCI7XG5cbmV4cG9ydCB0eXBlIFZpZGVvU291cmNlID0geyB1cmk/OiBzdHJpbmcgfSB8IG51bWJlcjtcblxuaW50ZXJmYWNlIFByb3BzIGV4dGVuZHMgVmlkZW9Qcm9wZXJ0aWVzIHt9XG5cbmV4cG9ydCBjbGFzcyBWaWRlbyBleHRlbmRzIENvbXBvbmVudDxQcm9wcz4ge1xuXHRwcml2YXRlIF9yb290ID0gY3JlYXRlUmVmPEhUTUxWaWRlb0VsZW1lbnQ+KCk7XG5cblx0cHJpdmF0ZSBnZXQgX3VybCgpOiBudW1iZXIgfCBzdHJpbmcgfCB1bmRlZmluZWQge1xuXHRcdGNvbnN0IHsgc291cmNlIH0gPSB0aGlzLnByb3BzO1xuXHRcdHJldHVybiB0eXBlb2Ygc291cmNlICE9PSBcIm51bWJlclwiID8gc291cmNlLnVyaSA6IHNvdXJjZTtcblx0fVxuXG5cdHB1YmxpYyBzZXROYXRpdmVQcm9wcyA9ICgpID0+IHt9O1xuXG5cdHB1YmxpYyBzZWVrID0gKHRpbWU6IG51bWJlciwgXz86IG51bWJlcikgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSB0aW1lO1xuXHRcdH1cblx0fTtcblxuXHRwdWJsaWMgc2F2ZSA9ICgpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRjb25zb2xlLmxvZyhcIlNhdmluZyBpbiBsb2NhbC4uXCIpO1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKTtcblx0fTtcblxuXHRwdWJsaWMgcHJlc2VudEZ1bGxzY3JlZW5QbGF5ZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0b3BlbkZ1bGxzY3JlZW4oZWxlbWVudCk7XG5cdFx0fVxuXHR9O1xuXG5cdHB1YmxpYyBkaXNtaXNzRnVsbHNjcmVlblBsYXllciA9ICgpID0+IHtcblx0XHRjbG9zZUZ1bGxzY3JlZW4oKTtcblx0fTtcblxuXHRjb21wb25lbnREaWRNb3VudCgpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW4sIHJhdGUsIHNlZWsgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRpZiAoZnVsbHNjcmVlbikge1xuXHRcdFx0XHRvcGVuRnVsbHNjcmVlbihlbGVtZW50KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwicHJvZ3Jlc3NcIiwgdGhpcy5fb25Qcm9ncmVzcyk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0aW1ldXBkYXRlXCIsIHRoaXMuX29uUHJvZ3Jlc3MpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Vla2luZ1wiLCB0aGlzLl9vblNlZWspO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiZW5kZWRcIiwgdGhpcy5fb25FbmQpO1xuXG5cdFx0XHRpZiAocmF0ZSkge1xuXHRcdFx0XHRlbGVtZW50LnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWVrKSB7XG5cdFx0XHRcdHRoaXMuc2VlayhzZWVrKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjb21wb25lbnREaWRVcGRhdGUocHJldlByb3BzOiBWaWRlb1Byb3BlcnRpZXMpIHtcblx0XHRjb25zdCB7IGZ1bGxzY3JlZW4sIHJhdGUsIHNlZWssIGN1cnJlbnRUaW1lLCBwYXVzZWQgfSA9IHRoaXMucHJvcHM7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRpZiAoZnVsbHNjcmVlbiAhPT0gcHJldlByb3BzLmZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0aWYgKGZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0XHRvcGVuRnVsbHNjcmVlbihlbGVtZW50KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjbG9zZUZ1bGxzY3JlZW4oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAocmF0ZSAhPT0gcHJldlByb3BzLnJhdGUgJiYgcmF0ZSkge1xuXHRcdFx0XHRlbGVtZW50LnBsYXliYWNrUmF0ZSA9IHJhdGU7XG5cblx0XHRcdFx0aWYgKHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2UpIHtcblx0XHRcdFx0XHR0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKHtcblx0XHRcdFx0XHRcdHBsYXliYWNrUmF0ZTogcmF0ZVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChzZWVrICE9PSBwcmV2UHJvcHMuc2VlayAmJiBzZWVrKSB7XG5cdFx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSBzZWVrO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoY3VycmVudFRpbWUgIT09IHByZXZQcm9wcy5jdXJyZW50VGltZSAmJiBjdXJyZW50VGltZSkge1xuXHRcdFx0XHRlbGVtZW50LmN1cnJlbnRUaW1lID0gY3VycmVudFRpbWU7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChwYXVzZWQgIT09IHByZXZQcm9wcy5wYXVzZWQgJiYgcGF1c2VkICE9PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0aWYgKHBhdXNlZCkge1xuXHRcdFx0XHRcdGVsZW1lbnQucGF1c2UoKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtZW50LnBsYXkoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgX29uUHJvZ3Jlc3MgPSAoZXZlbnQ6IGFueSkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cblx0XHRpZiAodGhpcy5wcm9wcy5vblByb2dyZXNzICYmIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25Qcm9ncmVzcyh7XG5cdFx0XHRcdGN1cnJlbnRUaW1lOiBlbGVtZW50LmN1cnJlbnRUaW1lLFxuXHRcdFx0XHQvLyB0aW1lU3RhbXA6IGV2ZW50LnRpbWVTdGFtcCxcblxuXHRcdFx0XHQvLyBAdG9kbyBhZGQgc3VwcG9ydCBmb3IgdGhlc2UgdmFsdWVzXG5cdFx0XHRcdHBsYXlhYmxlRHVyYXRpb246IDAsXG5cdFx0XHRcdHNlZWthYmxlRHVyYXRpb246IDBcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkxvYWRTdGFydCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkxvYWRTdGFydCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkxvYWRTdGFydCgpO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkxvYWQ6IFJlYWN0RXZlbnRIYW5kbGVyPEhUTUxWaWRlb0VsZW1lbnQ+ID0gKCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKHRoaXMucHJvcHMub25Mb2FkICYmIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25Mb2FkKHtcblx0XHRcdFx0Y2FuUGxheUZhc3RGb3J3YXJkOiB0cnVlLFxuXHRcdFx0XHRjYW5QbGF5UmV2ZXJzZTogdHJ1ZSxcblx0XHRcdFx0Y2FuUGxheVNsb3dGb3J3YXJkOiB0cnVlLFxuXHRcdFx0XHRjYW5TdGVwQmFja3dhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblN0ZXBGb3J3YXJkOiB0cnVlLFxuXHRcdFx0XHRjYW5QbGF5U2xvd1JldmVyc2U6IHRydWUsXG5cdFx0XHRcdGN1cnJlbnRUaW1lOiBlbGVtZW50LmN1cnJlbnRUaW1lLFxuXHRcdFx0XHRkdXJhdGlvbjogZWxlbWVudC5kdXJhdGlvbixcblx0XHRcdFx0bmF0dXJhbFNpemU6IHtcblx0XHRcdFx0XHRoZWlnaHQ6IGVsZW1lbnQudmlkZW9IZWlnaHQsXG5cdFx0XHRcdFx0d2lkdGg6IGVsZW1lbnQudmlkZW9XaWR0aCxcblx0XHRcdFx0XHRvcmllbnRhdGlvbjogXCJob3Jpem9udGFsXCJcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uRXJyb3IgPSAoZXJyb3I6IGFueSkgPT4ge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uRXJyb3IpIHtcblx0XHRcdHRoaXMucHJvcHMub25FcnJvcih7XG5cdFx0XHRcdGVycm9yOiB7XG5cdFx0XHRcdFx0XCJcIjogXCJcIixcblx0XHRcdFx0XHRlcnJvclN0cmluZzpcblx0XHRcdFx0XHRcdGVycm9yIGluc3RhbmNlb2YgRXJyb3IgPyBlcnJvci5tZXNzYWdlIDogXCJVbmV4cGVjdGVkIGVycm9yXCJcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uU2VlayA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmICh0aGlzLnByb3BzLm9uU2VlayAmJiBlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uU2Vlayh7XG5cdFx0XHRcdGN1cnJlbnRUaW1lOiBlbGVtZW50LmN1cnJlbnRUaW1lLFxuXG5cdFx0XHRcdC8vIEB0b2RvIGFkZCBzdXBwb3J0IGZvciB0aGVzZSB2YWx1ZXNcblx0XHRcdFx0c2Vla1RpbWU6IDAsXG5cdFx0XHRcdHRhcmdldDogMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uRW5kID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uRW5kKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRW5kKCk7XG5cdFx0fVxuXHR9O1xuXG5cdHJlbmRlciA9ICgpID0+IHtcblx0XHRjb25zdCB7XG5cdFx0XHR2b2x1bWUsXG5cdFx0XHRtdXRlZCxcblx0XHRcdHJlcGVhdCxcblx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0cGF1c2VkLFxuXHRcdFx0c3R5bGUsXG5cdFx0XHRwb3N0ZXJcblx0XHR9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KFwidmlkZW9cIiwge1xuXHRcdFx0cmVmOiB0aGlzLl9yb290LFxuXHRcdFx0c3JjOiB0aGlzLl91cmwsXG5cdFx0XHRvbkxvYWRTdGFydDogdGhpcy5fb25Mb2FkU3RhcnQsXG5cdFx0XHRvbkxvYWRlZERhdGE6IHRoaXMuX29uTG9hZCxcblx0XHRcdG9uRXJyb3I6IHRoaXMuX29uRXJyb3IsXG5cdFx0XHRvblByb2dyZXNzOiB0aGlzLl9vblByb2dyZXNzLFxuXHRcdFx0b25TZWVraW5nOiB0aGlzLl9vblNlZWssXG5cdFx0XHRvbkVuZGVkOiB0aGlzLl9vbkVuZCxcblx0XHRcdG9uTG9hZGVkTWV0YWRhdGE6IHRoaXMucHJvcHMub25UaW1lZE1ldGFkYXRhLFxuXHRcdFx0b25DYW5QbGF5OiB0aGlzLnByb3BzLm9uUmVhZHlGb3JEaXNwbGF5LFxuXHRcdFx0b25TdGFsbGVkOiB0aGlzLnByb3BzLm9uUGxheWJhY2tTdGFsbGVkLFxuXHRcdFx0dm9sdW1lLFxuXHRcdFx0Y29udHJvbHMsXG5cdFx0XHRwYXVzZWQsXG5cdFx0XHRtdXRlZCxcblx0XHRcdGxvb3A6IHJlcGVhdCxcblx0XHRcdGF1dG9QbGF5OiAhcGF1c2VkLFxuXHRcdFx0c3R5bGUsXG5cdFx0XHRwb3N0ZXIsXG5cdFx0XHRwbGF5c0lubGluZTogdHJ1ZVxuXHRcdH0pO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiJdfQ==