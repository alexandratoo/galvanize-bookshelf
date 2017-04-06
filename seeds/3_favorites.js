
'use strict';

const express = require('express');

// eslint-disable-next-line new-cap
const router = express.Router();

// YOUR CODE HERE
exports.seed = function(knex) {
return knex('favorites').del()
    .then(function () {
      return Promise.all([
        knex('favorites').insert([{
            id: 1,
           book_id: 1,
            user_id: 1,
           created_at: new Date('2016-06-29 14:26:16 UTC'),
            updated_at: new Date('2016-06-29 14:26:16 UTC')
          }]),
       ]);
    })
     .then(() => {
       return knex.raw("SELECT setval('favorites_id_seq', (SELECT MAX(id) FROM favorites));")
    })
     ;
 };
module.exports = router;
