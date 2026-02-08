import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FloatingSocials } from './components/FloatingSocials';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Summary } from './components/Summary';
import { DeepDive } from './components/DeepDive';
import { Journey } from './components/Journey';
import { Ecosystem } from './components/Ecosystem';
import { Footer } from './components/Footer';
import { BottomNav } from './components/BottomNav';
import { NotFound } from './components/NotFound';
import { PDFViewer } from './components/PDFViewer';

const Home = ({ onOpenResume }) => (
  <>
    <Hero onOpenResume={onOpenResume} />
    <Summary />
    <DeepDive />
    <Journey />
    <Ecosystem />
  </>
);

function App() {
  const [isPDFOpen, setIsPDFOpen] = useState(false);

  return (
    <Router>
      <main className="min-h-screen w-full bg-[#F9FAFB] dark:bg-gray-950 text-[#111827] dark:text-gray-100 transition-colors duration-300 flex flex-col">
        <FloatingSocials onOpenResume={() => setIsPDFOpen(true)} />
        <Header />
        <BottomNav onOpenResume={() => setIsPDFOpen(true)} />

        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home onOpenResume={() => setIsPDFOpen(true)} />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        <Footer />
        <PDFViewer
          isOpen={isPDFOpen}
          onClose={() => setIsPDFOpen(false)}
          pdfUrl="/sayed-resume.pdf"
        />
      </main>
    </Router>
  );
}

export default App;
