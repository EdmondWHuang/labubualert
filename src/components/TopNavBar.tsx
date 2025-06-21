import React, { useState } from "react";
import { LIST_OF_NAV_TABS } from "../constant";

interface TopNavBarProps {
  selectedTab: string;
  onTabChange: React.Dispatch<React.SetStateAction<string>>;
}

const TopNavBar: React.FC<TopNavBarProps> = ({ selectedTab, onTabChange }) => {
  const [listOfTabs] = useState(LIST_OF_NAV_TABS);

  return (
    <>
      {listOfTabs.map((tab) => (
        <button
          key={`navBarButton-${tab.id}`}
          onClick={() => onTabChange(tab.id)}
          className={`rounded-lg px-5 py-2 font-bold cursor-pointer transition-colors duration-200 ${
            selectedTab === tab.id
              ? "bg-white-base text-rose-quartz"
              : "text-divider-grey hover:bg-tint hover:text-graphite-grey"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </>
  );
};

export default TopNavBar;
