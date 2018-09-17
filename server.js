const http = require('http');
const express = require('express');
const app = express();
const ejs = require('ejs');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('home');
})

.get('/basement', (req, res) => {
  res.setHeader('Content-Type', 'text/plain');
  res.end('You\'re in the wine cellar. Those bottles are mine!');
})

.get('/floor/:floornum/bedroom', (req, res) => {
  res.render('../views/bedroom.ejs', {floor: req.params.floornum});
})

.get('/count/:number', (req, res) => {
  let names = ['Robert', 'Jack', 'David'];
  res.render('../views/page.ejs', {counter: req.params.number, names: names});
})

.use((req, res, next) => {
  res.setHeader('Content-Type', 'text/plain');
  res.status(404).send('Page cannot be found!');
});

app.listen(3000);
