import React from "react";
import useTheme from "../contexts/theme";

function ThemeBtn() {
  const { themeMode, lightTheme, darkTheme } = useTheme();

  const onChangeBtn = (e) => {
    if (e.target.checked) darkTheme();
    else lightTheme();
  };

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        onChange={onChangeBtn}
        checked={themeMode === "dark"}
      />
      {/* Outer Track */}
      <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer-checked:bg-blue-600 transition peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800"></div>

      {/* Toggle Circle */}
      <div className="absolute left-0.5 top-0.5 bg-white border border-gray-300 dark:border-gray-600 h-5 w-5 rounded-full transition-transform peer-checked:translate-x-full z-10" />

      <span className="ml-3 text-sm font-medium ">Toggle Theme</span>
    </label>
  );
}

export default ThemeBtn;
