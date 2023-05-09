import noImage from "../assets/no-image-placeholder.webp";

const croppedImageUrl = (url: string) => {
  if (!url) return noImage;
  const target = "media/";
  let index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default croppedImageUrl;
