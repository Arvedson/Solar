import React from "react";
import Link from "next/link";
import { FaFlask, FaSolarPanel, FaMoneyBillWave } from "react-icons/fa";

const ThreeButtons: React.FC = () => {
  return (
    <div className="flex justify-center items-center min-h bg-background py-8 px-8">
      <div className="flex flex-col sm:flex-row justify-around items-center w-full max-w-5xl mx-auto space-y-6 sm:space-y-0 sm:space-x-6 lg:space-x-12">
        <Link href="/catalizador" legacyBehavior>
          <a className="flex-1 bg-secondary text-secondary-foreground font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-lg hover:bg-tertiary-foreground hover:text-tertiary transition duration-300 flex items-center justify-center space-x-2 sm:space-x-4 text-lg sm:text-xl border-2 sm:border-4 border-secondary-foreground sm:w-auto w-full h-20 sm:h-auto">
            <FaFlask className="text-2xl sm:text-3xl" />
          </a>
        </Link>
        <Link href="/paneles" legacyBehavior>
          <a className="flex-1 bg-success text-success-foreground font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-lg hover:border-draw transition duration-300 flex items-center justify-center space-x-2 sm:space-x-4 text-lg sm:text-xl border-2 sm:border-4 border-success-foreground sm:w-auto w-full h-20 sm:h-auto">
            <FaSolarPanel className="text-2xl sm:text-3xl" />
          </a>
        </Link>
        <Link href="/peso" legacyBehavior>
          <a className="animated-button flex-1 bg-tertiary text-primary-foreground font-bold py-4 sm:py-6 px-8 sm:px-12 rounded-lg hover:primary-background transition duration-300 flex items-center justify-center space-x-2 sm:space-x-4 text-lg sm:text-xl border-2 sm:border-4 border-tertiary-foreground sm:w-auto w-full h-20 sm:h-auto">
            <FaMoneyBillWave className="text-2xl sm:text-3xl" />
          </a>
        </Link>
      </div>
    </div>
  );
};

export default ThreeButtons;
