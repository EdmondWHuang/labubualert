type NavTabsType = { id: string; label: string };
const LIST_OF_NAV_TABS: NavTabsType[] = [
  { id: "upcomingReleases", label: "Upcoming" },
  { id: "pastReleases", label: "Past Releases" },
];

const DEFAULT_TAB = LIST_OF_NAV_TABS[0].id;

export { LIST_OF_NAV_TABS, DEFAULT_TAB };
