module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'arthis-pg.cr4qkgscy7zh.us-east-2.rds.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'cms_strapi'),
      user: env('DATABASE_USERNAME', 'postgres'),
      password: env('DATABASE_PASSWORD', 'k2oKg9abAgFJ'),
      ssl: env.bool('DATABASE_SSL', false),
    },
  },
});
