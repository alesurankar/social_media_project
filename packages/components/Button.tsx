interface Props {
  type?: "button" | "submit" | "reset";
  title?: string;
  titleClassName?: string;
  mainClassName?: string;
  onClick?: () => void;
}

const Button = ({
  type = "button",
  title,
  titleClassName,
  mainClassName,
  onClick,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${mainClassName} w-40 h-12 lg:w-52 lg:h-16 flex items-center justify-center rounded-xl cursor-pointer`}
    >
      {title && <span className={`${titleClassName} text-lg text-textColor`}>{title}</span>}
    </button>
  );
};

export default Button;