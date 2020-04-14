import Prismic from "prismic-javascript";

export const apiEndpoint = "https://rosaliedev.cdn.prismic.io/api/v2";
export const accessToken = "";

export const linkResolver = (doc) => {
  if (doc.type === "post") {
    return `/blog/${doc.uid}`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (doc) => {
  if (doc.type === "post") {
    return "/blog/[uid]";
  }
  return "/";
};
