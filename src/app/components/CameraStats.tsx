import { BiReset } from "react-icons/bi";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleUp } from "react-icons/fa";

interface CameraStatsProps {
    cameraId: string;
  }
  
  export default function CameraStats({ cameraId }: CameraStatsProps) {
    // Simulación de datos. Esto puede venir de un fetch a tu API.
    const stats = {
      incidents: 5,
      detectionRate: 93.2,
      uptime: "643h",
      storageused: 60,
      battery: 80,
    };
  
    return (
      <div>
        <h2 className="text-lg font-bold mb-4">Estadísticas</h2>
        <div className="mb-2">
          <strong>Incidentes detectados:</strong> {stats.incidents}
        </div>
        <div className="mb-2">
          <strong>Detection Rate:</strong> {stats.detectionRate}%
        </div>
        <div className="mb-2">
          <strong>Tiempo de grabación:</strong> {stats.uptime}
        </div>
        <div className="mb-2">
          <strong>Memoria usada:</strong> {stats.storageused} <strong> G /128G </strong>
        </div>
        <div className="mb-2">
          <strong>Porcentaje de bateria:</strong> {stats.battery} <strong>%</strong>
        </div>

              {/* Controles PTZ */}
        <div className="mt-6">
          <h3 className="text-md font-semibold mb-2 text-center">Controles PTZ</h3>
          {/* Contenedor de botones tipo cruz */}
          <div className="grid grid-cols-3 gap-4 w-36 mx-auto">
            {/* Espaciador vacío en la esquina superior izquierda */}
            <div></div>

            {/* Botón para mover arriba */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md"
            >
              <FaArrowAltCircleUp />
            </button>

            {/* Espaciador vacío en la esquina superior derecha */}
            <div></div>

            {/* Botón para mover izquierda */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md"
            >
              <FaArrowAltCircleLeft />
            </button>

            {/* Botón central (opcional para centrar/resetear la cámara) */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md"
            >
            <BiReset />
            </button>

            {/* Botón para mover derecha */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md"
            >
              <FaArrowAltCircleRight />
            </button>

            {/* Espaciador vacío en la esquina inferior izquierda */}
            <div></div>

            {/* Botón para mover abajo */}
            <button
              className="bg-gray-300 hover:bg-gray-400 text-black py-2 px-3 rounded shadow-md"
            >
              <FaArrowAltCircleDown />
            </button>

            {/* Espaciador vacío en la esquina inferior derecha */}
            <div></div>
          </div>
        </div>

      </div>
    );
  }
  