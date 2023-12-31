module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    headers:{
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, PATCH, OPTIONS',
    }
  }
}