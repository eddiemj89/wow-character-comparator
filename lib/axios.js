const axios = require('axios');
const battlenetConfig = require('../config/battlenet.config.json');
const warcraftlogsConfig = require('../config/warcraftlogs.config.json');

const battlenetInstance = axios.create({
  baseURL: battlenetConfig.baseURL,
  timeout: 1000,
  headers: {},
  params: {
    apikey: battlenetConfig.key
  }
});

const warcraftlogsInstance = axios.create({
  baseURL: warcraftlogsConfig.baseURL,
  timeout: 1000,
  headers: {},
  params: {
    api_key: warcraftlogsConfig.public
  }
});

module.exports = {
  warcraftlogs: warcraftlogsInstance,
  battlenet: battlenetInstance
};

