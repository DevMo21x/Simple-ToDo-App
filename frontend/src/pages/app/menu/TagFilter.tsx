import { Link } from "react-router-dom";

interface TagFilterProps {
  filterName: string;
  tagColor: string;
  numberOfTasks: number;
  isSelected: boolean;
  onClick: () => void;
}

const TagFiler: React.FC<TagFilterProps> = ({
  filterName,
  tagColor,
  numberOfTasks,
  isSelected,
  onClick,
}) => {
  const boxStyle = {
    backgroundColor: isSelected ? "#F1F5F9" : undefined,
    boxShadow: isSelected
      ? "inset 2px 2px 5px rgba(0, 0, 0, 0.2), inset -2px -2px 5px rgba(255, 255, 255, 0.5)"
      : "2px 2px 5px rgba(0, 0, 0, 0.2), -2px -2px 5px rgba(255, 255, 255, 0.5)",
    transform: isSelected ? "scale(0.98)" : "scale(1)",
    transition: "transform 0.1s ease-in-out, box-shadow 0.1s ease-in-out",
  };
  return (
    <div
      style={boxStyle}
      onClick={onClick}
      className="w-87.5 p-1.5 hover:bg-gray-100 rounded-sm pt-3"
    >
      <Link to="">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <div
              className="border w-6 rounded-4xl"
              style={{ backgroundColor: tagColor }}
            ></div>
            <p>{filterName}</p>
          </div>
          <p className="">{numberOfTasks}</p>
        </div>
      </Link>
    </div>
  );
};

export default TagFiler;
