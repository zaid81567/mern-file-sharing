import React, { useEffect, useState, useRef } from "react";
import { uploadFile } from "../services/api";

function UploadContainer() {
  const fileInputRef = useRef();
  const [file, setFile] = useState(null);
  const [fileLink, setFileLink] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    console.log("File state updated:", file);
    const getImage = async () => {
      if (file) {
        console.log("Preparing to upload file...");
        const data = new FormData();
        data.append("name", file.name);
        data.append("file", file);

        //to api (services)
        let res = await uploadFile(data);
        console.log("Upload response:", res);
        setFileLink(res.path);
      }
    };
    getImage(); // Call the getImage function to execute the upload logic
  }, [file]);

  const handleClick = () => {
    fileInputRef.current.click();
    setIsCopied(false);
  };

  const handleCopyBtnClick = () => {
    console.log("copying img link..");
    navigator.clipboard.writeText(fileLink);
    setIsCopied(true);
  };

  return (
    <>
      <div
        className="bg-white w-[80%] md:w-[400px] h-[180px] outline-[5px] outline outline-white outline-dashed outline-offset-8 rounded-lg flex flex-col justify-center items-center gap-4 cursor-pointer hover:scale-105 transition-all"
        onClick={handleClick}
      >
        <img className="h-12 scale-100" src="/gallery-graphic.png" alt="img" />
        <p className="scale-100">Click to upload a file</p>
        <input
          className="hidden"
          type="file"
          name="file"
          id="file"
          ref={fileInputRef}
          onChange={(e) => {
            console.log("File selected:", e.target.files[0]);
            setFile(e.target.files[0]);
          }}
        />
      </div>
      {fileLink ? (
        <div
          className={`${
            isCopied ? "bg-green-300" : "bg-white"
          } rounded-lg overflow-hidden md:mt-4 mt-8 flex flex-col md:flex-row gap-2 transition-all`}
        >
          <a href={fileLink} className="p-2 text-xs">
            {fileLink}
          </a>
          <div
            className="bg-black p-2 cursor-pointer text-white flex justify-center items-center active:bg-slate-600"
            onClick={() => {
              handleCopyBtnClick();
            }}
          >
            <p>{isCopied ? "copied" : "copy"}</p>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default UploadContainer;
