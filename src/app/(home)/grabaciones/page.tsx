"use client"
import { CiVideoOn } from "react-icons/ci";
import React, { useState } from 'react';

export default function Grabaciones() {
    const [selectedCamera, setSelectedCamera] = useState<number | null>(null);

  const handleCameraClick = (index: number) => {
    setSelectedCamera(index); // Cambia el estado al índice del botón seleccionado
  };
    return (
        <div className="flex flex-col bg-gray-100 h-screen p-4">
        {/* Selección de cámaras */}
        <div className="flex justify-center mb-4 space-x-4 text-black">
        {['Cámara 1', 'Cámara 2', 'Cámara 3', 'Cámara 4'].map((cam, idx) => (
          <button
            key={idx}
            onClick={() => handleCameraClick(idx)} // Cambia el estado al hacer clic
            className={`px-4 py-2 shadow-md rounded-md border transition-colors ${
              selectedCamera === idx
                ? 'bg-blue-500 text-white' // Estilo del botón seleccionado
                : 'bg-white hover:bg-gray-200' // Estilo de los no seleccionados
            }`}
          >
            {cam}
          </button>
        ))}
      </div>
  
        {/* Vista principal */}
        <div className="relative bg-black flex-grow rounded-lg overflow-hidden shadow-lg">
          {/* Placeholder para video */}
          <div className="flex justify-center items-center h-full bg-white">
            <span className="text-black text-4xl font-bold"><CiVideoOn /></span>
          </div>
  
          {/* Controles (Start, Stop, Pause) */}
          <div className="absolute top-2 right-2 space-x-2">
            <button className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600">
              ▶️
            </button>
            <button className="bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-red-600">
              ⏹️
            </button>
            <button className="bg-yellow-500 text-white p-2 rounded-full shadow-lg hover:bg-yellow-600">
              ⏸️
            </button>
          </div>
        </div>
  
        {/* Últimas grabaciones */}
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-4 text-black">Últimas Grabaciones</h3>
          <div className="overflow-x-auto">
            <div className="flex space-x-4">
              {Array.from({ length: 10 }).map((_, idx) => (
                <div
                  key={idx}
                  className="min-w-[150px] bg-white shadow-md rounded-lg h-24 flex items-center justify-center text-gray-400"
                >
                  {/* Placeholder para miniatura */}
                  Miniatura {idx + 1}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};
  