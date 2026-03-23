import type { DashboardData } from '@types';
import { initialDashboardData } from '@constants';

export const fetchDashboardData = async (): Promise<DashboardData> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(initialDashboardData);
    }, 600); // Simulate network delay
  });
};
