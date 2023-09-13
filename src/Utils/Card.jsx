/* eslint-disable react/prop-types */
const Card = (props) => {
  return (
    <div className="shadow-md max-h-[490] min-w-[300] rounded-md  mb-20 relative  shadow-slate-700 my-6 ">
      {props.children}
    </div>
  );
};

export default Card;
