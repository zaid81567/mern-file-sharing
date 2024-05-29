import axios from "axios"; // used to fetch data from api (to call api)

const API_URL = "http://localhost:8000";

export const uploadFile = async (data) => {
  try {
    console.log("Uploading file...");
    // axios returns an object
    let res = await axios.post(`${API_URL}/upload`, data);
    console.log("File uploaded successfully:", res.data);
    //axios automatically parse JSON obj directly whereas Fetch Api doesn't.
    return res.data;
  } catch (error) {
    console.log("Error uploading file:", error.message);
  }
};
