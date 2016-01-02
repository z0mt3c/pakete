'use strict'

const Joi = require('joi')
// const Boom = require('boom')
// const _ = require('lodash')
// const moment = require('moment')
// const async = require('async')
// const xrc = require('x-result-count')

module.exports.register = function (server, options, next) {
  // var items = server.plugins['hapi-mongodb-profiles'].collection('items')

  server.route({
    method: 'GET',
    path: '/test/{param}',
    config: {
      tags: ['api'],
      validate: {
        params: Joi.object({
          param: Joi.string().required()
        })
      },
      handler: function (request, reply) {
        reply({ params: request.params })
      }
    }
  })

  next()
}

exports.register.attributes = {
  name: 'api',
  version: '1.0.0'
}
