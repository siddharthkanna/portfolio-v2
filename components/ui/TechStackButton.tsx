interface TechStackButtonProps {
  name: string;
  icon: string;
}

function TechStackButton({ name, icon }: TechStackButtonProps) {
  return (
    <div className="flex items-center gap-2 px-3 py-1.5 text-sm font-medium font-outfit text-gray-700 dark:text-gray-300">
      <div className={`h-2 w-2 rounded-full ${icon}`} />
      <span>{name}</span>
    </div>
  );
}

export default TechStackButton;
  