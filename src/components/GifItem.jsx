export const GifItem = ({ title, url }) => {
  return (
    <div className="card" title={title}>
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  );
};
