import './projectSection.css';
import '../section.css';
import cyoaImg from '../../../assets/images/project/proj_cyoa.png'
import jsgamesImg from '../../../assets/images/project/proj_jsgames.png'
import coderacerImg from '../../../assets/images/project/proj_coderacer.png'
import echoflowerImg from '../../../assets/images/project/proj_echoflower.png'
import fingergunsImg from '../../../assets/images/project/proj_fingerguns.jpg'
import ProjectWidget from '../../widget/projectWidget/ProjectWidget';

export default function ProjectSection({title}) {

    return <>

    <div className='section'>
        <h1 className='sectionTitle'>{title}</h1>

        <p>Some projects I've worked on over the years</p>

        <div id='projGallery'>

        <ProjectWidget
            title="Finger Guns"
            image={fingergunsImg}
            description="An astroid-shooter type of game."
            source="https://github.com/jltlm/ubiquitous-goggles"
            />
        <ProjectWidget
            title="Kato's Rats"
            image={cyoaImg}
            description="A choose-your-own adventure. Pretty short, currently."
            source="https://github.com/jltlm/cyoa-cat"
            tryit="https://jltlm.github.io/cyoa-cat/"
            />
        <ProjectWidget
            title="JS Games"
            image={jsgamesImg}
            description="Some games I made using JavaScript, circa 2022"
            source="https://github.com/jltlm/LilGames"
            tryit="https://jltlm.github.io/LilGames/"
            />
        <ProjectWidget
            title="CodeRacer"
            image={coderacerImg}
            description="Project for hackharvard 2024- I mostly worked on the backend, to allow multiplayer using Socket.io"
            source="https://github.com/zmb6893/CodeRacer/"
            />
        <ProjectWidget
            title="Echo Flower Scene, 3D"
            image={echoflowerImg}
            description="recreating a scene from Undertale using WebGPU, 2024"
            source="https://github.com/jltlm/echo-flower-scene"
            />

        </div>

    </div>

    </>
}


