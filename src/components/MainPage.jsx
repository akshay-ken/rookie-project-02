import { BottomSection } from "./BottomSection";
import { TopSection } from "./TopSection";

export function MainPage() {
  return (
    <main className="w-full h-screen flex flex-col">
      <TopSection />
      <BottomSection />
    </main>
  );
}
