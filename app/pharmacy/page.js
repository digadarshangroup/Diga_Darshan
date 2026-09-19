"use client";

import { Pill } from "lucide-react";
import { ComingSoon } from "@/components/coming-soon";

export default function PharmacyPage() {
  return (
    <ComingSoon
      icon={Pill}
      title="Pharmacy"
      description="Pharmacy business setup support — licensing, registration and store setup guidance."
      whatsappMessage="Hello Matrubhoomi Team, I'd like to know more about pharmacy business setup."
    />
  );
}
