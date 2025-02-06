export default ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true, // <- Enable GraphQL Playground
      introspection: true, // ✅ Enable GraphQL Introspection
      depthLimit: 10,
      amountLimit: 100,
    },
  },
});

/* module.exports = ({ env }) => ({
  graphql: {
    config: {
      endpoint: "/graphql",
      shadowCRUD: true,
      playgroundAlways: true, // <- Enable GraphQL Playground
      depthLimit: 10,
      amountLimit: 100,
    },
  },
}); */
