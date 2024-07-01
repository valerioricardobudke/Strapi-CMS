'use strict';

/**
 * our-working-process service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::our-working-process.our-working-process');
