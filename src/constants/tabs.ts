export const tabs = ['Overview', 'Traffic', 'Conversion', 'Operations'] as const;
export type TabType = typeof tabs[number];
