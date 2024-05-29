import "./App.css";
import UploadContainer from "./components/UploadContainer";

function App() {
  return (
    <div className="bg-blue-400">
      <nav className="w-[100dvw] h-[10dvh]">
        <h1 className="text-white font-extrabold text-[30px] pl-4">
          Share File
        </h1>
      </nav>
      <div className="w-[100dvw] h-[25dvh] md:h-[30dvh] flex flex-col gap-1 justify-start items-center">
        <h1 className="font-extrabold text-white text-[30px] md:text-[38px]">
          Send files super fast
        </h1>
        <h3 className="font-bold text-white text-[22px] md:text-[26px]">
          Simple. Fast. Beautiful.
        </h3>
      </div>
      <div className=" w-[100dvw] h-[65dvh] md:h-[60dvh] flex flex-col gap-4 justify-start items-center">
        <UploadContainer />
      </div>
    </div>
  );
}

export default App;
