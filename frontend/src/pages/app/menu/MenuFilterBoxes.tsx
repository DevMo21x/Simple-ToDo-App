import { Inbox, Calendar, Star, Archive } from "lucide-react";
import FilterBox from "./FilterBox";
import { useState } from "react";

const MenuFilterBoxes = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); 

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <div className="menu-filter-boxes-container mt-5">
      <div className="menu-p-container mb-5">
        <p>Menu</p>
      </div>
      <div className="flex flex-col gap-2.5">
        <FilterBox
          Icon={Inbox}
          text="All Tasks"
          isSelected={selectedFilter === "All Tasks"} 
          onClick={() => handleFilterClick("All Tasks")}
        />
        <FilterBox
          Icon={Calendar}
          text="Today"
          isSelected={selectedFilter === "Today"}
          onClick={() => handleFilterClick("Today")}
        />
        <FilterBox
          Icon={Star}
          text="Important"
          isSelected={selectedFilter === "Important"}
          onClick={() => handleFilterClick("Important")}
        />
        <FilterBox
          Icon={Archive}
          text="Completed"
          isSelected={selectedFilter === "Completed"}
          onClick={() => handleFilterClick("Completed")}
        />
      </div>
    </div>
  );
};

export default MenuFilterBoxes;
