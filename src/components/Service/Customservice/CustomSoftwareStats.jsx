import React from "react";
import StatsComponent from "@/components/shared/StatsComponent";

const CustomSoftwareStats = () => {
  return (
    <StatsComponent
      stats={[
        { value: 8, label: "Years of Expertise" },
        { value: 500, label: "Timely Deliveries" },
        { value: 20, label: "Markets Worldwide" },
        { value: 50, label: "Global Brands" },
      ]}
    />
  );
};

export default CustomSoftwareStats;

