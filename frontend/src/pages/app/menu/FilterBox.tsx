import { Link } from "react-router-dom";
import type { FC } from "react";

interface FilterBoxProps {
  Icon: FC<React.SVGProps<SVGSVGElement>>;
  text: string;
  numberOfTasks: number;
  isSelected: boolean;
  onClick: () => void;
}

const FilterBox: React.FC<FilterBoxProps> = ({
  Icon,
  text,
  numberOfTasks,
  isSelected,
  onClick,
}) => {
  const boxStyle = {
    border: isSelected ? "2px solid black" : "1px solid grey",
    backgroundColor: isSelected ? "#F1F5F9" : undefined,
  };

  return (
    <div
      className="max-w-87.5 p-1.5 hover:bg-gray-100 rounded-sm"
      style={boxStyle}
      onClick={onClick}
    >
      <Link to="">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <Icon />
            <p>{text}</p>
          </div>
          <p
            className={`mr-3 ${isSelected && " bg-black  px-2  text-white rounded-2xl"}`}
          >
            {numberOfTasks}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default FilterBox;
