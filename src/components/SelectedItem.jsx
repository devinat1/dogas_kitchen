import { useNavigate } from "react-router-dom";

function SelectedItem(props) {
  const { name, description, image, id } = props;
  const navigate = useNavigate();

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-4 rounded-lg shadow-lg max-w-2xl">
        <img
          src={image}
          alt={name}
          className="max-w-full h-auto border border-gray-300"
        />
      </div>
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <p className="text-lg mb-4">{description}</p>
      <div className="flex justify-center">
        <button
          onClick={() => navigate("/")}
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Back
        </button>
      </div>
    </div>
  );
}

export default SelectedItem;
