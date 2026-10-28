import React, { createContext, useContext, useRef, useState } from 'react';
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  AnimatePresence,
  type MotionValue,
  type SpringOptions,
} from 'framer-motion';

export interface DockContextType {
  mouseX: MotionValue<number>;
  spring: SpringOptions;
  magnification: number;
  distance: number;
}

const DEFAULT_SPRING: SpringOptions = {
  mass: 0.1,
  stiffness: 150,
  damping: 12,
};

const DockContext = createContext<DockContextType>({
  mouseX: { get: () => Infinity, set: () => {} } as unknown as MotionValue<number>,
  spring: DEFAULT_SPRING,
  magnification: 64,
  distance: 140,
});

export interface DockProps {
  children: React.ReactNode;
  className?: string;
  spring?: SpringOptions;
  magnification?: number;
  distance?: number;
}

export const Dock: React.FC<DockProps> = ({
  children,
  className = '',
  spring = DEFAULT_SPRING,
  magnification = 64,
  distance = 140,
}) => {
  const mouseX = useMotionValue(Infinity);

  return (
    <DockContext.Provider value={{ mouseX, spring, magnification, distance }}>
      <motion.nav
        onMouseMove={(e) => mouseX.set(e.pageX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        className={`flex items-end gap-2.5 rounded-2xl border p-2 backdrop-blur-md shadow-xl ${className}`}
      >
        {children}
      </motion.nav>
    </DockContext.Provider>
  );
};

export interface DockItemProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  href?: string;
  title?: string;
  active?: boolean;
}

export const DockItem: React.FC<DockItemProps> = ({
  children,
  className = '',
  onClick,
  href,
  active = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { mouseX, spring, magnification, distance } = useContext(DockContext);
  const [isHovered, setIsHovered] = useState(false);

  const defaultWidth = 44;

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [defaultWidth, magnification, defaultWidth]
  );

  const width = useSpring(widthSync, spring);

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative flex items-center justify-center cursor-pointer transition-colors ${className} ${
        active ? 'ring-2 ring-[#A0673C] ring-offset-2 ring-offset-[#F5EDE4]' : ''
      }`}
    >
      <DockItemContext.Provider value={{ isHovered }}>
        {children}
      </DockItemContext.Provider>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} className="inline-block" onClick={onClick}>
        {content}
      </a>
    );
  }

  return content;
};

const DockItemContext = createContext<{ isHovered: boolean }>({ isHovered: false });

export interface DockIconProps {
  children: React.ReactNode;
  className?: string;
}

export const DockIcon: React.FC<DockIconProps> = ({ children, className = '' }) => {
  return (
    <div className={`flex h-full w-full items-center justify-center p-2.5 select-none ${className}`}>
      {children}
    </div>
  );
};

export interface DockLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const DockLabel: React.FC<DockLabelProps> = ({ children, className = '' }) => {
  const { isHovered } = useContext(DockItemContext);

  return (
    <AnimatePresence>
      {isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 6, scale: 0.9 }}
          animate={{ opacity: 1, y: -10, scale: 1 }}
          exit={{ opacity: 0, y: 4, scale: 0.9 }}
          transition={{ duration: 0.15 }}
          className={`absolute -top-6 left-1/2 -translate-x-1/2 px-2.5 py-0.5 rounded-md text-[11px] font-bold whitespace-nowrap shadow-md pointer-events-none z-50 ${className}`}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};
