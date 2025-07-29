// import type { PropsWithChildren, ReactNode } from 'react';
import '@/css/style.css';
import { Providers } from './providers';
import NextTopLoader from 'nextjs-toploader';
import type { PropsWithChildren } from "react";

export const metadata = {
  title: {
    template: '%s | NextAdmin',
    default: 'NextAdmin Dashboard',
  },
  description: 'Next.js dashboard for admin control.',
};

// ✅ Match the expected LayoutProps type exactly
export default function RootLayout(

  { children }: PropsWithChildren
  // { children, components }: { children: ReactNode, components: ReactNode; }

) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <NextTopLoader color="#31F7AA" showSpinner={false} />
          <div className="min-h-screen">
            {children}
          </div>
        </Providers>
        {/* Optionally render components if needed */}

      </body>
    </html>
  );
}


