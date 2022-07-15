import Reducer from "./Reducer";
import { createStore } from "redux";
export const CONSTANTS = {
  apiUrl: "https://forunt-point-backend.herokuapp.com/v1/api/",
  faqsEndPoint: "admin/faq/user/getall",
};
const Store = createStore(Reducer);

export default Store;
