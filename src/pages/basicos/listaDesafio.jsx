export default function lista() {
  const numbers = Array.from({ length: 10 }, (_, i) => i + 1);
  return (
    <div>
      {numbers.map((number) => (
        <span key={number}>{number},</span>
      ))}
    </div>
  );
}
