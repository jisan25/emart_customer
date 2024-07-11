export const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
export const backendImageUrl = process.env.NEXT_PUBLIC_BACKEND_IMAGE_URL;

export const truncateText = (text, maxLength = 30) => {
  if (text.length <= maxLength) {
    return text;
  }

  const truncated = text.substring(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex > 0) {
    return truncated.substring(0, lastSpaceIndex) + "...";
  }

  return truncated + "...";
};
