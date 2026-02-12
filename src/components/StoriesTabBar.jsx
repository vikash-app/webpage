import { NavLink } from "react-router-dom";

const tabs = [
  { label: "Stories", to: "/travel-stories", end: true },
];

function StoriesTabBar() {
  return (
    <nav className="border-b border-gray-200 dark:border-gray-700 mb-8">
      <ul className="flex justify-center gap-8">
        {tabs.map((tab) => (
          <li key={tab.to}>
            <NavLink
              to={tab.to}
              end={tab.end}
              className={({ isActive }) =>
                `inline-block pb-3 px-1 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-pink-600 border-b-2 border-pink-500"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200"
                }`
              }
            >
              {tab.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default StoriesTabBar;
