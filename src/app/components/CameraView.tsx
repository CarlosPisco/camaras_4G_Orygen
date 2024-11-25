interface CameraViewProps {
    cameraId: string;
  }
  
  export default function CameraView({ cameraId }: CameraViewProps) {
    return (
      <div className="relative bg-black aspect-video rounded-md overflow-hidden">
        {/* Video en vivo incrustado con iframe */}
        
        <iframe
        className="w-full h-full"
        src="https://www.youtube.com/embed/4hnxKSdKtZI?si=KLNuH5C633CRit8V&autoplay=1&mute=1"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        ></iframe>

        {/* Anotaciones dinámicas 
        <div className="absolute bottom-4 left-4 bg-red-600 text-white p-2 rounded-md">
          Armed Annotations Identified
        </div>*/}
      </div>
    );
  }
  