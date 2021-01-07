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

      if (_this.props.onProgress) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9WaWRlby50c3giXSwibmFtZXMiOlsiVmlkZW8iLCJ0aW1lIiwiXyIsImVsZW1lbnQiLCJfcm9vdCIsImN1cnJlbnQiLCJjdXJyZW50VGltZSIsImNvbnNvbGUiLCJsb2ciLCJQcm9taXNlIiwicmVzb2x2ZSIsImV2ZW50IiwicHJvcHMiLCJvblByb2dyZXNzIiwicGxheWFibGVEdXJhdGlvbiIsInNlZWthYmxlRHVyYXRpb24iLCJvbkxvYWRTdGFydCIsIm9uTG9hZCIsImNhblBsYXlGYXN0Rm9yd2FyZCIsImNhblBsYXlSZXZlcnNlIiwiY2FuUGxheVNsb3dGb3J3YXJkIiwiY2FuU3RlcEJhY2t3YXJkIiwiY2FuU3RlcEZvcndhcmQiLCJjYW5QbGF5U2xvd1JldmVyc2UiLCJkdXJhdGlvbiIsIm5hdHVyYWxTaXplIiwiaGVpZ2h0IiwidmlkZW9IZWlnaHQiLCJ3aWR0aCIsInZpZGVvV2lkdGgiLCJvcmllbnRhdGlvbiIsImVycm9yIiwib25FcnJvciIsImVycm9yU3RyaW5nIiwiRXJyb3IiLCJtZXNzYWdlIiwib25TZWVrIiwic2Vla1RpbWUiLCJ0YXJnZXQiLCJvbkVuZCIsInZvbHVtZSIsIm11dGVkIiwicmVwZWF0IiwiY29udHJvbHMiLCJwYXVzZWQiLCJzdHlsZSIsInBvc3RlciIsInJlZiIsInNyYyIsIl91cmwiLCJfb25Mb2FkU3RhcnQiLCJvbkxvYWRlZERhdGEiLCJfb25Mb2FkIiwiX29uRXJyb3IiLCJfb25Qcm9ncmVzcyIsIm9uU2Vla2luZyIsIl9vblNlZWsiLCJvbkVuZGVkIiwiX29uRW5kIiwib25Mb2FkZWRNZXRhZGF0YSIsIm9uVGltZWRNZXRhZGF0YSIsIm9uQ2FuUGxheSIsIm9uUmVhZHlGb3JEaXNwbGF5Iiwib25TdGFsbGVkIiwib25QbGF5YmFja1N0YWxsZWQiLCJsb29wIiwiYXV0b1BsYXkiLCJwbGF5c0lubGluZSIsImZ1bGxzY3JlZW4iLCJyYXRlIiwic2VlayIsImFkZEV2ZW50TGlzdGVuZXIiLCJwbGF5YmFja1JhdGUiLCJwcmV2UHJvcHMiLCJvblBsYXliYWNrUmF0ZUNoYW5nZSIsInVuZGVmaW5lZCIsInBhdXNlIiwicGxheSIsInNvdXJjZSIsInVyaSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7O0FBRUE7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFNYUEsSzs7Ozs7Ozs7Ozs7Ozs7Ozs0REFDSSx1Qjs7cUVBT1EsWUFBTSxDQUFFLEM7OzJEQUVsQixVQUFDQyxJQUFELEVBQWVDLENBQWYsRUFBOEI7QUFDM0MsVUFBTUMsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1pBLFFBQUFBLE9BQU8sQ0FBQ0csV0FBUixHQUFzQkwsSUFBdEI7QUFDQTtBQUNELEs7OzJEQUVhLFlBQXFCO0FBQ2xDTSxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWjtBQUNBLGFBQU9DLE9BQU8sQ0FBQ0MsT0FBUixFQUFQO0FBQ0EsSzs7OEVBRWdDLFlBQU07QUFDdEMsVUFBTVAsT0FBTyxHQUFHLE1BQUtDLEtBQUwsQ0FBV0MsT0FBM0I7O0FBQ0EsVUFBSUYsT0FBSixFQUFhO0FBQ1osNENBQWVBLE9BQWY7QUFDQTtBQUNELEs7OzhFQUVnQyxZQUFNO0FBQ3RDO0FBQ0EsSzs7a0VBbUVxQixVQUFDUSxLQUFELEVBQWdCO0FBQ3JDLFVBQU1SLE9BQU8sR0FBRyxNQUFLQyxLQUFMLENBQVdDLE9BQTNCOztBQUVBLFVBQUksTUFBS08sS0FBTCxDQUFXQyxVQUFmLEVBQTJCO0FBQzFCLGNBQUtELEtBQUwsQ0FBV0MsVUFBWCxDQUFzQjtBQUNyQlAsVUFBQUEsV0FBVyxFQUFFSCxPQUFPLENBQUVHLFdBREQ7QUFFckI7QUFFQTtBQUNBUSxVQUFBQSxnQkFBZ0IsRUFBRSxDQUxHO0FBTXJCQyxVQUFBQSxnQkFBZ0IsRUFBRTtBQU5HLFNBQXRCO0FBUUE7QUFDRCxLOzttRUFFc0IsWUFBTTtBQUM1QixVQUFJLE1BQUtILEtB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QUFDQTs7QUFFRCxZQUFJc0MsTUFBTSxLQUFLNkIsU0FBUyxDQUFDN0IsTUFBckIsSUFBK0JBLE1BQU0sS0FBSytCLFNBQTlDLEVBQXlEO0FBQ3hELGNBQUkvQixNQUFKLEVBQVk7QUFDWHpDLFlBQUFBLE9BQU8sQ0FBQ3lFLEtBQVI7QUFDQSxXQUZELE1BRU87QUFDTnpFLFlBQUFBLE9BQU8sQ0FBQzBFLElBQVI7QUFDQTtBQUNEO0FBQ0Q7QUFDRDs7O3dCQTdGK0M7QUFBQSxVQUN2Q0MsTUFEdUMsR0FDNUIsS0FBS2xFLEtBRHVCLENBQ3ZDa0UsTUFEdUM7QUFFL0MsYUFBTyxPQUFPQSxNQUFQLEtBQWtCLFFBQWxCLEdBQTZCQSxNQUFNLENBQUNDLEdBQXBDLEdBQTBDRCxNQUFqRDtBQUNBOzs7O0VBTnlCRSxnQjs7O2VBK01aaEYsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUVsZW1lbnQsIENvbXBvbmVudCwgUmVhY3RFdmVudEhhbmRsZXIsIGNyZWF0ZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgVmlkZW9Qcm9wZXJ0aWVzIH0gZnJvbSBcInJlYWN0LW5hdGl2ZS12aWRlb1wiO1xuaW1wb3J0IHsgb3BlbkZ1bGxzY3JlZW4gfSBmcm9tIFwiLi91dGlscy9vcGVuLWZ1bGxzY3JlZW5cIjtcbmltcG9ydCB7IGNsb3NlRnVsbHNjcmVlbiB9IGZyb20gXCIuL3V0aWxzL2Nsb3NlLWZ1bGxzY3JlZW5cIjtcblxuZXhwb3J0IHR5cGUgVmlkZW9Tb3VyY2UgPSB7IHVyaT86IHN0cmluZyB9IHwgbnVtYmVyO1xuXG5pbnRlcmZhY2UgUHJvcHMgZXh0ZW5kcyBWaWRlb1Byb3BlcnRpZXMge31cblxuZXhwb3J0IGNsYXNzIFZpZGVvIGV4dGVuZHMgQ29tcG9uZW50PFByb3BzPiB7XG5cdHByaXZhdGUgX3Jvb3QgPSBjcmVhdGVSZWY8SFRNTFZpZGVvRWxlbWVudD4oKTtcblxuXHRwcml2YXRlIGdldCBfdXJsKCk6IG51bWJlciB8IHN0cmluZyB8IHVuZGVmaW5lZCB7XG5cdFx0Y29uc3QgeyBzb3VyY2UgfSA9IHRoaXMucHJvcHM7XG5cdFx0cmV0dXJuIHR5cGVvZiBzb3VyY2UgIT09IFwibnVtYmVyXCIgPyBzb3VyY2UudXJpIDogc291cmNlO1xuXHR9XG5cblx0cHVibGljIHNldE5hdGl2ZVByb3BzID0gKCkgPT4ge307XG5cblx0cHVibGljIHNlZWsgPSAodGltZTogbnVtYmVyLCBfPzogbnVtYmVyKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAoZWxlbWVudCkge1xuXHRcdFx0ZWxlbWVudC5jdXJyZW50VGltZSA9IHRpbWU7XG5cdFx0fVxuXHR9O1xuXG5cdHB1YmxpYyBzYXZlID0gKCk6IFByb21pc2U8dm9pZD4gPT4ge1xuXHRcdGNvbnNvbGUubG9nKFwiU2F2aW5nIGluIGxvY2FsLi5cIik7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpO1xuXHR9O1xuXG5cdHB1YmxpYyBwcmVzZW50RnVsbHNjcmVlblBsYXllciA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHRvcGVuRnVsbHNjcmVlbihlbGVtZW50KTtcblx0XHR9XG5cdH07XG5cblx0cHVibGljIGRpc21pc3NGdWxsc2NyZWVuUGxheWVyID0gKCkgPT4ge1xuXHRcdGNsb3NlRnVsbHNjcmVlbigpO1xuXHR9O1xuXG5cdGNvbXBvbmVudERpZE1vdW50KCkge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbiwgcmF0ZSwgc2VlayB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmIChmdWxsc2NyZWVuKSB7XG5cdFx0XHRcdG9wZW5GdWxsc2NyZWVuKGVsZW1lbnQpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwcm9ncmVzc1wiLCB0aGlzLl9vblByb2dyZXNzKTtcblx0XHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRpbWV1cGRhdGVcIiwgdGhpcy5fb25Qcm9ncmVzcyk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzZWVraW5nXCIsIHRoaXMuX29uU2Vlayk7XG5cdFx0XHRlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJlbmRlZFwiLCB0aGlzLl9vbkVuZCk7XG5cblx0XHRcdGlmIChyYXRlKSB7XG5cdFx0XHRcdGVsZW1lbnQucGxheWJhY2tSYXRlID0gcmF0ZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlZWspIHtcblx0XHRcdFx0dGhpcy5zZWVrKHNlZWspO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGNvbXBvbmVudERpZFVwZGF0ZShwcmV2UHJvcHM6IFZpZGVvUHJvcGVydGllcykge1xuXHRcdGNvbnN0IHsgZnVsbHNjcmVlbiwgcmF0ZSwgc2VlaywgY3VycmVudFRpbWUsIHBhdXNlZCB9ID0gdGhpcy5wcm9wcztcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXG5cdFx0aWYgKGVsZW1lbnQpIHtcblx0XHRcdGlmIChmdWxsc2NyZWVuICE9PSBwcmV2UHJvcHMuZnVsbHNjcmVlbikge1xuXHRcdFx0XHRpZiAoZnVsbHNjcmVlbikge1xuXHRcdFx0XHRcdG9wZW5GdWxsc2NyZWVuKGVsZW1lbnQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNsb3NlRnVsbHNjcmVlbigpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGlmIChyYXRlICE9PSBwcmV2UHJvcHMucmF0ZSAmJiByYXRlKSB7XG5cdFx0XHRcdGVsZW1lbnQucGxheWJhY2tSYXRlID0gcmF0ZTtcblxuXHRcdFx0XHRpZiAodGhpcy5wcm9wcy5vblBsYXliYWNrUmF0ZUNoYW5nZSkge1xuXHRcdFx0XHRcdHRoaXMucHJvcHMub25QbGF5YmFja1JhdGVDaGFuZ2Uoe1xuXHRcdFx0XHRcdFx0cGxheWJhY2tSYXRlOiByYXRlXG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKHNlZWsgIT09IHByZXZQcm9wcy5zZWVrICYmIHNlZWspIHtcblx0XHRcdFx0ZWxlbWVudC5jdXJyZW50VGltZSA9IHNlZWs7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChjdXJyZW50VGltZSAhPT0gcHJldlByb3BzLmN1cnJlbnRUaW1lICYmIGN1cnJlbnRUaW1lKSB7XG5cdFx0XHRcdGVsZW1lbnQuY3VycmVudFRpbWUgPSBjdXJyZW50VGltZTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHBhdXNlZCAhPT0gcHJldlByb3BzLnBhdXNlZCAmJiBwYXVzZWQgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRpZiAocGF1c2VkKSB7XG5cdFx0XHRcdFx0ZWxlbWVudC5wYXVzZSgpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW1lbnQucGxheSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBfb25Qcm9ncmVzcyA9IChldmVudDogYW55KSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblxuXHRcdGlmICh0aGlzLnByb3BzLm9uUHJvZ3Jlc3MpIHtcblx0XHRcdHRoaXMucHJvcHMub25Qcm9ncmVzcyh7XG5cdFx0XHRcdGN1cnJlbnRUaW1lOiBlbGVtZW50IS5jdXJyZW50VGltZSxcblx0XHRcdFx0Ly8gdGltZVN0YW1wOiBldmVudC50aW1lU3RhbXAsXG5cblx0XHRcdFx0Ly8gQHRvZG8gYWRkIHN1cHBvcnQgZm9yIHRoZXNlIHZhbHVlc1xuXHRcdFx0XHRwbGF5YWJsZUR1cmF0aW9uOiAwLFxuXHRcdFx0XHRzZWVrYWJsZUR1cmF0aW9uOiAwXG5cdFx0XHR9KTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25Mb2FkU3RhcnQgPSAoKSA9PiB7XG5cdFx0aWYgKHRoaXMucHJvcHMub25Mb2FkU3RhcnQpIHtcblx0XHRcdHRoaXMucHJvcHMub25Mb2FkU3RhcnQoKTtcblx0XHR9XG5cdH07XG5cblx0cHJpdmF0ZSBfb25Mb2FkOiBSZWFjdEV2ZW50SGFuZGxlcjxIVE1MVmlkZW9FbGVtZW50PiA9ICgpID0+IHtcblx0XHRjb25zdCBlbGVtZW50ID0gdGhpcy5fcm9vdC5jdXJyZW50O1xuXHRcdGlmICh0aGlzLnByb3BzLm9uTG9hZCAmJiBlbGVtZW50KSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uTG9hZCh7XG5cdFx0XHRcdGNhblBsYXlGYXN0Rm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuUGxheVJldmVyc2U6IHRydWUsXG5cdFx0XHRcdGNhblBsYXlTbG93Rm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuU3RlcEJhY2t3YXJkOiB0cnVlLFxuXHRcdFx0XHRjYW5TdGVwRm9yd2FyZDogdHJ1ZSxcblx0XHRcdFx0Y2FuUGxheVNsb3dSZXZlcnNlOiB0cnVlLFxuXHRcdFx0XHRjdXJyZW50VGltZTogZWxlbWVudC5jdXJyZW50VGltZSxcblx0XHRcdFx0ZHVyYXRpb246IGVsZW1lbnQuZHVyYXRpb24sXG5cdFx0XHRcdG5hdHVyYWxTaXplOiB7XG5cdFx0XHRcdFx0aGVpZ2h0OiBlbGVtZW50LnZpZGVvSGVpZ2h0LFxuXHRcdFx0XHRcdHdpZHRoOiBlbGVtZW50LnZpZGVvV2lkdGgsXG5cdFx0XHRcdFx0b3JpZW50YXRpb246IFwiaG9yaXpvbnRhbFwiXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkVycm9yID0gKGVycm9yOiBhbnkpID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkVycm9yKSB7XG5cdFx0XHR0aGlzLnByb3BzLm9uRXJyb3Ioe1xuXHRcdFx0XHRlcnJvcjoge1xuXHRcdFx0XHRcdFwiXCI6IFwiXCIsXG5cdFx0XHRcdFx0ZXJyb3JTdHJpbmc6XG5cdFx0XHRcdFx0XHRlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IubWVzc2FnZSA6IFwiVW5leHBlY3RlZCBlcnJvclwiXG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vblNlZWsgPSAoKSA9PiB7XG5cdFx0Y29uc3QgZWxlbWVudCA9IHRoaXMuX3Jvb3QuY3VycmVudDtcblx0XHRpZiAodGhpcy5wcm9wcy5vblNlZWsgJiYgZWxlbWVudCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vblNlZWsoe1xuXHRcdFx0XHRjdXJyZW50VGltZTogZWxlbWVudC5jdXJyZW50VGltZSxcblxuXHRcdFx0XHQvLyBAdG9kbyBhZGQgc3VwcG9ydCBmb3IgdGhlc2UgdmFsdWVzXG5cdFx0XHRcdHNlZWtUaW1lOiAwLFxuXHRcdFx0XHR0YXJnZXQ6IDBcblx0XHRcdH0pO1xuXHRcdH1cblx0fTtcblxuXHRwcml2YXRlIF9vbkVuZCA9ICgpID0+IHtcblx0XHRpZiAodGhpcy5wcm9wcy5vbkVuZCkge1xuXHRcdFx0dGhpcy5wcm9wcy5vbkVuZCgpO1xuXHRcdH1cblx0fTtcblxuXHRyZW5kZXIgPSAoKSA9PiB7XG5cdFx0Y29uc3Qge1xuXHRcdFx0dm9sdW1lLFxuXHRcdFx0bXV0ZWQsXG5cdFx0XHRyZXBlYXQsXG5cdFx0XHRjb250cm9scyxcblx0XHRcdHBhdXNlZCxcblx0XHRcdHN0eWxlLFxuXHRcdFx0cG9zdGVyXG5cdFx0fSA9IHRoaXMucHJvcHM7XG5cblx0XHRyZXR1cm4gY3JlYXRlRWxlbWVudChcInZpZGVvXCIsIHtcblx0XHRcdHJlZjogdGhpcy5fcm9vdCxcblx0XHRcdHNyYzogdGhpcy5fdXJsLFxuXHRcdFx0b25Mb2FkU3RhcnQ6IHRoaXMuX29uTG9hZFN0YXJ0LFxuXHRcdFx0b25Mb2FkZWREYXRhOiB0aGlzLl9vbkxvYWQsXG5cdFx0XHRvbkVycm9yOiB0aGlzLl9vbkVycm9yLFxuXHRcdFx0b25Qcm9ncmVzczogdGhpcy5fb25Qcm9ncmVzcyxcblx0XHRcdG9uU2Vla2luZzogdGhpcy5fb25TZWVrLFxuXHRcdFx0b25FbmRlZDogdGhpcy5fb25FbmQsXG5cdFx0XHRvbkxvYWRlZE1ldGFkYXRhOiB0aGlzLnByb3BzLm9uVGltZWRNZXRhZGF0YSxcblx0XHRcdG9uQ2FuUGxheTogdGhpcy5wcm9wcy5vblJlYWR5Rm9yRGlzcGxheSxcblx0XHRcdG9uU3RhbGxlZDogdGhpcy5wcm9wcy5vblBsYXliYWNrU3RhbGxlZCxcblx0XHRcdHZvbHVtZSxcblx0XHRcdGNvbnRyb2xzLFxuXHRcdFx0cGF1c2VkLFxuXHRcdFx0bXV0ZWQsXG5cdFx0XHRsb29wOiByZXBlYXQsXG5cdFx0XHRhdXRvUGxheTogIXBhdXNlZCxcblx0XHRcdHN0eWxlLFxuXHRcdFx0cG9zdGVyLFxuXHRcdFx0cGxheXNJbmxpbmU6IHRydWVcblx0XHR9KTtcblx0fTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlkZW87XG4iXX0=