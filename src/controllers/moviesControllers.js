const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");
const moment = require('moment');

const moviesController = {
  home: (req,res) => {
    res.render('home')
  },

  edit:(req,res) => {
    const {id} = req.params
    fetch(`http://localhost:3031/api/movies/${id}`)
    .then((result)=> result.json())
    .then((pelicula) => {
      res.render('formulario',{pelicula})                                                                                                                                                       
    })
  }
}

module.exports = moviesController;