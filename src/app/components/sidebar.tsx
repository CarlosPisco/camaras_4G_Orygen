"use client";

import { usePathname, useRouter  } from "next/navigation";

export const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const links = [
    { name: "Dashboard", path: "/cameras" },
    { name: "Incidentes", path: "/incidentes" },
    { name: "Grabaciones", path: "/grabaciones" },
    
  ];

  return (
    <aside className="w-1/6 bg-gray-800 text-white p-4">
      <ul>
        {links.map((link) => (
          <li
            key={link.path}
            onClick={() => router.push(link.path)}
            className={`mb-4 cursor-pointer hover:underline ${
              pathname === link.path ? "font-bold text-blue-400" : ""
            }`}
          >
            {link.name}
          </li>
        ))}
      </ul>
    </aside>
  );
};