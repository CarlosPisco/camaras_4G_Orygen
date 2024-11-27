
  
export default function CameraView() {
    return (
      <div className="relative bg-black aspect-video rounded-md overflow-hidden">
        {/* Video en vivo incrustado con iframe */}
        
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/cdTRCcj4DkU?autoplay=1&mute=1&si=S5A6J7VzpC6S0YOr"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>

        {/* Anotaciones dinámicas 
        <div className="absolute bottom-4 left-4 bg-red-600 text-white p-2 rounded-md">
          Armed Annotations Identified
        </div>*/}
      </div>
    );
  }
  