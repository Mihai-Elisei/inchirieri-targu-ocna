interface CustomButtonProps {
  label: string;
  className?:string;
  onClick: () => void;
  
}

const CustomButton: React.FC<CustomButtonProps> = ({ label, onClick, className }) => {
  return (
    <div
      onClick={onClick}
      className={`w-full py-4 bg-main hover:bg-main-dark text-white text-center rounded-xl transition cursor-pointer ${className}`}
    >
      {label}
    </div>
  );
};

export default CustomButton;
