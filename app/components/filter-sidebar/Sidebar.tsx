import React, { useState } from "react";
import styles from "./Sidebar.module.css";

const filterCategories = [
  { name: "CUSTOMIZABLE", type: "checkbox" },
  { name: "IDEAL FOR", type: "dropdown", options: ["All"] },
  { name: "OCCASION", type: "dropdown", options: ["All"] },
  { name: "WORK", type: "dropdown", options: ["All"] },
  { name: "FABRIC", type: "dropdown", options: ["All"] },
  { name: "SEGMENT", type: "dropdown", options: ["All"] },
  { name: "SUITABLE FOR", type: "dropdown", options: ["All"] },
  { name: "RAW MATERIALS", type: "dropdown", options: ["All"] },
  { name: "PATTERN", type: "dropdown", options: ["All"] },
];

const FilterSidebar: React.FC = () => {
  const [openCategory, setOpenCategory] = useState<string | null>(null);

  const toggleCategory = (name: string) => {
    setOpenCategory(openCategory === name ? null : name);
  };

  return (
    <aside className={styles.sidebar}>
      {filterCategories.map((category, index) => (
        <div key={index} className={styles.filterCategory}>
          {category.type === "checkbox" ? (
            <label className={styles.checkboxLabel}>
              <input type="checkbox" /> {category.name}
            </label>
          ) : (
            <div>
              <div
                className={styles.dropdownHeader}
                onClick={() => toggleCategory(category.name)}
              >
                <span>{category.name}</span>
                <span className={styles.dropdownArrow}>
                  {openCategory === category.name ? "▲" : "▼"}
                </span>
              </div>
              {openCategory === category.name && (
                <div className={styles.dropdownOptions}>
                  {category.options?.map((option, optionIndex) => (
                    <div key={optionIndex} className={styles.dropdownOption}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      ))}
    </aside>
  );
};

export default FilterSidebar;
