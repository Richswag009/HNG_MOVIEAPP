import Skeleton from "react-loading-skeleton";

const Loading = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-20 mx-20">
      <div>
        <Skeleton height={400} />
      </div>
      <div>
        <Skeleton height={50} width={300} />
        <Skeleton height={75} />
        <Skeleton height={25} width={150} />
        <Skeleton height={50} />
        <Skeleton height={150} />
        <Skeleton height={50} width={100} />
      </div>
    </div>
  );
};
export default Loading;
