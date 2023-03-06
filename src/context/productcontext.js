import axios from "axios";
import { useReducer, createContext, useContext, useEffect } from "react";
import reducer from "../reducer/productReducer";
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getproducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const res = await axios.get(url);
      const products = await res.data;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
    // console.log("🔥",products);
  };

  // my 2nd api call for single product

  const getSingleProduct = async (url) => {
    dispatch({type: "SET_SINGLE_LOADING"});
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({type:"SINGLE_ERROR"});
    }
  };

  useEffect(() => {
    getproducts(API);
  }, []);

  return (
    <AppContext.Provider value={{ ...state, getSingleProduct}}>{children}</AppContext.Provider>
  );
};

// custom hook
const useProductContext = () => {
  return useContext(AppContext);
};

export { AppProvider, AppContext, useProductContext };
