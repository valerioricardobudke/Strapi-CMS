module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '3d95231d4fb9e3e9f4494a30d67ca58d'),
  },
});
