import { type ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({
  title,
  size = "medium",
  shape = "rounded-md",
}) => {
  let sizeClasses = "";

  switch (size) {
    case "small":
      sizeClasses = "px-3 py-1 text-sm";
      break;
    case "medium":
      sizeClasses = "px-4 py-2 text-base";
      break;
    case "large":
      sizeClasses = "px-6 py-3 text-lg";
      break;
  }

  return (
    <button
      className={`${sizeClasses} bg-blue-600 text-white font-semibold ${shape} hover:bg-blue-700 transition`}
    >
      {title}
    </button>
  );
};

export default Button;
