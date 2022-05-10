const Card = (props) => {
  const classes = "mx-auto rounded shadow-lg" + props.className;
  return <div className={classes}>{props.children}</div>;
};

export default Card;
