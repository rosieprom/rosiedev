import Prismic from "prismic-javascript";

export const apiEndpoint = "https://rosaliedev.cdn.prismic.io/api/v2";
export const accessToken = "";

export const linkResolver = (post) => {
  if (post.type === "blog") {
    return `/blog/${post.uid}`;
  } else if (post.type === "work") {
    return `/projects`;
  } else if (post.type === "volunteering") {
    return `/volunteering`;
  }
  return "/";
};

// Additional helper function for Next/Link components
export const hrefResolver = (post) => {
  if (post.type === "blog") {
    return "/blog/[uid]";
  } else if (post.type === "work") {
    return "/projects";
  } else if (post.type === "volunteering") {
    return "/volunteering";
  }
  return "/";
};
