// redirectTo will skip tabBar
// navigateTo, navigateTo:fail webview count limit exceed
// switchTab only apply to pages with tabBar
function gotoUrl(url, tabBarPaths = []) {
  //console.log('gotoUrl', url)
  if (!url) return
  if (tabBarPaths.includes(url)) {
    uni.switchTab({
      url
    })
  } else {
    uni.redirectTo({
      url
    })
  }
}

function getBaseUrl(url) {
  return url.split("?")[0];
}

function getQueryParams(url) {
  // Parse the URL to extract the query string
  const queryString = url.split('?')[1];

  if (!queryString) return {};

  // Split the query string into individual parameter-value pairs
  const paramsArray = queryString.split('&');

  // Create an object to store the parsed parameters
  const params = {};

  paramsArray.forEach(param => {
    const [key, value] = param.split('=');
    params[key] = decodeURIComponent(value);
  });

  return params;
}

function getNewUrl(newParams) {
  if (Object.keys(newParams).length < 1) return;
  // Parse the existing query parameters from the original URL

  const pages = getCurrentPages();
  const pageUrl = pages[pages.length - 1].route;
  const queryParams = getQueryParams(pageUrl);

  // Add or update the query parameters with the newParams
  for (const key in newParams) {
    if (newParams.hasOwnProperty(key)) {
      queryParams[key] = newParams[key];
    }
  }

  // Reconstruct the URL with the updated query parameters
  const baseUrl = pageUrl.split("?")[0];

  const newQuery = Object.keys(queryParams)
    .map(key => `${key}=${encodeURIComponent(queryParams[key])}`)
    .join('&');
  const newUrl = `/${baseUrl}?${newQuery}`;

  return newUrl;
}

export {
  gotoUrl,
  getBaseUrl,
  getNewUrl,
  getQueryParams
}