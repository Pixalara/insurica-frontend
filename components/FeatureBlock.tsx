import { LucideIcon } from "lucide-react";

interface FeatureBlockProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function FeatureBlock({ title, description, icon: Icon }: FeatureBlockProps) {
  return (
    <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl border shadow-sm hover:shadow-md transition-shadow">
      <div className="p-3 bg-primary/10 rounded-full mb-4">
        <Icon className="w-8 h-8 text-primary" />
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}
