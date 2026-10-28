import React from 'react';
import {
  Activity,
  Component,
  HomeIcon,
  Package,
  ScrollText,
  SunMoon,
  Phone,
  MessageCircle,
} from 'lucide-react';
import { Dock, DockIcon, DockItem, DockLabel } from '@/components/core/dock';
import type { NavTab } from '../common/Header';

export interface AppleStyleDockProps {
  activeTab?: NavTab;
  onSelectTab?: (tab: NavTab) => void;
  onOpenCall?: () => void;
  className?: string;
}

export function AppleStyleDock({
  activeTab = 'home',
  onSelectTab,
  onOpenCall,
  className = '',
}: AppleStyleDockProps) {
  const dockItems = [
    {
      id: 'home' as NavTab,
      title: 'Home',
      icon: <HomeIcon className="h-full w-full text-[#422A14]" />,
      action: () => onSelectTab?.('home'),
    },
    {
      id: 'furniture' as NavTab,
      title: 'Products',
      icon: <Package className="h-full w-full text-[#422A14]" />,
      action: () => onSelectTab?.('furniture'),
    },
    {
      id: 'kitchens' as NavTab,
      title: 'Kitchens',
      icon: <Component className="h-full w-full text-[#422A14]" />,
      action: () => onSelectTab?.('kitchens'),
    },
    {
      id: 'made_to_order' as NavTab,
      title: 'Activity',
      icon: <Activity className="h-full w-full text-[#422A14]" />,
      action: () => onSelectTab?.('made_to_order'),
    },
    {
      id: 'doors_windows' as NavTab,
      title: 'Doors & Windows',
      icon: <ScrollText className="h-full w-full text-[#422A14]" />,
      action: () => onSelectTab?.('doors_windows'),
    },
    {
      id: 'email' as const,
      title: 'WhatsApp',
      icon: <MessageCircle className="h-full w-full text-[#25D366]" />,
      action: () => {
        window.open('https://wa.me/919416262844?text=Hello%20The%20Rohit%20Furniture!', '_blank');
      },
    },
    {
      id: 'call' as const,
      title: 'Call Us',
      icon: <Phone className="h-full w-full text-[#7D4A27]" />,
      action: () => onOpenCall?.(),
    },
    {
      id: 'visit' as NavTab,
      title: 'Showroom',
      icon: <SunMoon className="h-full w-full text-[#A0673C]" />,
      action: () => onSelectTab?.('visit'),
    },
  ];

  return (
    <div className={`fixed bottom-4 left-1/2 -translate-x-1/2 z-40 max-w-[95vw] pointer-events-auto ${className}`}>
      <Dock className="items-end pb-2.5 bg-[#FAF6F0]/90 border border-[#D4B896] shadow-2xl backdrop-blur-lg">
        {dockItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <DockItem
              key={item.title}
              onClick={item.action}
              active={isActive}
              className={`aspect-square rounded-full transition-all duration-200 ${
                isActive
                  ? 'bg-[#7D4A27] text-white shadow-md ring-2 ring-[#A0673C] ring-offset-2 ring-offset-[#FAF6F0]'
                  : 'bg-[#EBD9C8]/80 hover:bg-[#D4B896] text-[#422A14] shadow-xs'
              }`}
            >
              <DockLabel className="bg-[#2C1A0B] text-[#FAF6F0] border border-[#5E3D22]">
                {item.title}
              </DockLabel>
              <DockIcon>
                {React.cloneElement(item.icon as React.ReactElement<{ className?: string }>, {
                  className: `h-full w-full ${isActive ? 'text-white' : ''}`,
                })}
              </DockIcon>
            </DockItem>
          );
        })}
      </Dock>
    </div>
  );
}
