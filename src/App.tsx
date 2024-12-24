import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/Header';
import {
	createBrowserRouter,
	RouterProvider,
	ScrollRestoration,
	Outlet,
} from 'react-router-dom';
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

function Layout() {
	return (
		<div className="min-h-screen bg-background">
			<ScrollRestoration />
			<Header />
			<main className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
				<Outlet />
			</main>
			<MusicPlayer />
		</div>
	);
}

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage />,
			},
			{
				path: '/projects',
				element: <ProjectsPage />,
			},
			{
				path: '/projects/limacharlie',
				element: <LimaCharlieDetails />,
			},
			{
				path: '/projects/nami',
				element: <NamiDetails />,
			},
			{
				path: '/projects/omgkawaii',
				element: <OmgKawaiiDetails />,
			},
			{
				path: '/projects/hilti',
				element: <HiltiDetails />,
			},
			{
				path: '/crypto',
				element: <CryptoPage />,
			},
			{
				path: '/about',
				element: <AboutPage />,
			},
			{
				path: '/contact',
				element: <ContactPage />,
			},
		],
	},
]);

function App() {
	return (
		<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
			<AudioContextProvider>
				<RouterProvider router={router} />
			</AudioContextProvider>
		</ThemeProvider>
	);
}

export default App;
