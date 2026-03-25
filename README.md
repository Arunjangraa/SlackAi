# Category Analysis Dashboard

A premium, highly responsive analytics dashboard built with React, TypeScript, and Tailwind CSS. This dashboard provides real-time-like insights into product categories, market share, and conversion metrics.

![Main Dashboard Screenshot](file:///Users/arunkumar/.gemini/antigravity/brain/4380ad7b-584f-4b97-a0fc-8da94dcdc70c/media__1774289713713.png)

## ✨ Key Features

- 🌓 **Full Theme Support**: Seamlessly toggle between Light and Dark modes.
- 📱 **Fully Responsive**: Optimized for everything from mobile phones up to 5K ultra-wide monitors.
- 📊 **Interactive Data**: Powered by Recharts and Redux for managed data fetching and state persistence.
- 🧩 **Modular Components**: Built with a library of reusable UI components (Buttons, Dropdowns, Tooltips).
- ⚡ **Optimized Performance**: Fast loads and smooth transitions using Vite and Tailwind CSS 4.
- 🛠 **Flexible Architecture**: Custom Header and Dynamic Widget system with configurable visibility and state-aware skeletons.

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## 🛠 How to Use

### 1. Navigation
Use the **Sidebar** to switch between different high-level sections. 
- **Active State**: The active menu item is highlighted for clear context.
- **Tooltips**: Hover over icons to see labels for "Coming soon" features or the theme toggle.

### 2. Switching Dashboard Tabs
At the top of the main content area, use the **Tabs** to switch perspectives (Overview, Traffic, Conversion, Operations). The UI dynamically loads widgets based on the selected tab.

### 3. Flexible Header
The **Header** component is now highly configurable:
- **Custom Content**: Pass custom `title`, `subtitle`, and `totalProducts`.
- **Visibility Flags**: Toggle features like `showFilters`, `showDateRange`, and `showPlatform` directly via props.

### 4. Dynamic Widgets
Widgets (Charts, Tables, Sparklines) are managed via a centralized configuration:
- **State-Aware**: Automatically displays appropriate **Skeleton loaders** during data fetching.
- **Contextual Icons**: Dynamic icon mapping for different metric types (Eye for Traffic, ShoppingCart for Conversion, etc.).
- **Redux-Powered**: Uses Redux Toolkit for global data management and loading states.

### 5. Toggling Themes
Locate the **Sun/Moon icon** at the bottom of the sidebar to toggle between Light and Dark mode globally.

## 🧰 Tech Stack
| Category | Technology |
|---|---|
| **Core** | React 19, TypeScript 5, Vite 8 |
| **Styling** | Tailwind CSS 4 |
| **Icons** | Lucide React |
| **Charts** | Recharts 3 |
| **State** | Redux Toolkit (@store), React Context |
| **Data Handling** | Redux Async Thunks |

---
*Created with ❤️ for premium analytics.*

