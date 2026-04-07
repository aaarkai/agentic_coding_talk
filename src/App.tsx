import { SlideProvider } from './components/SlideProvider';
import { slides } from './slides/registry';
import { useSlide } from './components/SlideProvider';
import { NavControls } from './components/NavControls';
import { ProgressBar } from './components/ProgressBar';
import { useKeyboardNav } from './hooks/useKeyboardNav';
import { useHashSync } from './hooks/useHashSync';

function SlideRenderer() {
  const { currentIndex } = useSlide();
  const CurrentSlide = slides[currentIndex].component;
  return <CurrentSlide />;
}

function AppContent() {
  useKeyboardNav();
  useHashSync();

  return (
    <main className="w-full h-full bg-ivory relative">
      <ProgressBar />
      <SlideRenderer />
      <NavControls />
    </main>
  );
}

export default function App() {
  return (
    <SlideProvider slides={slides}>
      <AppContent />
    </SlideProvider>
  );
}
