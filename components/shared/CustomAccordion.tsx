import { useState } from "react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/lib/hooks";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CustomAccordionProps {
  items: {
    id: string;
    trigger: React.ReactNode;
    content: React.ReactNode;
  }[];
  className?: string;
}

export default function CustomAccordion({ items, className }: CustomAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const isMobile1 = useMediaQuery("(max-width: 639px)");
  const isMobile2 = useMediaQuery("(min-width: 640px) and (max-width: 763px)");

  // Calculate which row the selected item is in
  const getSelectedRow1 = (index: number) => Math.floor(index) + 1;
  const getSelectedRow2 = (index: number) => Math.floor(index / 2) + 1;
  const getSelectedRow4 = (index: number) => Math.floor(index / 4) + 1;

  return (
    <div className={cn("grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4", className)}>
      {items.map((item, index) => (
        <div key={item.id} className="contents">
          {/* Trigger */}
          <button
            onClick={() => setOpenId(openId === item.id ? null : item.id)}
            className={cn(
              "flex flex-col items-center gap-3 p-5 border border-slate-200 rounded-xl bg-white",
              "transition-all duration-300 hover:shadow-md relative group",
              "hover:border-emerald-600",
              openId === item.id && "ring-2 ring-emerald-600 border-emerald-600 shadow-lg bg-emerald-50"
            )}
          >
            <div className="flex flex-col items-center gap-2">
              {item.trigger}
            </div>
            <span 
              className={cn(
                "absolute top-2 right-2 text-slate-400 p-1 rounded-full transition-colors",
                openId === item.id ? "bg-emerald-100 text-emerald-600" : "group-hover:text-emerald-600"
              )}
            >
              {openId === item.id ? (
                <ChevronUp size={16} />
              ) : (
                <ChevronDown size={16} />
              )}
            </span>
          </button>

          {/* Content */}
          {openId === item.id && (
            <div
              className="col-span-full mt-4 mb-6 bg-white rounded-xl text-left shadow-lg"
              style={{
                gridColumn: "1 / -1",
                gridRow: `${(
                  isMobile1
                    ? getSelectedRow1(index)
                    : isMobile2
                      ? getSelectedRow2(index)
                      : getSelectedRow4(index)
                ) + 1}`,
                animation: "fadeIn 0.3s ease-in-out"
              }}
            >
              <div className="relative">
                <div className="absolute w-4 h-4 bg-white transform rotate-45 -top-2 left-1/2 -translate-x-1/2 border-t border-l border-slate-200"></div>
                {item.content}
              </div>
            </div>
          )}
        </div>
      ))}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}