import Image from "next/image";
import * as Icons from "react-icons/ri";
import Link from "next/link";

interface ProjectCardProps {
  name: string;
  technologies: string;
  icon: string;
  image: string;
  link: string;
  variant?: "default" | "compact";
}

export default function ProjectCard({
  name,
  technologies,
  icon,
  image,
  link,
  variant = "default",
}: ProjectCardProps) {
  const IconComponent = getIconComponent(icon);

  if (variant === "compact") {
    return (
      <Link href={link} className="flex flex-col items-center space-y-2">
        <Image src={image} alt={name} width={300} height={300} />
        <div className="w-80">
          <h2 className="text-xl">{name}</h2>
          <p className="text-sm">{technologies}</p>
        </div>
      </Link>
    );
  }

  return (
    <Link href={link} className="flex items-start justify-between">
      <div className="flex flex-col items-end w-64 text-right pr-4">
        <div className="bg-black p-1">
          <IconComponent className="h-4 w-4 text-white" />
        </div>
        <h2 className="text-xl">{name}</h2>
        <p className="text-sm">{technologies}</p>
      </div>
      <div>
        <Image src={image} alt={name} width={300} height={500} />
      </div>
    </Link>
  );
}

function getIconComponent(iconName: string) {
  const IconComponent = Icons[iconName as keyof typeof Icons];
  if (!IconComponent) {
    throw new Error(`Icon ${iconName} does not exist in react-icons/ri`);
  }
  return IconComponent;
}
