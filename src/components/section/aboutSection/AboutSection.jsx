import './aboutSection.css';
import '../section.css';

export default function AboutSection({title}) {

    return <>

    <div className='section'>
        <h1 className='sectionTitle'>{title}</h1>
        <h1>Juliet Lam</h1>
        <p>
            Hi! I'm Juliet Lam, a recent graduate in Software Engineering at Rochester
            Institute of Technology. I enjoy problem-solving and learning new topics.
            I have experience in full-stack development from internships and coursework,
            and animation is my hobby! (Mostly 2D, but 3D is cool, too.)
        </p>
        <p>
            Completed coursework includes Database and Data Modeling, 
            Web Engineering, Web and Mobile, Engineering Secure Software, 
            Software Design for Computing Systems, Computer Graphics, Client and Server Programming,
            Networking, Intro to AI.
        </p>
        <p>
            If you find any of this interesting &#x1f441;&#x1f441;,
            feel free to reach out!
            {/* I am seeking employment after June 2025. */}
        </p>
        <p>
            For more contact or more information via links, check the Contacts section.
        </p>


    </div>

    </>
}


