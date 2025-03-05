const YouTubeFrame = ({ url }: { url: string }) => {
  const videoId = url.split("v=")[1]?.split("&")[0] || url.split("youtu.be/")[1]
  const embedUrl = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="w-full max-w-[560px] overflow-hidden rounded-xl">
      <iframe
        width="100%"
        height="315"
        src={embedUrl}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default YouTubeFrame
