
import { useState } from 'react';
import { useLocation, NavLink } from 'react-router-dom';
import { Users, Calendar, MessageSquare, MessageCircle, Newspaper, User, Settings, LogOut } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { title: 'Partnerships', url: '/partnerships', icon: Users },
  { title: 'Openings', url: '/openings', icon: Calendar },
  { title: 'Messaging', url: '/messaging', icon: MessageSquare },
  { title: 'Forum', url: '/forum', icon: MessageCircle },
  { title: 'News', url: '/news', icon: Newspaper },
];

export function AppSidebar() {
  const { state } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path: string) => currentPath === path;

  return (
    <Sidebar className={state === 'collapsed' ? 'w-14' : 'w-64'}>
      <SidebarHeader className="p-4">
        <div className="flex items-center space-x-3">
          <div className="bg-yellow-500 text-slate-900 font-bold text-xl px-3 py-2 rounded">
            BA
          </div>
          {state === 'expanded' && (
            <span className="text-xl font-semibold">Buyer's Alike</span>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-3 px-3 py-2 rounded-md transition-colors ${
                          isActive
                            ? 'bg-yellow-100 text-yellow-800 font-medium'
                            : 'text-gray-700 hover:bg-gray-100'
                        }`
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      {state === 'expanded' && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4 border-t">
        <div className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start">
            <User className="h-4 w-4 mr-2" />
            {state === 'expanded' && <span>Profile</span>}
          </Button>
          <Button variant="ghost" className="justify-start">
            <Settings className="h-4 w-4 mr-2" />
            {state === 'expanded' && <span>Settings</span>}
          </Button>
          <Button variant="ghost" className="justify-start text-red-600 hover:text-red-700 hover:bg-red-50">
            <LogOut className="h-4 w-4 mr-2" />
            {state === 'expanded' && <span>Sign Out</span>}
          </Button>
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
