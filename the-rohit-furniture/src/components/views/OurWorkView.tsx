import React, { useState } from 'react';
import { PROJECTS_DATA, type ProjectItem } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';
import { WhatsAppButton } from '../common/WhatsAppButton';
import { createWhatsAppUrl } from '../../utils/whatsapp';
import { Hammer, SlidersHorizontal, CheckCircle2, X } from 'lucide-react';


export const OurWorkView: React.FC = () => {
  const { language } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<'all' | 'furniture' | 'kitchen' | 'doors' | 'windows' | 'custom'>('all');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filterTabs: { id: 'all' | 'furniture' | 'kitchen' | 'doors' | 'windows' | 'custom'; en: string; hi: string }[] = [
    { id: 'all', en: "All Projects", hi: "सभी प्रोजेक्ट्स" },
    { id: 'furniture', en: "Furniture", hi: "फर्नीचर" },
    { id: 'kitchen', en: "Kitchens", hi: "किचन" },
    { id: 'doors', en: "Doors", hi: "दरवाजे" },
    { id: 'windows', en: "Windows", hi: "खिड़कियाँ" },
    { id: 'custom', en: "Custom Work", hi: "कस्टम कार्य" }
  ];

  const filteredProjects = activeFilter === 'all'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter(p => p.category === activeFilter);

  const getProjectWhatsAppUrl = (project: ProjectItem) => {
    const title = language === 'hi' ? project.title.hi : project.title.en;
    const msg = language === 'hi'
      ? `नमस्ते रोहित फर्नीचर! मैंने आपके "हमारा काम (Our Work)" सेक्शन में "${title}" देखा है। मुझे इसी प्रकार का काम अपने लिए करवाना है, कृपया चर्चा करें।`
      : `Hello The Rohit Furniture! I saw your completed project "${title}" in your Our Work gallery. I would like to consult on getting a similar project made.`;
    return createWhatsAppUrl(msg);
  };

  return (
    <div className="py-10 sm:py-16 bg-[#F5EDE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Header */}
        <div className="text-left space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBD9C8]/80 border border-[#D4B896] text-[#7D4A27] text-xs font-bold uppercase tracking-wider">
            <Hammer className="w-3.5 h-3.5" />
            <span>{language === 'hi' ? "वास्तविक कारीगरी का प्रमाण" : "Proof of Real Craftsmanship"}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-[#2C1A0B] tracking-tight">
            {language === 'hi' ? "हमारा काम (Our Work) — पूरा किए गए प्रोजेक्ट्स" : "Our Work — Real Completed Projects"}
          </h1>

          <p className="text-[#5E3D22] text-sm sm:text-base max-w-3xl leading-relaxed">
            {language === 'hi'
              ? "ये हमारे वर्कशॉप द्वारा ग्राहकों के घरों और इमारतों के लिए बनाए गए वास्तविक प्रोजेक्ट्स हैं। हर प्रोजेक्ट में लकड़ी की प्रजाति, पॉलिश और निर्माण प्रक्रिया पारदर्शी रूप से दर्ज है।"
              : "A showcase of real residential and commercial projects built by our team in Mahendragarh. Each project documents the exact timbers used, construction notes, and finishing methods."}
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2 pt-2">
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#7A5536] mr-2 uppercase tracking-wider">
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#7D4A27]" />
              <span>{language === 'hi' ? "फ़िल्टर:" : "Filter:"}</span>
            </div>
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-colors ${
                  activeFilter === tab.id
                    ? 'bg-[#7D4A27] text-white shadow-xs border border-[#6E3F20]'
                    : 'bg-[#FAF6F0] hover:bg-[#EBD9C8] text-[#422A14] border border-[#D4B896]'
                }`}
              >
                {language === 'hi' ? tab.hi : tab.en}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FAF6F0] rounded-2xl border border-[#D4B896] overflow-hidden shadow-xs hover:shadow-md transition-shadow flex flex-col justify-between text-left group"
            >
              <div>
                {/* Image */}
                <div 
                  className="relative aspect-16/10 bg-[#EBD9C8]/40 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title.en}
                    className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-stone-900/80 backdrop-blur-xs text-white text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 space-y-3">
                  <h3 
                    className="font-bold text-[#2C1A0B] text-base sm:text-lg hover:text-[#7D4A27] transition-colors cursor-pointer leading-snug"
                    onClick={() => setSelectedProject(project)}
                  >
                    {language === 'hi' ? project.title.hi : project.title.en}
                  </h3>

                  <p className="text-[#5E3D22] text-xs sm:text-sm leading-relaxed line-clamp-3">
                    {language === 'hi' ? project.description.hi : project.description.en}
                  </p>

                  {/* Materials breakdown */}
                  <div className="bg-[#F5EDE4] p-3 rounded-xl border border-[#D4B896]/60 space-y-1.5 text-xs">
                    <span className="font-bold text-[#2C1A0B] block text-[11px] uppercase tracking-wider text-[#7D4A27]">
                      {language === 'hi' ? "उपयोग की गई सामग्री:" : "Materials Used:"}
                    </span>
                    {project.materials.wood && (
                      <div className="flex items-center gap-1.5 text-stone-700">
                        <span className="font-semibold text-stone-900">{language === 'hi' ? "लकड़ी:" : "Wood:"}</span>
                        <span className="truncate">{project.materials.wood}</span>
                      </div>
                    )}
                    {project.materials.finish && (
                      <div className="flex items-center gap-1.5 text-stone-700">
                        <span className="font-semibold text-stone-900">{language === 'hi' ? "पॉलिश:" : "Finish:"}</span>
                        <span className="truncate">{project.materials.finish}</span>
                      </div>
                    )}
                  </div>

                  {/* Workshop craftsmanship note */}
                  <div className="flex items-start gap-2 text-xs text-emerald-800 bg-emerald-50/70 p-2.5 rounded-lg border border-emerald-100">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <p className="leading-tight">
                      {language === 'hi' ? project.workshopNote.hi : project.workshopNote.en}
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 pt-0">
                <WhatsAppButton
                  url={getProjectWhatsAppUrl(project)}
                  label={language === 'hi' ? "ऐसा काम करवाने हेतु पूछें" : "Inquire Similar Work"}
                  variant="primary"
                  fullWidth
                  className="py-2.5 text-xs sm:text-sm"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs">
            <div className="relative w-full max-w-2xl bg-[#FAF6F0] rounded-2xl shadow-2xl border border-[#D4B896] overflow-hidden max-h-[90vh] flex flex-col">
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#D4B896] bg-[#F5EDE4]">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7D4A27]">
                  {selectedProject.category}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 text-[#7A5536] hover:text-[#2C1A0B] rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-5 sm:p-6 overflow-y-auto space-y-4 text-left">
                <div className="aspect-16/10 rounded-xl overflow-hidden bg-[#EBD9C8]/40 border border-[#D4B896]">
                  <img src={selectedProject.image} alt={selectedProject.title.en} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#2C1A0B]">
                  {language === 'hi' ? selectedProject.title.hi : selectedProject.title.en}
                </h3>
                <p className="text-[#422A14] text-sm leading-relaxed">
                  {language === 'hi' ? selectedProject.description.hi : selectedProject.description.en}
                </p>
                {selectedProject.dimensions && (
                  <div className="text-xs text-stone-600">
                    <strong>Dimensions:</strong> {selectedProject.dimensions}
                  </div>
                )}
                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200 text-xs space-y-1">
                  <span className="font-bold text-stone-900 block mb-1">
                    {language === 'hi' ? "प्रोजेक्ट सामग्री विवरण:" : "Materials Specified:"}
                  </span>
                  {selectedProject.materials.wood && <div><strong>Wood:</strong> {selectedProject.materials.wood}</div>}
                  {selectedProject.materials.plywood && <div><strong>Plywood:</strong> {selectedProject.materials.plywood}</div>}
                  {selectedProject.materials.finish && <div><strong>Finish:</strong> {selectedProject.materials.finish}</div>}
                  {selectedProject.materials.hardware && <div><strong>Hardware:</strong> {selectedProject.materials.hardware}</div>}
                </div>
                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{language === 'hi' ? selectedProject.workshopNote.hi : selectedProject.workshopNote.en}</span>
                </div>
              </div>
              <div className="p-4 border-t border-stone-200 bg-white flex justify-end">
                <WhatsAppButton
                  url={getProjectWhatsAppUrl(selectedProject)}
                  label={language === 'hi' ? "व्हाट्सएप पर चर्चा करें" : "Discuss on WhatsApp"}
                  variant="primary"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};


