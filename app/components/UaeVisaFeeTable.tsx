import React from "react";

const GROUPS = [
  {
    nationalities:
      "Algeria, Cape Verde, Egypt, Iran, Iraq, Israel, Mauritania, Sao Tome and Principe, South Africa, Tunisia, Syria",
    fee30Single: "US$ 180",
    fee30Multiple: "US$ 280",
    fee60Single: "US$ 270",
    fee60Multiple: "US$ 370",
  },
  {
    nationalities:
      "Morocco, Zimbabwe, Ivory Coast, Mozambique, Namibia, Rwanda, Uganda, Tanzania, Mauritius, Zambia, Swaziland, Lesotho, Cameroon, Togo, Ethiopia, Gambia, The, Madagascar, Seychelles, Benin, Angola, Niger, Burkina Faso, Chad, Sierra Leone, Guinea-Bissau, Comoros, Burundi, Botswana, Congo, Democratic Republic of the, Congo, Republic of the, Djibouti, Eritrea, Gabon, Ghana, Equatorial Guinea, Liberia, Malawi, Senegal, Mali, Guinea",
    fee30Single: "US$ 300",
    fee30Multiple: "US$ 400",
    fee60Single: "US$ 430",
    fee60Multiple: "US$ 530",
  },
  {
    nationalities: "Bangladesh",
    fee30Single: "US$ 335",
    fee30Multiple: "US$ 435",
    fee60Single: "US$ 490",
    fee60Multiple: "US$ 590",
  },
  {
    nationalities: "Guyana, Jamaica, Papua New Guinea",
    fee30Single: "US$ 200",
    fee30Multiple: "US$ 300",
    fee60Single: "US$ 330",
    fee60Multiple: "US$ 430",
  },
  {
    nationalities: "Nepal, Sri Lanka",
    fee30Single: "US$ 180",
    fee30Multiple: "US$ 280",
    fee60Single: "US$ 330",
    fee60Multiple: "US$ 430",
  },
  {
    nationalities: "India, Thailand, Myanmar, Indonesia, Vietnam",
    fee30Single: "US$ 170",
    fee30Multiple: "US$ 270",
    fee60Single: "US$ 220",
    fee60Multiple: "US$ 300",
  },
];

export default function UaeVisaFeeTable() {
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
          {GROUPS.map((group) => (
            <tr key={group.nationalities}>
              <td className="border border-slate-200 px-4 py-4 align-top leading-relaxed text-slate-700">
                {group.nationalities}
              </td>
              <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
                {group.fee30Single}
              </td>
              <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
                {group.fee30Multiple}
              </td>
              <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
                {group.fee60Single}
              </td>
              <td className="border border-slate-200 px-4 py-4 align-top font-semibold text-slate-900">
                {group.fee60Multiple}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
