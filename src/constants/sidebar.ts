import { FileText, CircleCheckBig, CreditCard } from 'lucide-react';

export const navItems = [
  { id: 'planning', icon: FileText, label: 'Planning', isActive: true, iconSize: 18 },
  { id: 'tasks', icon: CircleCheckBig, label: 'Tasks', isActive: false, iconSize: 20 },
  { id: 'billing', icon: CreditCard, label: 'Billing', isActive: false, iconSize: 20 },
];
