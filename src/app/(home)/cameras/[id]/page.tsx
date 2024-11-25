import CameraStats from "@/app/components/CameraStats";
import CameraView from "@/app/components/CameraView";

interface CameraPageProps {
  params: {
    id: string;
  };
}

export default function CameraPage({ params }: CameraPageProps) {
  const { id } = params
  

  return (
    <div className="flex flex-col h-full">
      <header className="bg-slate-900 text-white p-4 flex justify-between items-center">
        <h1 className="text-lg font-bold">Camera ID: {id}</h1>
      </header>

      <main className="flex-1 bg-gray-100 p-4 flex">
        {/* Main Video and Camera View  */}
        <div className="flex-1">
          <CameraView />
        </div>

        {/* Sidebar Stats */}
        <aside className="w-1/3 bg-gray-800 text-white p-4">
          <CameraStats />
        </aside>
      </main>
    </div>
  );
}
