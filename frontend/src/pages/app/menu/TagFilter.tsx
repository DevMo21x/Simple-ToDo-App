import { Link } from "react-router-dom";

interface TagFilterProps {
  filterName: string;
}
const TagFiler: React.FC<TagFilterProps> = ({ filterName }) => {
  return (
    <div className="max-w-87.5 p-1.5 hover:bg-gray-100 rounded-sm">
      <Link to="">
        <div className="flex justify-between">
          <div className="flex gap-3">
            <p>{}</p>
          </div>
          <p className={`mr-3 `}>{}</p>
        </div>
      </Link>
    </div>
  );
};

export default TagFiler;
