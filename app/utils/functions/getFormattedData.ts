import { format } from "date-fns";

export const formatarData = (data: string) => {
  const dataCriacao = new Date(data);
  const formattedDate = format(dataCriacao, "MMMM dd, yyyy");
  return formattedDate;
};
