interface TechStackButtonProps {
  name: string;
  icon: string;
}

function TechStackButton({ name, icon }: TechStackButtonProps) {
  return (
    <div className={`
      px-3 py-1.5 rounded-full text-sm font-medium
      transition-all duration-300 ease-in-out
      ${icon}
      hover:shadow-md hover:-translate-y-0.5
    `}>
      {name}
    </div>
  );
}

export default TechStackButton;