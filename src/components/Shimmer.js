const ShimmerCards = () => {
  return <div className="bg-gray-300 w-72 m-4 h-44"></div>;
};

const Shimmer = () => {
  return (
    <div className="flex flex-wrap m-4">
      {Array(12)
        .fill()
        .map((i, k) => (
          <div key={k}>
            <ShimmerCards />
          </div>
        ))}
    </div>
  );
};

export default Shimmer;
