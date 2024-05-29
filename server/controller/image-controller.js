import File from "../models/file-model.js";

export const uploadImage = async (request, response) => {
  const fileObj = {
    //path of where image uploaded
    path: request.file.path,
    name: request.file.originalname,
  };
  try {
    const file = await File.create(fileObj);
    console.log(file);
    response
      .status(200)
      .json({ path: `http://localhost:8000/file/${file._id}` });
  } catch (error) {
    console.error("Error while uploading Image:", error.message);
    return response.status(500).json({ error: error.message });
  }
};

export const downloadImage = async (request, response) => {
  try {
    const file = await  File.findById(request.params.fileId);
    //count number of time downloaded
    file.downloadContent++;
    await file.save();
    response.download(file.path, file.name);
  } catch (error) {
    console.error(error.message);
    return response.status(500).json({ error: error.message });
  }
};
