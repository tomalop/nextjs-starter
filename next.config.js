const posts = require("./data/posts")

module.exports = {
  trailingSlash: true,
  exportPathMap: async function () {
    const paths = {
      "/": { page: "/" },
    };

    for (const post of posts) {
      paths[`/posts/${post}`] = {
        page: "/posts/[post]",
        query: {
          post: post,
        },
      };
    }

    return paths;
  },
};
