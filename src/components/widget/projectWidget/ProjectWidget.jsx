import './projectWidget.css';

export default function ProjectWidget({title, image, description, source, tryit}) {

    let tryItElement = tryit ? <p className='projTry'><a href={tryit}>try it here</a></p> : '';

    return <>
    <div className='projWidget'>
        <img src={image}></img>
        <h3>{title}</h3>
        <p>{description}</p>
        <p className='projSource'><a href={source}>source</a></p>
        {tryItElement}
    </div>
    </>;

}
