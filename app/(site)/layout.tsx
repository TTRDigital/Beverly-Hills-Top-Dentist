import "../globals.css";
import { SiteShell } from "@/components/layout/SiteShell";
import { PreviewBanner } from "@/components/preview/PreviewBanner";
import { ReviewBar } from "@/components/preview/ReviewBar";

export default function SiteLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <SiteShell>
      {children}
      <PreviewBanner />
      <ReviewBar />
    </SiteShell>
  );
}
