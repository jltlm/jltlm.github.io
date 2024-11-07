import './menu.css';
import pfp from '../../assets/images/pfp.jpg'

export default function Menu({setSection}) {

    function goTo (section) {
        setSection(section);
    }

    return <>
    <div id='menu'>
        <img src={pfp}/>
        <h1>Juliet Lam</h1>
        <div id='nav'>
            <button onClick={() => goTo('about')}>About</button>
            <button onClick={() => goTo('project')}>Projects</button>
            <button onClick={() => goTo('experience')}>Experience</button>
            <button onClick={() => goTo('contact')}>Contact</button>
        </div>
    </div>
    </>;
}