'use strict';

const express = require('express');
const knex = require('../knex');

// eslint-disable-next-line new-cap
const router = express.Router();
const humps = require('humps');
// YOUR CODE HERE
router.get('/books', function(req, res){
    knex('books')
      .orderBy('title')
       .then(function(data){
          res.send(humps.camelizeKeys(data))
      })
 })
 router.get('/books/:id', function(req, res){
    knex('books')
       .orderBy('title')
       .where('id', req.params.id)
       .then(function(data){
          res.send(humps.camelizeKeys(data[0]))
       })
 })
 router.post('/books', function(req, res){
    knex('books')
    .returning(['id', 'title', 'author', 'genre', 'description', 'cover_url'])
    .insert({
      'title': req.body.title,
      'author': req.body.author,
      'genre': req.body.genre,
      'description': req.body.description,
      'cover_url': req.body.coverUrl
   })

    .then(function(data){
       res.send(humps.camelizeKeys(data[0]));
    })
 })

 router.patch('/books/:id', (req, res, next) => {
    let id = req.params.id
    knex('books')
       .where('id', id)
      .returning(['*'])
       .update({
         'title': req.body.title,
         'author': req.body.author,
         'genre': req.body.genre,
         'description': req.body.description,
         'cover_url': req.body.coverUrl
      })
       .then(function (data){
          res.send(humps.camelizeKeys(data[0]));
      })
 });
 router.delete('/books/:id', (req, res, next) => {
let id = req.params.id
  knex('books')
    .returning(['title', 'author', 'genre', 'description', 'cover_url'])
    .where('id', id)
    .del()
    .then(data => {
      res.send(humps.camelizeKeys(data[0]));
    });
});

  module.exports = router;
