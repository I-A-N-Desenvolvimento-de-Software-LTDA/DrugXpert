"use client";
import { ArrowRight } from "lucide-react";
import React, { ReactNode } from "react";
import { useRouter } from "next/navigation"; // Importando o hook useRouter

interface CTACardProps {
  title: string;
  subtitle: string;
  children: ReactNode;
  href: string; // Adicionado prop para a rota
}

const CTACard: React.FC<CTACardProps> = ({ title, subtitle, children, href }) => {
  const router = useRouter(); // Instanciando o router

  const handleNavigation = () => {
    router.push(href); // Navegar para a rota especificada
  };

  return (
    <div className="rounded-lg border border-stroke bg-white px-7.5 py-6 shadow-sm dark:border-[#181818] dark:bg-[#181818]">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        {children}
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-semibold text-black dark:text-white">
            {title}
          </h4>
          <span className="text-sm font-medium">{subtitle}</span>
        </div>
      </div>

      <div
        className="mt-2 w-min cursor-pointer rounded-full bg-[#64748b] p-2"
        onClick={handleNavigation} // Evento de clique para navegar
      >
        <span className="text-sm text-white">
          <ArrowRight size={20} />
        </span>
      </div>
    </div>
  );
};

export default CTACard;
