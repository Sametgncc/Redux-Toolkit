import React from "react";
import { $t } from "../helpers/locale-helper";

const BlogPage = () => {
  return (
    <>
      <p>{$t("blog-paragraph-1")}</p>

      <p>{$t("blog-paragraph-2")}</p>
    </>
  );
};

export default BlogPage;
