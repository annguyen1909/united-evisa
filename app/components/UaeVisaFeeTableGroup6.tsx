import React from "react";

const GROUP6 = {
  nationalities:
    "Argentina, Cook Islands, Fiji, Kiribati, Marshall Islands, Micronesia, Federated States of, Nauru, Niue, Palau, Samoa, Solomon Islands, Tonga, Tuvalu, Uruguay, Vanuatu, Japan, Singapore, Cambodia, East Timor, Haiti, Laos, Malaysia, Portugal, Macedonia, Romania, Saint Lucia, Saint Vincent & the Grenadines, San Marino, Serbia, Slovakia, Slovenia, Spain, Saint Kitts and Nevis, Suriname, Sweden, Switzerland, Taiwan, Tajikistan, Trinidad and Tobago, Turks and Caicos Island, United Arab Emirates, Uzbekistan, Venezuela, Canada, United Kingdom, Russia, Ukraine, United States of America, Anguilla, Bahamas, Belize, Brunei, DM, Barbados, Cayman Islands, Cyprus, Malta, Netherlands, Panama, Albania, Armenia, Aruba, Australia, Austria, Azerbaijan, Belarus, Belgium, Bolivia, Bosnia and Herzegovina, Brazil, Bulgaria, Chile, Colombia, Costa Rica, Croatia, Cuba, Czech Republic, Denmark, DOM, Ecuador, El Salvador, Estonia, Finland, France, Georgia, Germany, Greece, Grenada, Guatemala, Honduras, Hungary, Iceland, Ireland, Italy, Korea, South, Kyrgyzstan, Latvia, Liechtenstein, Lithuania, Luxembourg, Moldova, Mongolia, Montserrat, Nicaragua, Norway, Peru, Philippines, Poland, Andorra, Jordan, Kazakhstan, Kenya, Monaco, Palestine, Montenegro, Vatican City",
  fee30Single: "US$ 160",
  fee30Multiple: "US$ 260",
  fee60Single: "US$ 210",
  fee60Multiple: "US$ 290",
};

export default function UaeVisaFeeTableGroup6() {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full border border-slate-200 text-left text-sm">
        <thead>
          <tr>
            <th
              rowSpan={2}
              className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900"
            >
              Nationality
            </th>
            <th
              colSpan={4}
              className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900"
            >
              Government &amp; admin fee
            </th>
          </tr>
          <tr>
            <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
              30 Days e-Tourist Visa (Single)
            </th>
            <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
              30 Days e-Tourist Visa (Multiple)
            </th>
            <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
              60 Days e-Tourist Visa (Single)
            </th>
            <th className="border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-900">
              60 Days e-Tourist Visa (Multiple)
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-200 px-4 py-4 align-top leading-relaxed text-slate-700">
              {GROUP6.nationalities}
            </td>
            <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
              {GROUP6.fee30Single}
            </td>
            <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
              {GROUP6.fee30Multiple}
            </td>
            <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
              {GROUP6.fee60Single}
            </td>
            <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
              {GROUP6.fee60Multiple}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
