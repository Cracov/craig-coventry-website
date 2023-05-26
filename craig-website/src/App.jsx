import Contact from './components/Contact';
import Footer from './components/Footer';
import Intro from './components/Intro';
import Project from './components/Project';
import Timeline from './components/Timeline';
import Modal from "./components/Modal";
import useToggle from "./hooks/useToggle";



export default function App() {
	const { on, toggler } = useToggle();
	return (
		<>
			<div className="bg-red-50 text-stone-900 min-h-screen font-Montserrat">
				<div className="max-w-5xl w-11/12 mx-auto">
					<Intro />
					<Project toggler={toggler}/> 			
					<Timeline />
					<Contact />
					<Footer />
					{on && <Modal toggler={toggler} />}
				</div>
			</div>

		</>
	)
}
