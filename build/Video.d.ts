import { Component } from "react";
import { VideoProperties } from "react-native-video";
export declare type VideoSource = {
    uri?: string;
} | number;
interface Props extends VideoProperties {
}
export declare class Video extends Component<Props> {
    private _root;
    private get _url();
    setNativeProps: () => void;
    seek: (time: number, _?: number | undefined) => void;
    save: () => Promise<void>;
    presentFullscreenPlayer: () => void;
    dismissFullscreenPlayer: () => void;
    componentDidMount(): void;
    componentDidUpdate(prevProps: VideoProperties): void;
    private _onProgress;
    private _onLoadStart;
    private _onLoad;
    private _onError;
    private _onSeek;
    private _onEnd;
    render: () => import("react").DOMElement<{
        ref: import("react").RefObject<HTMLVideoElement>;
        src: string | number | undefined;
        onLoadStart: () => void;
        onLoadedData: (event: import("react").SyntheticEvent<HTMLVideoElement, Event>) => void;
        onError: (error: any) => void;
        onProgress: (event: any) => void;
        onSeeking: () => void;
        onEnded: () => void;
        onLoadedMetadata: (() => void) | undefined;
        onCanPlay: (() => void) | undefined;
        onStalled: (() => void) | undefined;
        volume: number | undefined;
        controls: boolean | undefined;
        paused: boolean | undefined;
        muted: boolean | undefined;
        loop: boolean | undefined;
        autoPlay: boolean;
        style: import("react-native").StyleProp<import("react-native").ViewStyle>;
        poster: string | undefined;
        playsInline: boolean;
    }, HTMLVideoElement>;
}
export default Video;
