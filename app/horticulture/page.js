"use client";

import { Sprout } from "lucide-react";
import { ComingSoon } from "@/components/coming-soon";

export default function HorticulturePage() {
  return (
    <ComingSoon
      icon={Sprout}
      title="Horticulture"
      description="Fruit, vegetable and organic farming support — including crop planning, organic certification, irrigation and government subsidy facilitation."
      backHref="/services/farming-construction"
      backLabel="Back to Farming & Farm Construction"
      whatsappMessage="Hello Matrubhoomi Team, I'd like to know more about your horticulture support."
    />
  );
}
