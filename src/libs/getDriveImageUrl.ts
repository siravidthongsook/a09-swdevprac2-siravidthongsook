export default function getDriveImageUrl(picture: string) {
  const matchedId = picture.match(/[?&]id=([^&]+)/)?.[1];

  if (!matchedId) {
    return picture;
  }

  return `/api/venue-image/${matchedId}`;
}
