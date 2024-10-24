export const handleDownloadLink = (href: string) => {
  const fileUrl: string = href;
  const link = document.createElement("a");
  link.href = fileUrl;
  link.target = "_blank";
  link.download = "image.png";

  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
