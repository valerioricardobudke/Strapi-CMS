'use strict';

/**
 * funfact service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::funfact.funfact');
