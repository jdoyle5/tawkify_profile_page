export const postProfile = profile => (
  $.ajax({
    method: 'POST',
    url: 'api/photos',
    data: { profile }
  })
);
