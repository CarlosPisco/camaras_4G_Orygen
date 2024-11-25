"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CameraDashboard() {
  const [cameras] = useState([
    { id: 1, name: "Cámara 1", src: "/ORYGEN.jpeg" },
    { id: 2, name: "Cámara 2", src: "/ORYGEN.jpeg" },
    { id: 3, name: "Cámara 3", src: "/ORYGEN.jpeg" },
    { id: 4, name: "Cámara 4", src: "/ORYGEN.jpeg" },
  ]);
  const router = useRouter();

  const handleCameraClick = () => {
    router.push(`/camera-details`); // Redirige al enlace de la cámara
  };

  return (
    <div className="flex flex-col h-screen">

      <div className="flex flex-1">
        

        {/* Main Content */}
       
        <div className="flex-1 grid grid-cols-2 gap-4 p-4">
            
          {cameras.map((camera) => (
            <div
              key={camera.id}
              className="bg-white text-black rounded-md overflow-hidden shadow-md cursor-pointer transform transition-all duration-300 hover:scale-105"
              onClick={() => handleCameraClick()} // Añadido el evento de clic
            >
              <img
                src={camera.src}
                alt={camera.name}
                className="w-full h-48 object-cover rounded-t-md" // La imagen ocupa el 100% de la anchura y tiene un borde redondeado arriba
              />
              <div className="p-2 text-center font-bold bg-gray-800 text-white rounded-b-md">
                {camera.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}
