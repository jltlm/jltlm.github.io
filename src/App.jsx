import { useEffect, useRef, useState } from 'react'
import './App.css'
import Menu from './components/menu/Menu'
import ProjectSection from './components/section/projectSection/ProjectSection'
import AboutSection from './components/section/aboutSection/AboutSection'
import ExperienceSection from './components/section/experienceSection/ExperienceSection'
import ContactSection from './components/section/contactSection/ContactSection'

// color palatte
// https://lospec.com/palette-list/cyclope6

function App() {
	const aboutRef = useRef(null)
	const projectRef = useRef(null)
	const experienceRef = useRef(null)
	const contactRef = useRef(null)
	const mapSections = {
		'about': aboutRef,
		'project': projectRef,
		'experience': experienceRef,
		'contact': contactRef
	}
	const [section, setSection] = useState(null);

	useEffect(() => {
		if (section) {
			mapSections[section].current.scrollIntoView({behavior: 'smooth'});
		}
		console.log(section)
	}, [section]);

	return (
		<>
			<Menu setSection={setSection} />

			<div id='content'>
				<div ref={aboutRef}>
					<AboutSection title="About" />
				</div>

				<div className='divider'></div>

				<div ref={projectRef}>
					<ProjectSection title="Projects" />
				</div>

				<div className='divider'></div>

				<div ref={experienceRef}>
					<ExperienceSection title="Experience" />
				</div>

				<div className='divider'></div>

				<div ref={contactRef}>
					<ContactSection title="Contact"/>
				</div>
			</div>
		</>
	)
}

export default App
