import angola from "./angola";
import armenia from "./armenia";
import australia from "./australia";
import azerbaijan from "./azerbaijan";
import bahrain from "./bahrain";
import benin from "./benin";
import cambodia from "./cambodia";
import canada from "./canada";
import djibouti from "./djibouti";
import egypt from "./egypt";
import ethiopia from "./ethiopia";
import gabon from "./gabon";
import georgia from "./georgia";
import hongKong from "./hong-kong";
import india from "./india";
import indonesia from "./indonesia";
import kazakhstan from "./kazakhstan";
import kenya from "./kenya";
import kuwait from "./kuwait";
import kyrgyzstan from "./kyrgyzstan";
import laos from "./laos";
import malawi from "./malawi";
import malaysia from "./malaysia";
import moldova from "./moldova";
import mongolia from "./mongolia";
import newZealand from "./new-zealand";
import oman from "./oman";
import pakistan from "./pakistan";
import qatar from "./qatar";
import rwanda from "./rwanda";
import saintHelena from "./saint-helena";
import saudiArabia from "./saudi-arabia";
import southAfrica from "./south-africa";
import sriLanka from "./sri-lanka";
import taiwan from "./taiwan";
import tajikistan from "./tajikistan";
import tanzania from "./tanzania";
import uganda from "./uganda";
import uae from "./uae";
import unitedKingdom from "./united-kingdom";
import uzbekistan from "./uzbekistan";
import vietnam from "./vietnam";
import zambia from "./zambia";
import zimbabwe from "./zimbabwe";

export const COUNTRIES = [
  angola, armenia, australia, azerbaijan, bahrain, benin, cambodia, canada,
  djibouti, egypt, ethiopia, gabon, georgia, hongKong, india, indonesia,
  kazakhstan, kenya, kuwait, kyrgyzstan, laos, malawi, malaysia, moldova,
  mongolia, newZealand, oman, pakistan, qatar, rwanda, saintHelena,
  saudiArabia, southAfrica, sriLanka, taiwan, tajikistan, tanzania,
  uganda, uae, unitedKingdom, uzbekistan, vietnam, zambia, zimbabwe
];

export function getCountryBySlug(slug: string) {
  const normalized = slug.toLowerCase();

  return COUNTRIES.find(
    (country) =>
      country.slug.toLowerCase() === normalized ||
      country.code.toLowerCase() === normalized ||
      country.name.toLowerCase().replace(/\s+/g, '-') === normalized
  );
}
