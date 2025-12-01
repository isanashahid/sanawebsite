import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sana Shahid V1 | AI GTM Strategist & Product Marketing Manager",
  description: "Product Marketing Manager specializing in AI-driven product growth and automation. Neo-brutalism dark theme portfolio.",
  keywords: [
    "Product Marketing",
    "AI Automation",
    "GTM Strategy",
    "B2B SaaS",
    "Marketing Automation",
  ],
};

export default function V1Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

