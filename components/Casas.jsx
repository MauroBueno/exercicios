export default function Casas({ isBlack, prefix }) {
  const className = `${prefix.casas} ${isBlack ? prefix.black : prefix.white}`;
  return <div className={className}></div>;
}
