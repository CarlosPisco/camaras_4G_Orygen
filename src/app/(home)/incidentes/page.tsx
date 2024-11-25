"use client";
import { useState } from "react";

export default function Incidentes() {
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

  const incidents = [
    {
      camera: "Cámara 1",
      dates: [
        {
          date: "24/11/24 9:00:00",
          videoUrl: "https://example.com/video1.mp4",
          thumbnail: "/ORYGEN.jpeg", // URL de la imagen de vista previa
        },
        {
          date: "17/11/24 10:00:00",
          videoUrl: "https://example.com/video2.mp4",
          thumbnail: "/ORYGEN.jpeg",
        },
        {
          date: "12/11/24 10:00:00",
          videoUrl: "https://example.com/video3.mp4",
          thumbnail: "/ORYGEN.jpeg",
        },
      ],
    },
    {
      camera: "Cámara 2",
      dates: [
        {
          date: "3/10/24 9:00:00",
          videoUrl: "https://example.com/video2.mp4",
          thumbnail: "/ORYGEN.jpeg",
        },
        {
          date: "1/10/24 9:00:00",
          videoUrl: "https://example.com/video5.mp4",
          thumbnail: "/ORYGEN.jpeg",
        },
        {
          date: "29/9/24 9:00:00",
          videoUrl: "https://example.com/video6.mp4",
          thumbnail: "/ORYGEN.jpeg",
        },
      ],
    },
  ];

  const openPopup = (videoUrl: string) => {
    setSelectedVideo(videoUrl);
  };

  const closePopup = () => {
    setSelectedVideo(null);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-black">Incidentes</h1>

      {incidents.map((incident, index) => (
        <div key={index} className="mb-8">
          <h2 className="text-xl font-semibold text-black mb-4">
            {incident.camera}
          </h2>

          <div className="flex gap-4 overflow-x-auto pb-4">
            {incident.dates.map((dateObj, idx) => (
              <div
                key={idx}
                onClick={() => openPopup(dateObj.videoUrl)}
                className="relative bg-white shadow-md rounded-lg p-4 min-w-[150px] h-40 flex items-center justify-center text-center border cursor-pointer hover:bg-gray-200"
              >
                {/* Imagen de vista previa */}
                <img
                  src={dateObj.thumbnail}
                  alt="Vista previa"
                  className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                />
                {/* Superposición de la fecha */}
                <span className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white font-bold text-center py-1">
                    {dateObj.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Popup para reproducir video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-2xl">
            <button
              onClick={closePopup}
              className="text-red-500 font-bold mb-4 float-right"
            >
              X
            </button>
            <video
              src={selectedVideo}
              controls
              autoPlay
              className="w-full rounded-lg"
            ></video>
          </div>
        </div>
      )}
    </div>
  );
}
