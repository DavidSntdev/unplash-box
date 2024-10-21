export const getButtonStyle = (path: string, currentPath: string) => {
  return currentPath === path
    ? "bg-cinza text-azulEscuro"
    : "bg-transparent text-cinzaEscuro";
};
