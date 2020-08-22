const config = {
  project_name: process.env.REACT_APP_PROJECT_NAME || 'bntp_web',
  node_env: process.env.REACT_APP_NODE_ENV || 'development',
  store_app: process.env.REACT_APP_AUTH_COOKIE_NAME || 'btnp_store_app',
  api_url: process.env.REACT_APP_HOST_MERCHANT_PORTAL || 'http://13.228.25.85:8000',
}

export default config