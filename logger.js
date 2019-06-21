'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');

const file = new Q('files');
const db = new Q('database');

