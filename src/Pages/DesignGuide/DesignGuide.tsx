import React from "react";
import Table from "../../Components/Table/Table";

interface Props {}

const DesignGuide = (props: Props) => {
  return (
    <>
      <h1>FinShark Design Page</h1>
      <h2>
        This is finsharks design page. This is where we will house various
        design aspects of the app.{" "}
      </h2>

      <Table />
    </>
  );
};

export default DesignGuide;
