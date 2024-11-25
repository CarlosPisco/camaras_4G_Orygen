"use client";
import Image from 'next/image';
import logo from '../../../../public/orygenlogo.png'; 
import {useRouter } from "next/navigation";
import { DiRequirejs } from 'react-icons/di';

export default function LoginPage() {

    const router = useRouter ();  // Hook para redirigir a otras páginas

    const handleLoginClick = () => {
        
        router.push('/cameras');  
    };

    return (
        <div className="relative h-screen w-screen overflow-hidden">
      {/* Video de fondo */}
      <video
        src='/video.mp4'
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Capa de sombreado para mejorar contraste */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenedor del formulario */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-lg w-full flex items-center gap-8">
          {/* Sección del Logo */}
          <div className="hidden sm:block w-1/2 flex justify-center">
          <Image
              src={logo}  // Usamos el import del logo
              alt="Logo"
              className="transform scale-110" 
            />
          </div>

          {/* Sección del Formulario */}
          <div className="w-full sm:w-2/3">
            <h1 className="text-2xl font-bold mb-6 text-center text-white">Inicio de Sesión</h1>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-white"
                >
                  Usuario
                </label>
                <input
                  id="username"
                  type="text"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-black"
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-white"
                >
                  Contraseña
                </label>
                <input
                  id="password"
                  type="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 text-black"
                />
              </div>
              <button
                type="button"
                onClick={handleLoginClick} 
                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700  "
              >
                Iniciar Sesión
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
  }