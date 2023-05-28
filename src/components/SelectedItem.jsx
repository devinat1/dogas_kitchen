function SelectedItem(props) {
  const { name, description, image } = props;

  return (
    <div>
      <li>
        <ul>{name}</ul>
        <ul>
          <img src={image} alt={name} />
        </ul>
        <ul>{description}</ul>
      </li>
    </div>
  );
}

export default SelectedItem;
