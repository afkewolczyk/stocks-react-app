import React from "react";
import Table from "../../Components/Table/Table";
import RatioList from "../../Components/RatioList/RatioList";
import { CompanyKeyMetrics } from "../../company";
import {
  TestDataCompany,
  testIncomeStatementData,
} from "../../Components/Table/testData";

interface Props {}

const data = TestDataCompany;

const tableConfig = [
  {
    label: "Market Cap",
    render: (company: any) => company.marketCapTTM,
    subTitle: "Total value of all a company's shares of stock",
  },
];

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        This is finsharks design page. This is where we will house various
        design aspects of the app.{" "}
      </h2>
      <RatioList data={data} config={tableConfig} />
      <Table data={testIncomeStatementData} config={tableConfig} />
    </>
  );
};

export default DesignGuide;
