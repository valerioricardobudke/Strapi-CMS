'use strict';

/**
 * subscribe-our-newsletter service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::subscribe-our-newsletter.subscribe-our-newsletter');
