import React from 'react'
import { $t } from '../helpers/locale-helper'

const ContactPage = () => {
  return (
    <>
      <p>{$t("contact-highlight-text")}</p>
      <h2>{$t("contact-information")}</h2>

      <p> <strong>{$t("address")}</strong> Kerk st. No: 10</p>

      <p> <strong>{$t("telephone")}</strong> 0212 123 45 67</p>

      <p> <strong>{$t("gsm")}</strong> 0212 123 45 67</p>

      <p> <strong>{$t("email")}</strong> 2eCqA@example.com</p>

      <h2>{$t("contact-us")}</h2>
      <p>{$t("contact-us-text")}</p>
    </>
  )
}

export default ContactPage
