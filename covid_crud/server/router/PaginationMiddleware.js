const patientModel = require("../model/patientModel")
const express=require('express');
const app=express();

function paginatedResults(patientModel) {
    return async (req, res, next) => {
      const page = parseInt(req.query.page)
      const limit = parseInt(req.query.limit)
  
      const startIndex = (page - 1) * limit
      const endIndex = page * limit
  
      const results = {}
  
      if (endIndex < await patientModel.countDocuments().exec()) {
        results.next = {
          page: page + 1,
          limit: limit
        }
      }
      
      if (startIndex > 0) {
        results.previous = {
          page: page - 1,
          limit: limit
        }
      }
      try {
        results.results = await patientModel.find().limit(limit).skip(startIndex).exec()
        res.paginatedResults = results
        res.send(res.paginatedResults)
        next()
      } catch (e) {
        res.status(500).json({ message: e.message })
      }
    }
  }

  app.get('/pagination', paginatedResults(patientModel), (req, res) => {
    res.json(res.paginationResults)
  })

  module.exports=paginatedResults;