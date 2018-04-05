export const postPhoto = photo => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { photo }
  })
);
