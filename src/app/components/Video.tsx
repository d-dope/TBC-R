import React from "react";

const Video = () => {
  const videoUrl =
    "https://1mwujqq5q9dsefex.public.blob.vercel-storage.com/LandingVideo%20(online-video-cutter.com)%20(1)-EcDCxFCt1wlkBORoQTfaHbRefZ9WtY.mp4";

  return (
    <div className="w-full h-[550px] overflow-hidden">
      <div className="h-full w-full">
        <video
          className="h-full w-full object-cover filter brightness-50"
          src={videoUrl}
          autoPlay
          muted
          loop
        />
      </div>
    </div>
  );
};

export { Video };
