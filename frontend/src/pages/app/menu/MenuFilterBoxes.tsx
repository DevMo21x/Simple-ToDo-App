import { Inbox, Calendar, Star, Archive } from "lucide-react";
import FilterBox from "./FilterBox";
import { useState } from "react";
import TagFiler from "./TagFilter";

const MenuFilterBoxes = () => {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null); 

  const handleFilterClick = (filter: string) => {
    setSelectedFilter(filter);
  };

  return (
    <>
    <div className="menu-filter-boxes-container mt-5">
      <div className="menu-p-container mb-5">
        <p>Menu</p>
      </div>
      <div className="flex flex-col gap-2.5">
        <FilterBox
          Icon={Inbox}
          text="All Tasks"
          numberOfTasks={3}
          isSelected={selectedFilter === "All Tasks"} 
          onClick={() => handleFilterClick("All Tasks")}
        />
        <FilterBox
          Icon={Calendar}
          text="Today"
          numberOfTasks={5}
          isSelected={selectedFilter === "Today"}
          onClick={() => handleFilterClick("Today")}
        />
        <FilterBox
          Icon={Star}
          text="Important"
          numberOfTasks={2}
          isSelected={selectedFilter === "Important"}
          onClick={() => handleFilterClick("Important")}
        />
        <FilterBox
          Icon={Archive}
          text="Completed"
          numberOfTasks={13}
          isSelected={selectedFilter === "Completed"}
          onClick={() => handleFilterClick("Completed")}
        />
      </div>
    </div>
    
    {/* Tags container */}
    <div className="tags-container mt-10">
      <div>
        <p>TAGS</p>
      </div>
      <div>
        <TagFiler filterName='Urgent'/>

      </div>

    </div>
      </>

  );
};

export default MenuFilterBoxes;
