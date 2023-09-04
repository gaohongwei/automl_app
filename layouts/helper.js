// function getQueryParams(url) {
//   const queryParams = {};
//   const queryString = url.split("?")[1];
//   if (queryString) {
//     const params = new URLSearchParams(queryString);
//     params.forEach((value, key) => {
//       queryParams[key] = value;
//     });
//   }
//   return queryParams;
// }

function getNewUrl(url, newParams) {
  // Parse the existing query parameters from the original URL
  const queryParams = new URLSearchParams(url.split("?")[1]);

  // Add or update the query parameters with the newParams
  for (const key in newParams) {
    if (newParams.hasOwnProperty(key)) {
      queryParams.set(key, newParams[key]);
    }
  }

  // Reconstruct the URL with the updated query parameters
  const baseUrl = url.split("?")[0];
  const newUrl = `${baseUrl}?${queryParams.toString()}`;

  return newUrl;
}

export {
  getNewUrl,
}