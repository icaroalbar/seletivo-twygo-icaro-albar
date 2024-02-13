import YouTube, { YouTubeProps } from "react-youtube";

type videoProps = {
  id: string;
};

export function Video({ id }: videoProps) {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    width: "100%",
    height: "500",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      className="my-3"
      videoId={id}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
