import Prismic from "prismic-javascript";

export const apiEndpoint = "https://rosaliedev.cdn.prismic.io/api/v2";
export const accessToken = "";

export const linkResolver = (post) => {
  if (post.type === "blog") {
    return `/blog/${post.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (post) => {
  if (post.type === "blog") {
    return "/blog/[uid]";
  }
  return "/";
};
