import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import { DEFAULT_TAB } from "./constant";
import TopNavBar from "./components/TopNavBar";
import ItemList from "./components/ItemList";
import "./App.css";

const LIST_OF_UPCOMING_RELEASES = [
  {
    id: "1",
    title: "Upcoming Item 1",
    description: "Description for upcoming item 1",
    price: 100,
    releaseTime: "2025-10-01T12:00:00Z",
    imageUrl: null,
  },
  {
    id: "2",
    title: "Upcoming Item 2",
    description: "Description for upcoming item 2",
    price: 150,
    releaseTime: "2025-10-01T12:00:00Z",
    imageUrl: null,
  },
];

const LIST_OF_PAST_RELEASES = [
  {
    id: "3",
    title: "Past Item 1",
    description: "Description for past item 1",
    price: 80,
    releaseTime: "2023-09-15T12:00:00Z",
    imageUrl: null,
  },
  {
    id: "4",
    title: "Past Item 2",
    description: "Description for past item 2",
    price: 120,
    releaseTime: "2023-08-20T12:00:00Z",
    imageUrl: null,
  },
];

function App() {
  const [selectedTab, setSelectedTab] = useState<string>(DEFAULT_TAB);

  return (
    <>
      <div className="min-h-screen w-full flex justify-center">
        <div className="w-full md:w-11/12 flex flex-col items-center">
          <nav className="w-full md:w-11/12 h-1/12 flex flex-row items-center justify-evenly border-b border-divider-grey">
            <TopNavBar selectedTab={selectedTab} onTabChange={setSelectedTab} />
          </nav>
          <main className="w-full md:w-11/12 h-11/12 flex-1 px-8 py-4">
            {selectedTab === "upcomingReleases" && (
              <ItemList items={LIST_OF_UPCOMING_RELEASES} />
            )}
            {selectedTab === "pastReleases" && (
              <ItemList items={LIST_OF_PAST_RELEASES} />
            )}
          </main>
          <div className="w-full text-center text-sm text-gray-500">
            This page is a work in progress. All content and data displayed here
            are for demonstration purposes only and do not represent real or
            actual information. Please check back later for updates and
            finalized features.
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}

export default App;
