const Video = () => {
    const videoUrl =
      "https://live.staticflickr.com/video/53808141483/834ef8b783/1080p.mp4?s=eyJpIjo1MzgwODE0MTQ4MywiZSI6MTcxOTA2MDAyMywicyI6ImYyOWY0YTNlYzRiMTEyZDE0Nzg0YTg2MmYzNGRiMjI3YzE4N2YwN2EiLCJ2IjoxfQ";
    return (
      <div className="w-full h-[550px] overflow-hidden">
        <div className="h-full w-full">
          <video className="h-full w-full object-cover" src={videoUrl} autoPlay muted loop />
        </div>
      </div>
    );
  };
  
  export { Video };
  