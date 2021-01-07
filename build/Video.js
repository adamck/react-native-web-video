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
      // const element = this._root.current;
      if (_this.props.onProgress) {
        _this.props.onProgress({
          // currentTime: element.currentTime,
          currentTime: event.timeStamp,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WaWRlby50c3giXSwibmFtZXMiOlsiVmlkZW8iLCJ0aW1lIiwiXyIsImVsZW1lbnQiLCJfcm9vdCIsImN1cnJlbnQiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50IiwicHJvcHMiLCJvblByb2dyZXNzIiwidGltZVN0YW1wIiwicGxheWFibGVEdXJhdGlvbiIsInNlZWthYmxlRHVyYXRpb24iLCJvbkxvYWRTdGFydCIsIm9uTG9hZCIsImNhblBsYXlGYXN0Rm9yd2FyZCIsImNhblBsYXlSZXZlcnNlIiwiY2FuUGxheVNsb3dGb3J3YXJkIiwiY2FuU3RlcEJhY2t3YXJkIiwiY2FuU3RlcEZvcndhcmQiLCJjYW5QbGF5U2xvd1JldmVyc2UiLCJkdXJhdGlvbiIsIm5hdHVyYWxTaXplIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJvcmllbnRhdGlvbiIsImVycm9yIiwib25FcnJvciIsImVycm9yU3RyaW5nIiwiRXJyb3IiLCJtZXNzYWdlIiwib25TZWVrIiwic2Vla1RpbWUiLCJ0YXJnZXQiLCJvbkVuZCIsInZvbHVtZSIsIm11dGVkIiwicmVwZWF0IiwiY29udHJvbHMiLCJwYXVzZWQiLCJzdHlsZSIsInBvc3RlciIsInJlZiIsInNyYyIsIl91cmwiLCJfb25Mb2FkU3RhcnQiLCJvbkxvYWRlZERhdGEiLCJfb25Mb2FkIiwiX29uRXJyb3IiLCJfb25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIl9vblNlZWsiLCJvbkVuZGVkIiwiX29uRW5kIiwib25Mb2FkZWRNZXRhZGF0YSIsIm9uVGltZWRNZXRhZGF0YSIsIm9uQ2FuUGxheSIsIm9uUmVhZHlGb3JEaXNwbGF5Iiwib25TdGFsbGVkIiwib25QbGF5YmFja1N0YWxsZWQiLCJsb29wIiwiYXV0b1BsYXkiLCJwbGF5c0lubGluZSIsImZ1bGxzY3JlZW4iLCJyYXRlIiwic2VlayIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5YmFja1JhdGUiLCJwcmV2UHJvcHMiLCJvblBsYXliYWNrUmF0ZUNoYW5nZSIsInVuZGVmaW5lZCIsInBhdXNlIiwicGxheSIsInNvdXJjZSIsInVyaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNYUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSSx1Qjs7cUVBT1EsWUFBTSxDQUFFLEM7OzJEQUVsQixVQUFDQyxJQUFELEVBQWVDLENBQWYsRUFBOEI7QUFDM0MsVUFBTUMsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1pBLFFBQUFBLE9BQU8sQ0FBQ0csV0FBUixHQUFzQkwsSUFBdEI7QUFDQTtBQUNELEs7OzJEQUVhLFlBQXFCO0FBQ2xDTSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0EsSzs7OEVBRWdDLFlBQU07QUFDdEMsVUFBTVAsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1osNENBQWVBLE9BQWY7QUFDQTtBQUNELEs7OzhFQUVnQyxZQUFNO0FBQ3RDO0FBQ0EsSzs7a0VBbUVxQixVQUFDUSxLQUFELEVBQWdCO0FBQ3JDO0FBRUEsVUFBSSxNQUFLQyxLQUFMLENBQVdDLFVBQWYsRUFBMkI7QUFDMUIsY0FBS0QsS0FBTCxDQUFXQyxVQUFYLENBQXNCO0FBQ3JCO0FBQ0FQLFVBQUFBLFdBQVcsRUFBRUssS0FBSyxDQUFDRyxTQUZFO0FBSXJCO0FBQ0FDLFVBQUFBLGdCQUFnQixFQUFFLENBTEc7QUFNckJDLFVBQUFBLGdCQUFnQixFQUFFO0FBTkcsU0FBdEI7QUFRQTtBQUNELEs7O21FQUVzQixZQUFNO0FBQzVCLFVBQUksTUFBS0osS0FBTCxDQUFXSyxXQUFmLEVBQTRCO0FBQzNCLGNB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LFlBQUl1QyxNQUFNLEtBQUs2QixTQUFTLENBQUM3QixNQUFyQixJQUErQkEsTUFBTSxLQUFLK0IsU0FBOUMsRUFBeUQ7QUFDeEQsY0FBSS9CLE1BQUosRUFBWTtBQUNYMUMsWUFBQUEsT0FBTyxDQUFDMEUsS0FBUjtBQUNBLFdBRkQsTUFFTztBQUNOMUUsWUFBQUEsT0FBTyxDQUFDMkUsSUFBUjtBQUNBO0FBQ0Q7QUFDRDtBQUNEOzs7d0JBN0YrQztBQUFBLFVBQ3ZDQyxNQUR1QyxHQUM1QixLQUFLbkUsS0FEdUIsQ0FDdkNtRSxNQUR1QztBQUUvQyxhQUFPLE9BQU9BLE1BQVAsS0FBa0IsUUFBbEIsR0FBNkJBLE1BQU0sQ0FBQ0MsR0FBcEMsR0FBMENELE1BQWpEO0FBQ0E7Ozs7RUFOeUJFLGdCOzs7ZUF1TVpqRixLIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRWxlbWVudCwgQ29tcG9uZW50LCBSZWFjdEV2ZW50SGFuZGxlciwgY3JlYXRlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBWaWRlb1Byb3BlcnRpZXMgfSBmcm9tIFwicmVhY3QtbmF0aXZlLXZpZGVvXCI7XG5pbXBvcnQgeyBvcGVuRnVsbHNjcmVlbiB9IGZyb20gXCIuL3V0aWxzL29wZW4tZnVsbHNjcmVlblwiO1xuaW1wb3J0IHsgY2xvc2VGdWxsc2NyZWVuIH0gZnJvbSBcIi4vdXRpbHMvY2xvc2UtZnVsbHNjcmVlblwiO1xuXG5leHBvcnQgdHlwZSBWaWRlb1NvdXJjZSA9IHsgdXJpPzogc3RyaW5nIH0gfCBudW1iZXI7XG5cbmludGVyZmFjZSBQcm9wcyBleHRlbmRzIFZpZGVvUHJvcGVydGllcyB7fVxuXG5leHBvcnQgY2xhc3MgVmlkZW8gZXh0ZW5kcyBDb21wb25lbnQ8UHJvcHM+IHtcblx0cHJpdmF0ZSBfcm9vdCA9IGNyZWF0ZVJlZjxIVE1MVmlkZW9FbGVtZW50PigpO1xuXG5cdHByaXZhdGUgZ2V0IF91cmwoKTogbnVtYmVyIHwgc3RyaW5nIHwgdW5kZWZpbmVkIHtcblx0XHRjb25zdCB7IHNvdXJjZSB9ID0gdGhpcy5wcm9wcztcblx0XHRyZXR1cm4gdHlwZW9mIHNvdXJjZSAhPT0gXCJudW1iZXJcIiA/IHNvdXJjZS51cmkgOiBzb3VyY2U7XG5cdH1cblxuXHRwdWJsaWMgc2V0TmF0aXZlUHJvcHMgPSAoKSA9PiB7fTtcblxuXHRwdWJsaWMgc2VlayA9ICh0aW1lOiBudW1iZXIsIF8/OiBudW1iZXIpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRlbGVtZW50LmN1cnJlbnRUaW1lID0gdGltZTtcblx0XHR9XG5cdH07XG5cblx0cHVibGljIHNhdmUgPSAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc29sZS5sb2coXCJTYXZpbmcgaW4gbG9jYWwuLlwiKTtcblx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG5cdH07XG5cblx0cHVibGljIHByZXNlbnRGdWxsc2NyZWVuUGxheWVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdG9wZW5GdWxsc2NyZWVuKGVsZW1lbnQpO1xuXHRcdH1cblx0fTtcblxuXHRwdWJsaWMgZGlzbWlzc0Z1bGxzY3JlZW5QbGF5ZXIgPSAoKSA9PiB7XG5cdFx0Y2xvc2VGdWxsc2NyZWVuKCk7XG5cdH07XG5cblx0Y29tcG9uZW50RGlkTW91bnQoKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuLCByYXRlLCBzZWVrIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKGZ1bGxzY3JlZW4pIHtcblx0XHRcdFx0b3BlbkZ1bGxzY3JlZW4oZWxlbWVudCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInByb2dyZXNzXCIsIHRoaXMuX29uUHJvZ3Jlc3MpO1xuXHRcdFx0ZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwidGltZXVwZGF0ZVwiLCB0aGlzLl9vblByb2dyZXNzKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInNlZWtpbmdcIiwgdGhpcy5fb25TZWVrKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImVuZGVkXCIsIHRoaXMuX29uRW5kKTtcblxuXHRcdFx0aWYgKHJhdGUpIHtcblx0XHRcdFx0ZWxlbWVudC5wbGF5YmFja1JhdGUgPSByYXRlO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2Vlaykge1xuXHRcdFx0XHR0aGlzLnNlZWsoc2Vlayk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Y29tcG9uZW50RGlkVXBkYXRlKHByZXZQcm9wczogVmlkZW9Qcm9wZXJ0aWVzKSB7XG5cdFx0Y29uc3QgeyBmdWxsc2NyZWVuLCByYXRlLCBzZWVrLCBjdXJyZW50VGltZSwgcGF1c2VkIH0gPSB0aGlzLnByb3BzO1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0aWYgKGZ1bGxzY3JlZW4gIT09IHByZXZQcm9wcy5mdWxsc2NyZWVuKSB7XG5cdFx0XHRcdGlmIChmdWxsc2NyZWVuKSB7XG5cdFx0XHRcdFx0b3BlbkZ1bGxzY3JlZW4oZWxlbWVudCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y2xvc2VGdWxsc2NyZWVuKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHJhdGUgIT09IHByZXZQcm9wcy5yYXRlICYmIHJhdGUpIHtcblx0XHRcdFx0ZWxlbWVudC5wbGF5YmFja1JhdGUgPSByYXRlO1xuXG5cdFx0XHRcdGlmICh0aGlzLnByb3BzLm9uUGxheWJhY2tSYXRlQ2hhbmdlKSB7XG5cdFx0XHRcdFx0dGhpcy5wcm9wcy5vblBsYXliYWNrUmF0ZUNoYW5nZSh7XG5cdFx0XHRcdFx0XHRwbGF5YmFja1JhdGU6IHJhdGVcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoc2VlayAhPT0gcHJldlByb3BzLnNlZWsgJiYgc2Vlaykge1xuXHRcdFx0XHRlbGVtZW50LmN1cnJlbnRUaW1lID0gc2Vlaztcblx0XHRcdH1cblxuXHRcdFx0aWYgKGN1cnJlbnRUaW1lICE9PSBwcmV2UHJvcHMuY3VycmVudFRpbWUgJiYgY3VycmVudFRpbWUpIHtcblx0XHRcdFx0ZWxlbWVudC5jdXJyZW50VGltZSA9IGN1cnJlbnRUaW1lO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAocGF1c2VkICE9PSBwcmV2UHJvcHMucGF1c2VkICYmIHBhdXNlZCAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdGlmIChwYXVzZWQpIHtcblx0XHRcdFx0XHRlbGVtZW50LnBhdXNlKCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wbGF5KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRwcml2YXRlIF9vblByb2dyZXNzID0gKGV2ZW50OiBhbnkpID0+IHtcblx0XHQvLyBjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXG5cdFx0aWYgKHRoaXMucHJvcHMub25Qcm9ncmVzcykge1xuXHRcdFx0dGhpcy5wcm9wcy5vblByb2dyZXNzKHtcblx0XHRcdFx0Ly8gY3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cdFx0XHRcdGN1cnJlbnRUaW1lOiBldmVudC50aW1lU3RhbXAsXG5cblx0XHRcdFx0Ly8gQHRvZG8gYWRkIHN1cHBvcnQgZm9yIHRoZXNlIHZhbHVlc1xuXHRcdFx0XHRwbGF5YWJsZUR1cmF0aW9uOiAwLFxuXHRcdFx0XHRzZWVrYWJsZUR1cmF0aW9uOiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25Mb2FkU3RhcnQgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25Mb2FkU3RhcnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25Mb2FkU3RhcnQoKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25Mb2FkOiBSZWFjdEV2ZW50SGFuZGxlcjxIVE1MVmlkZW9FbGVtZW50PiA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmICh0aGlzLnByb3BzLm9uTG9hZCAmJiBlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uTG9hZCh7XG5cdFx0XHRcdGNhblBsYXlGYXN0Rm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuUGxheVJldmVyc2U6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlTbG93Rm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuU3RlcEJhY2t3YXJkOiB0cnVlLFxuXHRcdFx0XHRjYW5TdGVwRm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuUGxheVNsb3dSZXZlcnNlOiB0cnVlLFxuXHRcdFx0XHRjdXJyZW50VGltZTogZWxlbWVudC5jdXJyZW50VGltZSxcblx0XHRcdFx0ZHVyYXRpb246IGVsZW1lbnQuZHVyYXRpb24sXG5cdFx0XHRcdG5hdHVyYWxTaXplOiB7XG5cdFx0XHRcdFx0aGVpZ2h0OiBlbGVtZW50LnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdHdpZHRoOiBlbGVtZW50LnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0b3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkVycm9yID0gKGVycm9yOiBhbnkpID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkVycm9yKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRXJyb3Ioe1xuXHRcdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRcdFwiXCI6IFwiXCIsXG5cdFx0XHRcdFx0ZXJyb3JTdHJpbmc6XG5cdFx0XHRcdFx0XHRlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5leHBlY3RlZCBlcnJvclwiXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vblNlZWsgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAodGhpcy5wcm9wcy5vblNlZWsgJiYgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblNlZWsoe1xuXHRcdFx0XHRjdXJyZW50VGltZTogZWxlbWVudC5jdXJyZW50VGltZSxcblxuXHRcdFx0XHQvLyBAdG9kbyBhZGQgc3VwcG9ydCBmb3IgdGhlc2UgdmFsdWVzXG5cdFx0XHRcdHNlZWtUaW1lOiAwLFxuXHRcdFx0XHR0YXJnZXQ6IDBcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkVuZCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkVuZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVuZCgpO1xuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3QgeyB2b2x1bWUsIG11dGVkLCByZXBlYXQsIGNvbnRyb2xzLCBwYXVzZWQsIHN0eWxlLCBwb3N0ZXIgfSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChcInZpZGVvXCIsIHtcblx0XHRcdHJlZjogdGhpcy5fcm9vdCxcblx0XHRcdHNyYzogdGhpcy5fdXJsLFxuXHRcdFx0b25Mb2FkU3RhcnQ6IHRoaXMuX29uTG9hZFN0YXJ0LFxuXHRcdFx0b25Mb2FkZWREYXRhOiB0aGlzLl9vbkxvYWQsXG5cdFx0XHRvbkVycm9yOiB0aGlzLl9vbkVycm9yLFxuXHRcdFx0b25Qcm9ncmVzczogdGhpcy5fb25Qcm9ncmVzcyxcblx0XHRcdG9uU2Vla2luZzogdGhpcy5fb25TZWVrLFxuXHRcdFx0b25FbmRlZDogdGhpcy5fb25FbmQsXG5cdFx0XHRvbkxvYWRlZE1ldGFkYXRhOiB0aGlzLnByb3BzLm9uVGltZWRNZXRhZGF0YSxcblx0XHRcdG9uQ2FuUGxheTogdGhpcy5wcm9wcy5vblJlYWR5Rm9yRGlzcGxheSxcblx0XHRcdG9uU3RhbGxlZDogdGhpcy5wcm9wcy5vblBsYXliYWNrU3RhbGxlZCxcblx0XHRcdHZvbHVtZSxcblx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0cGF1c2VkLFxuXHRcdFx0bXV0ZWQsXG5cdFx0XHRsb29wOiByZXBlYXQsXG5cdFx0XHRhdXRvUGxheTogIXBhdXNlZCxcblx0XHRcdHN0eWxlLFxuXHRcdFx0cG9zdGVyLFxuXHRcdFx0cGxheXNJbmxpbmU6IHRydWVcblx0XHR9KTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iXX0=