import { SlideProvider } from './components/SlideProvider';
import { slides } from './slides/registry';
import { useSlide } from './components/SlideProvider';

function SlideRenderer() {
  const { currentIndex } = useSlide();
  const CurrentSlide = slides[currentIndex].component;
  return <CurrentSlide />;
}

export default function App() {
  return (
    <SlideProvider slides={slides}>
      <main className="w-full h-full bg-ivory">
        <SlideRenderer />
      </main>
    </SlideProvider>
  );
}
