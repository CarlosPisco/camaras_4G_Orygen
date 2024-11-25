"use client";

import { useRouter } from "next/navigation";
import { CiLogout } from "react-icons/ci";


export const Topbar = () => {
  const router = useRouter();

  const handleLogout = () => {
    // Redirige a la página de login
    router.push("/login");
  };

  return (
    <div className="bg-blue-500 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">Control Room</h1>
      <div className="flex items-center space-x-4">
      <button className="mr-4 font-bold text-white">
          Henry Urquizo
        </button>
        
        {/* Botón con ícono */}
        <button
          className="flex items-center font-bold text-white"
          onClick={handleLogout} // Función para cerrar sesión
        >

          Cerrar Sesion <CiLogout />
        </button>

      </div>
    </div>
    
    
  );
};