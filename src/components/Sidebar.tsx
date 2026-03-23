import { Settings, Sun, Moon } from 'lucide-react';
import { navItems } from '@constants';
import { Button } from '@components';
import profilePic from '@assets/profile.png';
import { useTheme } from '../hooks/useTheme';
export const Sidebar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <aside className="w-[72px] bg-bg-sidebar border-r border-border-light flex flex-col items-center py-4 h-screen sticky top-0 shrink-0 z-50">
      <div className="mb-6 w-[42px] h-[42px] rounded-[8px] border border-gray-200 flex items-center justify-center text-[11px] font-bold text-gray-300 tracking-wider shadow-sm z-50">
        LOGO
      </div>

      <nav className="flex-1 w-full flex flex-col items-center mt-2 gap-1 z-50">
        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.isActive) {
            return (
              <Button
                key={item.id}
                variant="ghost"
                className="!w-[42px] !h-[42px] !flex !flex-col !items-center !justify-center !gap-1 !rounded-[8px] !bg-[#E8EAEF] !text-gray-800 !px-0 !py-0 shadow-sm"
              >
                <Icon size={item.iconSize} strokeWidth={2} />
                <span className="text-[8px] font-medium leading-tight">{item.label}</span>
              </Button>
            );
          }

          return (
            <div key={item.id} className="relative group flex justify-center w-full">
              <Button
                variant="ghost"
                className="!w-[42px] !h-[42px] !flex !items-center !justify-center !flex-col !rounded-[8px] !text-gray-500 hover:!text-gray-900 hover:!bg-gray-200 transition-all duration-200 !px-0 !py-0"
              >
                <Icon size={item.iconSize} strokeWidth={1.5} />
              </Button>

              {/* Tooltip */}
              <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-md pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-1 before:border-r-4 before:border-r-gray-900 before:border-y-4 before:border-y-transparent z-[100]">
                Coming soon
              </div>
            </div>
          );
        })}
      </nav>

      <div className="flex flex-col items-center gap-4 mt-auto">
        <div className="relative group flex justify-center w-full">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="!w-[42px] !h-[42px] !rounded-[8px] !text-gray-400 !px-0 !py-0 hover:!text-gray-900 hover:!bg-gray-200 transition-all duration-200 !flex !items-center !justify-center"
          >
            {theme === 'light' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
          </Button>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-md pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-1 before:border-r-4 before:border-r-gray-900 before:border-y-4 before:border-y-transparent z-[100]">
            {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
          </div>
        </div>

        <div className="relative group flex justify-center w-full">
          <Button variant="ghost" className="!w-[42px] !h-[42px] !rounded-[8px] !text-gray-400 !px-0 !py-0 hover:!text-gray-900 hover:!bg-gray-200 transition-all duration-200 !flex !items-center !justify-center">
            <Settings size={20} className="opacity-80" />
          </Button>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-md pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-1 before:border-r-4 before:border-r-gray-900 before:border-y-4 before:border-y-transparent z-[100]">
            Coming soon
          </div>
        </div>

        <div className="relative group flex justify-center w-full">
          <Button variant="ghost" className="!w-[42px] !h-[42px] !bg-bg-stripe !border-2 !border-border-light shadow-sm !px-0 !py-0 !flex !items-center !justify-center !overflow-hidden hover:!border-gray-500 transition-all duration-200">
            <img src={profilePic} alt="Profile" className="w-full h-full object-cover" />
          </Button>
          <div className="absolute left-14 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 text-white text-xs font-medium rounded opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all whitespace-nowrap shadow-md pointer-events-none before:content-[''] before:absolute before:top-1/2 before:-translate-y-1/2 before:-left-1 before:border-r-4 before:border-r-gray-900 before:border-y-4 before:border-y-transparent z-[100]">
            Coming soon
          </div>
        </div>
      </div>
    </aside>
  );
};
