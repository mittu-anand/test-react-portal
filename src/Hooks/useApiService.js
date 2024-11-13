import axios from "axios";
import { RAG_STATUS } from "../Constants/Common";
import { BASE_URL, END_POINTS } from "../Constants/Urls";
import { useAppContext } from "../Context/AppContext";

const useApiService = () => {
  const { dispatch } = useAppContext();

  const fetchSites = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/${END_POINTS?.sites}`);
      dispatch({ type: "SET_SITES", payload: response.data });
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  };

  const fetchMonitoringData = async () => {
    try {
      const response = await axios.get(END_POINTS?.monitoring);
      dispatch({ type: "SET_MONITORING", payload: response.data });
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  };

  const groupServicesBySite = (services) => {
    const grouped = {};
    services.forEach((service) => {
      const { siteId, siteName, ragStatus } = service;
      if (!grouped[siteId]) {
        grouped[siteId] = {
          siteId,
          siteName,
          services: [],
          status: RAG_STATUS.green,
        };
      }
      grouped[siteId].services.push(service);
      if (ragStatus === RAG_STATUS.red) {
        grouped[siteId].status = RAG_STATUS.red;
      } else if (
        ragStatus === RAG_STATUS.amber &&
        grouped[siteId].status !== RAG_STATUS.red
      ) {
        grouped[siteId].status = RAG_STATUS.amber;
      }
    });

    return Object.values(grouped);
  };

  return {
    fetchSites,
    fetchMonitoringData,
    groupServicesBySite,
  };
};

export default useApiService;
