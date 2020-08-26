const config = {
  project_name: process.env.REACT_APP_PROJECT_NAME || 'movie_web',
  node_env: process.env.REACT_APP_NODE_ENV || 'development',
  store_app: process.env.REACT_APP_AUTH_COOKIE_NAME || 'movie_store_app',
  api_url: process.env.REACT_APP_HOST_MERCHANT_PORTAL || 'http://www.omdbapi.com',
}

export default config