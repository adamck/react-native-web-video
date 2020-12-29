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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WaWRlby50c3giXSwibmFtZXMiOlsiVmlkZW8iLCJ0aW1lIiwiXyIsImVsZW1lbnQiLCJfcm9vdCIsImN1cnJlbnQiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50IiwicHJvcHMiLCJvblByb2dyZXNzIiwidGltZVN0YW1wIiwicGxheWFibGVEdXJhdGlvbiIsInNlZWthYmxlRHVyYXRpb24iLCJvbkxvYWRTdGFydCIsIm9uTG9hZCIsImNhblBsYXlGYXN0Rm9yd2FyZCIsImNhblBsYXlSZXZlcnNlIiwiY2FuUGxheVNsb3dGb3J3YXJkIiwiY2FuU3RlcEJhY2t3YXJkIiwiY2FuU3RlcEZvcndhcmQiLCJjYW5QbGF5U2xvd1JldmVyc2UiLCJkdXJhdGlvbiIsIm5hdHVyYWxTaXplIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJvcmllbnRhdGlvbiIsImVycm9yIiwib25FcnJvciIsImVycm9yU3RyaW5nIiwiRXJyb3IiLCJtZXNzYWdlIiwib25TZWVrIiwic2Vla1RpbWUiLCJ0YXJnZXQiLCJvbkVuZCIsInZvbHVtZSIsIm11dGVkIiwiY29udHJvbHMiLCJwYXVzZWQiLCJzdHlsZSIsInBvc3RlciIsInNyYyIsIl91cmwiLCJfb25Mb2FkU3RhcnQiLCJvbkxvYWRlZERhdGEiLCJfb25Mb2FkIiwiX29uRXJyb3IiLCJfb25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIl9vblNlZWsiLCJvbkVuZGVkIiwiX29uRW5kIiwib25Mb2FkZWRNZXRhZGF0YSIsIm9uVGltZWRNZXRhZGF0YSIsIm9uQ2FuUGxheSIsIm9uUmVhZHlGb3JEaXNwbGF5Iiwib25TdGFsbGVkIiwib25QbGF5YmFja1N0YWxsZWQiLCJyZWYiLCJhdXRvUGxheSIsInBsYXlzSW5saW5lIiwiZnVsbHNjcmVlbiIsInJhdGUiLCJzZWVrIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBsYXliYWNrUmF0ZSIsInByZXZQcm9wcyIsIm9uUGxheWJhY2tSYXRlQ2hhbmdlIiwidW5kZWZpbmVkIiwicGF1c2UiLCJwbGF5Iiwic291cmNlIiwidXJpIiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU1hQSxLOzs7Ozs7Ozs7Ozs7Ozs7OzREQUNJLHVCOztxRUFPUSxZQUFNLENBQUUsQzs7MkRBRWxCLFVBQUNDLElBQUQsRUFBZUMsQ0FBZixFQUE4QjtBQUMzQyxVQUFNQyxPQUFPLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxPQUEzQjs7QUFDQSxVQUFJRixPQUFKLEVBQWE7QUFDWkEsUUFBQUEsT0FBTyxDQUFDRyxXQUFSLEdBQXNCTCxJQUF0QjtBQUNBO0FBQ0QsSzs7MkRBRWEsWUFBcUI7QUFDbENNLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLG1CQUFaO0FBQ0EsYUFBT0MsT0FBTyxDQUFDQyxPQUFSLEVBQVA7QUFDQSxLOzs4RUFFZ0MsWUFBTTtBQUN0QyxVQUFNUCxPQUFPLEdBQUcsTUFBS0MsS0FBTCxDQUFXQyxPQUEzQjs7QUFDQSxVQUFJRixPQUFKLEVBQWE7QUFDWiw0Q0FBZUEsT0FBZjtBQUNBO0FBQ0QsSzs7OEVBRWdDLFlBQU07QUFDdEM7QUFDQSxLOztrRUFtRXFCLFVBQUNRLEtBQUQsRUFBZ0I7QUFDckM7QUFFQSxVQUFJLE1BQUtDLEtBQUwsQ0FBV0MsVUFBZixFQUEyQjtBQUMxQixjQUFLRCxLQUFMLENBQVdDLFVBQVgsQ0FBc0I7QUFDckI7QUFDQVAsVUFBQUEsV0FBVyxFQUFFSyxLQUFLLENBQUNHLFNBRkU7QUFJckI7QUFDQUMsVUFBQUEsZ0JBQWdCLEVBQUUsQ0FMRztBQU1yQkMsVUFBQUEsZ0JBQWdCLEVBQUU7QUFORyxTQUF0QjtBQVFBO0FBQ0QsSzs7bUVBRXNCLFlBQU07QUFDNUIsVUFBSSxNQUFLSixLQUFMLENBQVdLLFdBQWYsRUFBNEI7QUFDM0IsY0FBS0wsS0FBTCxDQUFXSyxX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QixNQUFKLEVBQVk7QUFDWHpDLFlBQUFBLE9BQU8sQ0FBQ3dFLEtBQVI7QUFDQSxXQUZELE1BRU87QUFDTnhFLFlBQUFBLE9BQU8sQ0FBQ3lFLElBQVI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7O3dCQTdGK0M7QUFBQSxVQUN2Q0MsTUFEdUMsR0FDNUIsS0FBS2pFLEtBRHVCLENBQ3ZDaUUsTUFEdUM7QUFFL0MsYUFBTyxPQUFPQSxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUFNLENBQUNDLEdBQXBDLEdBQTBDRCxNQUFqRDtBQUNBOzs7O0VBTnlCRSxnQjs7O2VBc01aL0UsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCwgUmVhY3RFdmVudEhhbmRsZXIsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlkZW9Qcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0LW5hdGl2ZS12aWRlb1wiO1xuaW1wb3J0IHsgb3BlbkZ1bGxzY3JlZW4gfSBmcm9tIFwiLi91dGlscy9vcGVuLWZ1bGxzY3JlZW5cIjtcbmltcG9ydCB7IGNsb3NlRnVsbHNjcmVlbiB9IGZyb20gXCIuL3V0aWxzL2Nsb3NlLWZ1bGxzY3JlZW5cIjtcblxuZXhwb3J0IHR5cGUgVmlkZW9Tb3VyY2UgPSB7IHVyaT86IHN0cmluZyB9IHwgbnVtYmVyO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBWaWRlb1Byb3BlcnRpZXMge31cblxuZXhwb3J0IGNsYXNzIFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG5cdHByaXZhdGUgX3Jvb3QgPSBjcmVhdGVSZWY8SFRNTFZpZGVvRWxlbWVudD4oKTtcblxuXHRwcml2YXRlIGdldCBfdXJsKCk6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgeyBzb3VyY2UgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIHR5cGVvZiBzb3VyY2UgIT09IFwibnVtYmVyXCIgPyBzb3VyY2UudXJpIDogc291cmNlO1xuXHR9XG5cblx0cHVibGljIHNldE5hdGl2ZVByb3BzID0gKCkgPT4ge307XG5cblx0cHVibGljIHNlZWsgPSAodGltZTogbnVtYmVyLCBfPzogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0fVxuXHR9O1xuXG5cdHB1YmxpYyBzYXZlID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiU2F2aW5nIGluIGxvY2FsLi5cIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9O1xuXG5cdHB1YmxpYyBwcmVzZW50RnVsbHNjcmVlblBsYXllciA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRvcGVuRnVsbHNjcmVlbihlbGVtZW50KTtcblx0XHR9XG5cdH07XG5cblx0cHVibGljIGRpc21pc3NGdWxsc2NyZWVuUGxheWVyID0gKCkgPT4ge1xuXHRcdGNsb3NlRnVsbHNjcmVlbigpO1xuXHR9O1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbiwgcmF0ZSwgc2VlayB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmIChmdWxsc2NyZWVuKSB7XG5cdFx0XHRcdG9wZW5GdWxsc2NyZWVuKGVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCB0aGlzLl9vblByb2dyZXNzKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgdGhpcy5fb25Qcm9ncmVzcyk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWVraW5nXCIsIHRoaXMuX29uU2Vlayk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLl9vbkVuZCk7XG5cblx0XHRcdGlmIChyYXRlKSB7XG5cdFx0XHRcdGVsZW1lbnQucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlZWspIHtcblx0XHRcdFx0dGhpcy5zZWVrKHNlZWspO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFZpZGVvUHJvcGVydGllcykge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbiwgcmF0ZSwgc2VlaywgY3VycmVudFRpbWUsIHBhdXNlZCB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmIChmdWxsc2NyZWVuICE9PSBwcmV2UHJvcHMuZnVsbHNjcmVlbikge1xuXHRcdFx0XHRpZiAoZnVsbHNjcmVlbikge1xuXHRcdFx0XHRcdG9wZW5GdWxsc2NyZWVuKGVsZW1lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsb3NlRnVsbHNjcmVlbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyYXRlICE9PSBwcmV2UHJvcHMucmF0ZSAmJiByYXRlKSB7XG5cdFx0XHRcdGVsZW1lbnQucGxheWJhY2tSYXRlID0gcmF0ZTtcblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5vblBsYXliYWNrUmF0ZUNoYW5nZSkge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRcdFx0cGxheWJhY2tSYXRlOiByYXRlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlZWsgIT09IHByZXZQcm9wcy5zZWVrICYmIHNlZWspIHtcblx0XHRcdFx0ZWxlbWVudC5jdXJyZW50VGltZSA9IHNlZWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjdXJyZW50VGltZSAhPT0gcHJldlByb3BzLmN1cnJlbnRUaW1lICYmIGN1cnJlbnRUaW1lKSB7XG5cdFx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhdXNlZCAhPT0gcHJldlByb3BzLnBhdXNlZCAmJiBwYXVzZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAocGF1c2VkKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfb25Qcm9ncmVzcyA9IChldmVudDogYW55KSA9PiB7XG5cdFx0Ly8gY29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblxuXHRcdGlmICh0aGlzLnByb3BzLm9uUHJvZ3Jlc3MpIHtcblx0XHRcdHRoaXMucHJvcHMub25Qcm9ncmVzcyh7XG5cdFx0XHRcdC8vIGN1cnJlbnRUaW1lOiBlbGVtZW50LmN1cnJlbnRUaW1lLFxuXHRcdFx0XHRjdXJyZW50VGltZTogZXZlbnQudGltZVN0YW1wLFxuXG5cdFx0XHRcdC8vIEB0b2RvIGFkZCBzdXBwb3J0IGZvciB0aGVzZSB2YWx1ZXNcblx0XHRcdFx0cGxheWFibGVEdXJhdGlvbjogMCxcblx0XHRcdFx0c2Vla2FibGVEdXJhdGlvbjogMFxuXHRcdFx0fSk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uTG9hZFN0YXJ0ID0gKCkgPT4ge1xuXHRcdGlmICh0aGlzLnByb3BzLm9uTG9hZFN0YXJ0KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uTG9hZFN0YXJ0KCk7XG5cdFx0fVxuXHR9O1xuXG5cdHByaXZhdGUgX29uTG9hZDogUmVhY3RFdmVudEhhbmRsZXI8SFRNTFZpZGVvRWxlbWVudD4gPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkxvYWQgJiYgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkxvYWQoe1xuXHRcdFx0XHRjYW5QbGF5RmFzdEZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlSZXZlcnNlOiB0cnVlLFxuXHRcdFx0XHRjYW5QbGF5U2xvd0ZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblN0ZXBCYWNrd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuU3RlcEZvcndhcmQ6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlTbG93UmV2ZXJzZTogdHJ1ZSxcblx0XHRcdFx0Y3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cdFx0XHRcdGR1cmF0aW9uOiBlbGVtZW50LmR1cmF0aW9uLFxuXHRcdFx0XHRuYXR1cmFsU2l6ZToge1xuXHRcdFx0XHRcdGhlaWdodDogZWxlbWVudC52aWRlb0hlaWdodCxcblx0XHRcdFx0XHR3aWR0aDogZWxlbWVudC52aWRlb1dpZHRoLFxuXHRcdFx0XHRcdG9yaWVudGF0aW9uOiBcImhvcml6b250YWxcIlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25FcnJvciA9IChlcnJvcjogYW55KSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25FcnJvcikge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVycm9yKHtcblx0XHRcdFx0ZXJyb3I6IHtcblx0XHRcdFx0XHRcIlwiOiBcIlwiLFxuXHRcdFx0XHRcdGVycm9yU3RyaW5nOlxuXHRcdFx0XHRcdFx0ZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yLm1lc3NhZ2UgOiBcIlVuZXhwZWN0ZWQgZXJyb3JcIlxuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25TZWVrID0gKCkgPT4ge1xuXHRcdGNvbnN0IGVsZW1lbnQgPSB0aGlzLl9yb290LmN1cnJlbnQ7XG5cdFx0aWYgKHRoaXMucHJvcHMub25TZWVrICYmIGVsZW1lbnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25TZWVrKHtcblx0XHRcdFx0Y3VycmVudFRpbWU6IGVsZW1lbnQuY3VycmVudFRpbWUsXG5cblx0XHRcdFx0Ly8gQHRvZG8gYWRkIHN1cHBvcnQgZm9yIHRoZXNlIHZhbHVlc1xuXHRcdFx0XHRzZWVrVGltZTogMCxcblx0XHRcdFx0dGFyZ2V0OiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25FbmQgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25FbmQpIHtcblx0XHRcdHRoaXMucHJvcHMub25FbmQoKTtcblx0XHR9XG5cdH07XG5cblx0cmVuZGVyID0gKCkgPT4ge1xuXHRcdGNvbnN0IHsgdm9sdW1lLCBtdXRlZCwgY29udHJvbHMsIHBhdXNlZCwgc3R5bGUsIHBvc3RlciB9ID0gdGhpcy5wcm9wcztcblxuXHRcdHJldHVybiBjcmVhdGVFbGVtZW50KFwidmlkZW9cIiwge1xuXHRcdFx0c3JjOiB0aGlzLl91cmwsXG5cdFx0XHRvbkxvYWRTdGFydDogdGhpcy5fb25Mb2FkU3RhcnQsXG5cdFx0XHRvbkxvYWRlZERhdGE6IHRoaXMuX29uTG9hZCxcblx0XHRcdG9uRXJyb3I6IHRoaXMuX29uRXJyb3IsXG5cdFx0XHRvblByb2dyZXNzOiB0aGlzLl9vblByb2dyZXNzLFxuXHRcdFx0b25TZWVraW5nOiB0aGlzLl9vblNlZWssXG5cdFx0XHRvbkVuZGVkOiB0aGlzLl9vbkVuZCxcblx0XHRcdG9uTG9hZGVkTWV0YWRhdGE6IHRoaXMucHJvcHMub25UaW1lZE1ldGFkYXRhLFxuXHRcdFx0b25DYW5QbGF5OiB0aGlzLnByb3BzLm9uUmVhZHlGb3JEaXNwbGF5LFxuXHRcdFx0b25TdGFsbGVkOiB0aGlzLnByb3BzLm9uUGxheWJhY2tTdGFsbGVkLFxuXHRcdFx0dm9sdW1lLFxuXHRcdFx0Y29udHJvbHMsXG5cdFx0XHRyZWY6IHRoaXMuX3Jvb3QsXG5cdFx0XHRwYXVzZWQsXG5cdFx0XHRtdXRlZCxcblx0XHRcdGF1dG9QbGF5OiAhcGF1c2VkLFxuXHRcdFx0c3R5bGUsXG5cdFx0XHRwb3N0ZXIsXG5cdFx0XHRwbGF5c0lubGluZTogdHJ1ZVxuXHRcdH0pO1xuXHR9O1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWRlbztcbiJdfQ==