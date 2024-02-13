import YouTube, { YouTubeProps } from "react-youtube";

export function Video() {
  const onPlayerReady: YouTubeProps["onReady"] = (event) => {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  };

  const opts: YouTubeProps["opts"] = {
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };

  return (
    <YouTube
      className="my-3 w-full"
      videoId={"OyTN-MF-OEg"}
      opts={opts}
      onReady={onPlayerReady}
    />
  );
}
