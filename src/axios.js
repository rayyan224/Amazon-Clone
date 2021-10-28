import axios from "axios";

const instance = axios.create({
  baseURL: "https://us-central1-clone-b82b7.cloudfunctions.net/api",
  //   API URL cloud function URL
});

export default instance;
