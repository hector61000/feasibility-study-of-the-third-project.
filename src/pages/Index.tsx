import { useState } from 'react';
import { ProjectCategory, Project } from '@/lib/types';
import { SAMPLE_PROJECTS } from '@/lib/constants';
import { CategoryNav } from '@/components/CategoryNav';
import { ProjectGrid } from '@/components/ProjectGrid';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { OrderForm } from '@/components/OrderForm';
import { useIsMobile } from '@/hooks/use-mobile';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | null>(null);
  const [selectedProjects, setSelectedProjects] = useState<Project[]>([]);
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const isMobile = useIsMobile();

  const handleProjectSelect = (project: Project, isSelected: boolean) => {
    if (isSelected) {
      setSelectedProjects([...selectedProjects, project]);
    } else {
      setSelectedProjects(selectedProjects.filter(p => p.id !== project.id));
    }
  };

  const totalCost = selectedProjects.reduce((sum, project) => sum + project.studyCost, 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#a4c23e] to-[#8ba834] font-[Cairo]" dir="rtl">
      <header className="relative bg-gradient-to-r from-[#234426] to-[#2c5530] shadow-2xl border-b-4 border-[#F97316]/20">
        <div className="container mx-auto px-6 py-6 flex justify-between items-center">
          <div className="flex-1 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl mb-2 drop-shadow-lg">
              جرين لايت للمشروعات ودراسة الجدوى
            </h1>
            <p className="text-xl text-gray-100 font-medium drop-shadow">
              دراسات جدوى احترافية لمشروعك القادم
            </p>
          </div>
          <motion.img 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            src="/logo.png" 
            alt="Green Light Logo" 
            className="h-24 w-auto ml-8 rounded-xl shadow-xl ring-2 ring-white/20"
          />
        </div>
      </header>

      <main className="container mx-auto px-4 py-6">
        <CategoryNav
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />
        <ProjectGrid
          projects={SAMPLE_PROJECTS}
          activeCategory={activeCategory}
          onProjectSelect={handleProjectSelect}
        />
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`fixed ${
            isMobile ? 'bottom-4 left-4 scale-75 origin-bottom-left' : 'bottom-8 left-8'
          } bg-gradient-to-br from-[#F97316] to-[#ea580c] rounded-2xl p-4 shadow-2xl border-2 border-white/80 backdrop-blur-sm`}
          style={{ width: '180px', height: '120px' }}
        >
          <div className="text-xl font-bold mb-2 text-white drop-shadow">
            الإجمالي: {totalCost.toLocaleString()} جنيه
          </div>
          <Button 
            onClick={() => setIsOrderFormOpen(true)}
            className="w-full bg-white text-[#F97316] hover:bg-gray-100 font-bold text-base py-2 rounded-xl transition-all duration-300 hover:scale-105"
          >
            اطلب الآن
          </Button>
        </motion.div>

        <OrderForm 
          isOpen={isOrderFormOpen}
          onClose={() => setIsOrderFormOpen(false)}
          selectedProjects={selectedProjects}
          totalCost={totalCost}
        />
      </main>

      <footer className="bg-[#234426] text-white py-4 text-center mt-20">
        <p className="text-lg">جميع الحقوق محفوظة لشركة جرين لايت © {new Date().getFullYear()}</p>
      </footer>
    </div>
  );
};

export default Index;