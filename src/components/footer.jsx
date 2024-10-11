import React from "react";
import { $t } from "../helpers/locale-helper";
import { useSelector } from "react-redux";

const Footer = () => {
  return (
    <footer className="bg-body-tertiary text-center p-4">
      &copy; {new Date().getFullYear()} - {$t("copyright-text")}
    </footer>
  );
};

export default Footer;
