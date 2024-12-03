"use client"
import React, { useState } from "react";
import { BiReset } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";


  
  export default function CameraStats() {
    // Simulación de datos. Esto puede venir de un fetch a tu API.
    const stats = {
      incidents: 5,
      detectionRate: 93.2,
      uptime: "643h",
      storageused: 60,
      battery: 80,
    };
  
    const [zoomLevel, setZoomLevel] = useState<number>(50); // Valor inicial de zoom al 50%
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">Estadísticas</h2>
        <div className="mb-2">
          <strong>Incidentes detectados:</strong> {stats.incidents}
        </div>
        <div className="mb-2">
          <strong>Índice de detección:</strong> {stats.detectionRate}%
        </div>
        <div className="mb-2">
          <strong>Tiempo de grabación:</strong> {stats.uptime}
        </div>
        <div className="mb-2">
          <strong>Memoria usada:</strong> {stats.storageused} <strong> G /128G </strong>
        </div>
        <div className="mb-2">
          <strong>Porcentaje de batería:</strong> {stats.battery} <strong>%</strong>
        </div>

        <div className="mt-6 flex items-center justify-center">
        {/* Controles PTZ */}
        <div>
          <h3 className="text-md font-semibold mb-2 text-center">Controles PTZ</h3>
          {/* Contenedor de botones tipo cruz */}
          <div className="grid grid-cols-3 gap-4 w-36 mx-auto">
            <div></div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md">
              <FaArrowAltCircleUp />
            </button>
            <div></div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md">
              <FaArrowAltCircleLeft />
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md">
              <BiReset />
            </button>
            <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md">
              <FaArrowAltCircleRight />
            </button>
            <div></div>
            <button className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md">
              <FaArrowAltCircleDown />
            </button>
            <div></div>
          </div>
        </div>

        {/* Barra de Zoom */}
        <div className="ml-6">
          <h3 className="text-md font-semibold mb-2 text-center">Zoom</h3>
          <div className="flex flex-col items-center">
            <input
              type="range"
              min="1"
              max="100"
              step="1"
              value={zoomLevel}
              onChange={(e) => setZoomLevel(parseInt(e.target.value))}
              className="w-32"
            />
            <span className="mt-2 text-sm">Zoom: {zoomLevel}%</span>
          </div>
        </div>
      </div>


      </div>
    );
  }
  