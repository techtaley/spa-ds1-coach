module.exports = ({ env }) => ({
    'strapi-plugin-populate-deep': {
      config: {
        defaultDepth: 3, // Default is 5
      }
    },
    'import-export-entries': {
      enabled: true,
      config: {
        // See `Config` section.
      },
    },  
  });