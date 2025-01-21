import '../section.css';
import resume from '../../../assets/files/resume.pdf';

export default function ContactSection({title}) {

    return <>

    <div className='section'>
        <h1 className='sectionTitle'>{title}</h1>
        <p>(and links)</p>
            <p>Github: <a href="https://github.com/jltlm/">https://github.com/jltlm/</a></p>
            <p>LinkedIn: <a
                    href="https://www.linkedin.com/in/juliet-lam/">https://www.linkedin.com/in/juliet-lam/</a></p>
            <p>Email: <a href="jltlam011235@gmail.com">jltlam011235@gmail.com</a> (preferred method of contact)</p>
            <p>Resume: <a href={resume}>resume</a></p>


    </div>

    </>
}


