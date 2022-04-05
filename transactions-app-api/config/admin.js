module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '95f089510491ae0bdee224200f15d52f'),
  },
});
