import './experienceWidget.css';

export default function ExperienceWidget(props) {

    const title = props.title;
    const employer = props.employer;
    const description = props.description;
    const location = props.location;
    const startDate = props.startDate;
    const endDate = props.endDate;
    const bullets = props.descriptionPoints;

    return <>
    <div className='experienceWidget'>
        <h3>{title}</h3>
        <h4>{employer}</h4>
        <div className='left'>
            <p><i>{startDate} - {endDate}</i></p>
        </div>
        <div className='right'>
            <p><i>{location}</i></p>
        </div>
        <br/>

        <p>{description}</p>
        <ul>
            {bullets?.map((text) => <li>{text}</li>)}
        </ul>
    </div>
    </>;

}