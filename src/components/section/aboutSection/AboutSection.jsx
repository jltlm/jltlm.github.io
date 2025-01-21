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
            I have experience in full-stack web development from internships and coursework,
            and an interest in animation (2D and 3D)!
        </p>
        <p>
            Completed coursework includes Database and Data Modeling, 
            Web Engineering, Web and Mobile, Engineering Secure Software, 
            Software Design for Computing Systems, Computer Graphics, Client and Server Programming.
            Currently taking Networking, Introduction to AI, and finding those very interesting.
        </p>
        <p><b>
            If you find any of this interesting (or employable &#x1f441;&#x1f441;),
            feel free to reach out!
            I am seeking employment after June 2025. (Graduation: May 2025)</b>
        </p>
        <p>
            For more contact or more information via links, check the Contacts section.
        </p>


    </div>

    </>
}


