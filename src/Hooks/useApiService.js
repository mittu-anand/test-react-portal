import axios from "axios";
import { RAG_STATUS } from "../Constants/Common";
import { BASE_URL, END_POINTS } from "../Constants/Urls";
import { useAppContext } from "../Context/AppContext";

const useApiService = () => {
  const { dispatch } = useAppContext();

  const fetchDashboardData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}${END_POINTS?.sites}`);
      dispatch({ type: "SET_DASHBOARD_DATA", payload: response.data });
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  };

  const fetchSiteData = async (siteCode) => {
    try {
      const url = `${BASE_URL}${END_POINTS?.sitesDashboard}?siteCode=${siteCode}`;
      const response = await axios.get(url);
      dispatch({ type: "SET_SITES_DATA", payload: response.data });
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  };

  const fetchServiceData = async (siteCode, serviceName) => {
    try {
      const url = `${BASE_URL}${END_POINTS?.service}?siteCode=${siteCode} && serviceName=${serviceName}`;
      const response = await axios.get(url);
      dispatch({ type: "SET_SERVICE_DATA", payload: response.data });
    } catch (error) {
      console.error(error.message);
    } finally {
    }
  };

  const groupServicesBySite = (services) => {
    const grouped = {};
    services?.forEach((service) => {
      const { siteId, siteName, ragStatus, siteCode } = service;
      if (!grouped[siteId]) {
        grouped[siteId] = {
          siteId,
          siteCode,
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
    fetchDashboardData,
    fetchSiteData,
    fetchServiceData,
    groupServicesBySite,
  };
};

export default useApiService;
