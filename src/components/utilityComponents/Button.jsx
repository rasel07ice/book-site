const Button = ({ content }) => {
  const { title, color } = content;
  console.log(color);
  return (
    <button
      className={`border-none px-5 py-3 hover:opacity-100 hover:-translate-y-[1px] duration-300 rounded-md ${
        color == "primary" ? "bg-primary" : "bg-backPrimay"
      }`}
    >
      {title}
    </button>
    // <button className="bg-primary border-none px-5 py-3 hover:opacity-100 hover:-translate-y-[1px] duration-300 rounded-md">
    //   {title}
    // </button>
  );
};

export default Button;
