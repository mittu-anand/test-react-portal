import { RAG_STATUS } from "../Constants/Common";

export const getStatusColor = (ragValue) => {
  switch (ragValue) {
    case RAG_STATUS.green:
      return "#28a745";
    case RAG_STATUS.amber:
      return "#ffbf00";
    case RAG_STATUS.red:
      return "#dc3545";
    default:
      return "#6c757d";
  }
};
