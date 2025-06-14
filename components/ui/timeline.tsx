import React from "react";
import { cn } from "@/lib/utils";

interface TimelineItem {
  children: React.ReactNode;
  color?: string;
}

interface TimelineProps {
  items: TimelineItem[];
  className?: string;
}

const Timeline: React.FC<TimelineProps> = ({ items, className }) => {
  return (
    <div className={cn("relative", className)}>
      {items.map((item, index) => (
        <div key={index} className="flex items-start mb-6 last:mb-0">
          {/* Timeline dot */}
          <div className="flex flex-col items-center mr-4">
            <div
              className={cn(
                "w-3 h-3 rounded-full border-2 bg-white dark:bg-black",
                item.color === "black"
                  ? "border-black dark:border-white"
                  : "border-gray-400"
              )}
            />
            {index < items.length - 1 && (
              <div className="w-0.5 h-8 bg-gray-300 dark:bg-gray-600 mt-2" />
            )}
          </div>

          {/* Timeline content */}
          <div className="flex-1 min-w-0">{item.children}</div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
