import PropTypes from "prop-types";

export const GifItem = ({ title, url }) => {
  return (
    <div className="card" title={title}>
      <img src={url} alt={title} />
      <p data-testid="p-title">{title}</p>
    </div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
