'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');

const file = new Q('files');
const db = new Q('database');


const fileEvents = ['save', 'error'];

fileEvents.forEach(event => {
  file.subscribe(event, payload => {
    if(event === 'error'){
      console.error(`${event} happened`, payload);
    }else{
      console.log(`${event} happened`, payload);
    }
  });
});

const dbEvents = ['create', 'read', 'update', 'delete', 'error'];

dbEvents.forEach(event => {
  db.subscribe(event, payload => {
    if(event === 'error'){
      console.error(`${event} happened`, payload);
    }else{
      console.log(`${event} happened`, payload);
    }
  });
});