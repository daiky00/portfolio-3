import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { ProjectsPage } from '@/pages/projects';
import { AboutPage } from '@/pages/about';
import { ContactPage } from '@/pages/contact';
import { CryptoPage } from '@/pages/crypto';
import { LimaCharlieDetails } from '@/pages/project-details/limacharlie';
import { OmgKawaiiDetails } from '@/pages/project-details/omgkawaii';
import { NamiDetails } from '@/pages/project-details/nami';
import { HiltiDetails } from '@/pages/project-details/hilti';
import { MusicPlayer } from '@/components/layout/MusicPlayer';
import { AudioContextProvider } from '@/components/audio/AudioContext';

function App() {
  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <AudioContextProvider>
        <Router>
          <div className="min-h-screen bg-background">
            <Header />
            <main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/projects/limacharlie" element={<LimaCharlieDetails />} />
                <Route path="/projects/nami" element={<NamiDetails />} />
                <Route path="/projects/omgkawaii" element={<OmgKawaiiDetails />} />
                <Route path="/projects/hilti" element={<HiltiDetails />} />
                <Route path="/crypto" element={<CryptoPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
              </Routes>
            </main>
            <MusicPlayer />
          </div>
        </Router>
      </AudioContextProvider>
    </ThemeProvider>
  );
}

export default App;