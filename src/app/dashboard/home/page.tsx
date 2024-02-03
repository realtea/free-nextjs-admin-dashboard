import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Home - Sela Bible Poetry"
  // other metadata
};

const HomePage = () => {
  return (
    <>
      <Breadcrumb pageName="Home" />


      <div className="flex flex-col gap-10">
Home Page        
      </div>
    </>
  );
};

export default HomePage;
