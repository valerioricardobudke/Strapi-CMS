module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "duggsweuf", // Update here your cloud_name
        api_key: "158238217352519", // Update here your api_key
        api_secret: "qhkM3l7FX3ddO6E6E3Y5jGKYmpY", // Update here your api_secret
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});