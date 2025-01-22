import React from "react";
import SectionHeading from "./global/SectionHeading";
import FeaturesCard from "./FeaturesCard";

export default function ComparisonFeatures() {
  const cons = [
    "Manually configure authentication providers",
    "Build custom forms from scratch every time",
    "Limited data visualization options",
    "Redundant code for handling roles and permissions",
    "No built-in dashboard or page sections",
  ];
  const pros = [
    "Pre-configured NextAuth with multiple providers",
    "Reusable form components with validation",
    "Integrated data tables with sorting and filtering",
    "Role-based access control ready out-of-the-box",
    "Beautiful, responsive dashboard and landing page sections",
  ];
  return (
    <div className="text-center">
      <div className="pb-6">
        <SectionHeading title="Why Choose The Complete Fullstack Starter Kit?" />
      </div>
      <div className="py-4 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <FeaturesCard
          features={cons}
          title="Without the Starter Kit"
          className="bg-red-50 text-red-800"
        />
        <FeaturesCard
          features={pros}
          title="With the Starter Kit"
          className="bg-green-50 text-green-800"
        />
      </div>
    </div>
  );
}
