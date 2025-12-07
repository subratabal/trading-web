'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/app/_contexts/AuthContext';
import { cn } from '@/lib/utils';
import { Button, Avatar } from '@/components/ui';
import {
  LayoutDashboard,
  TrendingUp,
  Code2,
  GraduationCap,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Bot,
  BarChart3,
  Shield,
  Wallet,
  BookOpen,
  Sparkles,
  Menu,
  X,
} from 'lucide-react';

interface SidebarProps {
  className?: string;
}

const navigation = [
  {
    title: 'Overview',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: LayoutDashboard },
    ],
  },
  {
    title: 'Trading',
    items: [
      { name: 'Trading Dashboard', href: '/trading/dashboard', icon: TrendingUp },
      { name: 'Strategy Analysis', href: '/trading/strategy-analysis', icon: BarChart3 },
      { name: 'Portfolio', href: '/trading/portfolio-management', icon: Wallet },
      { name: 'Risk Management', href: '/trading/risk-management', icon: Shield },
    ],
  },
  {
    title: 'Code Bot',
    items: [
      { name: 'Ideation', href: '/code-bot/ideation', icon: Sparkles },
      { name: 'Coding', href: '/code-bot/coding', icon: Code2 },
      { name: 'Review', href: '/code-bot/review', icon: Bot },
    ],
  },
  {
    title: 'Learning',
    items: [
      { name: 'LMS Dashboard', href: '/lms', icon: GraduationCap },
      { name: 'Content', href: '/lms/content', icon: BookOpen },
      { name: 'Personalization', href: '/lms/personalization', icon: Sparkles },
    ],
  },
];

export function DashboardSidebar({ className }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const { user, logout } = useAuth();

  const SidebarContent = () => (
    <div className="flex flex-col h-full">
      {/* Logo section */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
        <Link href="/dashboard" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-white" />
          </div>
          {!collapsed && (
            <span className="font-semibold text-white whitespace-nowrap">
              AI Quant Labs
            </span>
          )}
        </Link>
        {/* Desktop collapse button */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="hidden lg:flex items-center justify-center w-6 h-6 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
        {/* Mobile close button */}
        <button
          onClick={() => setMobileOpen(false)}
          className="lg:hidden flex items-center justify-center w-6 h-6 rounded hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto py-4 px-3">
        {navigation.map((group) => (
          <div key={group.title} className="mb-6">
            {!collapsed && (
              <h3 className="px-3 mb-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {group.title}
              </h3>
            )}
            <ul className="space-y-1">
              {group.items.map((item) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + '/');
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        'flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200',
                        isActive
                          ? 'bg-primary-500/10 text-primary-400 border border-primary-500/20'
                          : 'text-gray-400 hover:text-white hover:bg-gray-800/50',
                        collapsed && 'justify-center'
                      )}
                      title={collapsed ? item.name : undefined}
                    >
                      <item.icon className={cn('w-5 h-5 flex-shrink-0', isActive && 'text-primary-400')} />
                      {!collapsed && <span>{item.name}</span>}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>

      {/* User section */}
      <div className="border-t border-gray-800 p-4">
        {!collapsed ? (
          <div className="flex items-center gap-3 mb-4">
            <Avatar
              name={user?.name || user?.email || 'User'}
              size="sm"
            />
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-white truncate">
                {user?.name || 'User'}
              </p>
              <p className="text-xs text-gray-500 truncate">
                {user?.email}
              </p>
            </div>
          </div>
        ) : (
          <div className="flex justify-center mb-4">
            <Avatar
              name={user?.name || user?.email || 'User'}
              size="sm"
            />
          </div>
        )}

        <div className={cn('flex gap-2', collapsed && 'flex-col')}>
          <Link
            href="/settings"
            className={cn(
              'flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-gray-800 transition-colors',
              collapsed ? 'w-full' : 'flex-1'
            )}
            title="Settings"
          >
            <Settings className="w-4 h-4" />
            {!collapsed && <span>Settings</span>}
          </Link>
          <button
            onClick={() => logout()}
            className={cn(
              'flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-sm text-gray-400 hover:text-red-400 hover:bg-red-500/10 transition-colors',
              collapsed ? 'w-full' : 'flex-1'
            )}
            title="Logout"
          >
            <LogOut className="w-4 h-4" />
            {!collapsed && <span>Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(true)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 rounded-lg bg-gray-900 border border-gray-800 text-gray-400 hover:text-white transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <aside
        className={cn(
          'lg:hidden fixed inset-y-0 left-0 z-50 w-64 bg-gray-950 border-r border-gray-800 transform transition-transform duration-300',
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <SidebarContent />
      </aside>

      {/* Desktop sidebar */}
      <aside
        className={cn(
          'hidden lg:flex flex-col bg-gray-950 border-r border-gray-800 transition-all duration-300',
          collapsed ? 'w-16' : 'w-64',
          className
        )}
      >
        <SidebarContent />
      </aside>
    </>
  );
}
