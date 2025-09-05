import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


interface MasonryItem {
  id: number;
  src: string;
  title: string;
}

interface GridItemProps {
  item: MasonryItem;
}

interface MasonryGridProps {
  items: MasonryItem[];
}

// --- SVG Icons for the hover effect ---


const initialItems = [
  { id:'8',src: "/images/e8.png", title: "Neomotion" },
  { id:'3',src: "/images/e3.webp", title: "Drobots" },
  { id:'6', src: "/images/e6.jpg", title: "ISRO" },
  { id:'7',src: "/images/e7.jpg", title: "Indian Navy" },
  //{ id:'1', src: "/images/e1.jpg", title: "BrahMos" },
  { id:'9',src: "/images/e9.jpg", title: "Raptee Energy" },
  { id:'10',src: "/images/e10.jpg", title: "Satori XR" },
  { id:'2',src: "/images/e2.png", title: "DRDO" },
  { id:'5', src: "/images/e5.png", title: "Guvi Geeks" },
  { id:'4', src: "/images/e4.jpg", title: "Drones for Life" },
  
];


// --- Simplified mock data (no author info) ---



// --- GridItem Component ---
const GridItem: React.FC<GridItemProps> = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="mb-4 break-inside-avoid relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img
        src={item.src}
        alt={item.title}
        className="w-full h-auto rounded-xl shadow-lg"
        onError={(e) => {
          const target = e.target as HTMLImageElement;
          target.onerror = null;
          target.src = `https://placehold.co/400x300/fecaca/333333?text=Image+Not+Found`;
        }}
      />
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-xl"
          >
            <div className="p-4 h-full flex flex-col justify-between">
                <div className="flex justify-start gap-3">
                    <motion.button whileHover={{ scale: 1.1 }} className="p-2 bg-black/30 rounded-lg backdrop-blur-sm group">
                      
                    </motion.button>
                </div>
                <p className="text-white font-bold text-base truncate">{item.title}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// --- MasonryGrid Component ---
const MasonryGrid: React.FC<MasonryGridProps> = ({ items }) => {
  return (
    <div
      className="columns-1 gap-6 sm:columns-2 lg:columns-3 xl:columns-4"
      style={{ columnWidth: '280px' }}
    >
      {items.map((item) => (
        <GridItem key={item.id} item={item} />
      ))}
    </div>
  );
};


// --- Main App Component ---
export default function PrevExhibits() {
  return (
  
    <div className="font-sans transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <main>
            <h2 className="text-4xl md:text-6xl font-primary text-[#00ff84] mb-24 text-center">Previous Exhibits.</h2>
          <MasonryGrid items={initialItems} />
        </main>
      </div>
    </div>
  );
}