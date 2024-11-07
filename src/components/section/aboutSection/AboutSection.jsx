import './aboutSection.css';
import '../section.css';

export default function AboutSection({title}) {

    return <>

    <div className='section'>
        <h1 className='sectionTitle'>{title}</h1>
        <h1>Juliet Lam</h1>
        <p>
            Hi! I'm Juliet Lam, a Senior Software Engineering student at Rochester
            Institute of Technology. I enjoy problem-solving and finding solutions.
            I don't really have a specialty at the moment but have experience in
            full-stack web development, among other things-
            if you find any of this interesting (or employable &#x1f441;&#x1f441;),
            feel free to reach out!
        </p>
        <p>
            I am seeking employment after June 2025. (Graduation: May 2025)
        </p>
        <p>
            For more contact or more information via links, check the Contacts section.
        </p>


    </div>

    </>
}


