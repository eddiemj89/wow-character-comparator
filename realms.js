const axios = require('./lib/axios');
const _ = require('lodash');

class Realm {
  constructor(realm) {
    this.type = realm.type;
    this.name = realm.name;
    this.slug = realm.slug;
    this.locale = realm.locale;
    this.timezone = realm.timezone;
  }
};

axios.battlenet.get('/realm/status', {
  locale: 'en_US'
}).then(function(ret) {
  const realms = _.map(ret.data.realms, realm => new Realm(realm));
  console.log(realms[0]);
}).catch(function(error) {
  console.log('error: ', error);
})

/*
type: 'pvp',
population: 'medium',
queue: false,
status: true,
name: 'Aegwynn',
slug: 'aegwynn',
battlegroup: 'Vengeance',
locale: 'en_US',
timezone: 'America/Chicago',
connected_realms: [ 'daggerspine', 'bonechewer', 'gurubashi', 'hakkar', 'aegwynn' ]
 */