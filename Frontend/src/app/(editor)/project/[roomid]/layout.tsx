// src/app/editor/project/[roomid]/layout.tsx
"use client";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
    // className={`${manrope.className} ${sourceSans.className} antialiased`}
    >
      {/* {siteDetails.googleAnalyticsId && (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        )} */}
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  );
}
