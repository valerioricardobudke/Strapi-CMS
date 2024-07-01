'use strict';

/**
 * google-map service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::google-map.google-map');
