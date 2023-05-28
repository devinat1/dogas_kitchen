function SelectedItem(props) {
  const { name, description, image, id } = props;

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{name}</h1>
      <img
        src={image}
        alt={name}
        className="mb-4 rounded-lg shadow-lg max-w-full h-auto border border-gray-300"
      />
      <p className="text-lg mb-4">{description}</p>
    </div>
  );
}

export default SelectedItem;
