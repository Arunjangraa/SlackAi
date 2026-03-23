import { QrCode } from 'lucide-react';

export const MobileAppPromo = () => (
  <div className="flex flex-col items-center justify-center min-h-[100dvh] bg-white px-6 text-center">
    <h1 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">
      Download the Application
    </h1>
    <p className="text-gray-500 mb-8 max-w-[280px] text-[15px] leading-relaxed">
      For the best experience on mobile devices, please download our native app by scanning the QR code below.
    </p>
    <div className="p-4 bg-gray-50 rounded-[20px] mb-6 inline-flex">
      <QrCode size={160} className="text-gray-900" strokeWidth={1} />
    </div>
    <p className="text-xs font-medium text-gray-400 uppercase tracking-widest">
      Scan to download
    </p>
  </div>
);
