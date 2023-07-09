import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {data} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = data
  return (
    <div className="Project-timeline-card-container">
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-title-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="project-duration-container">
          <AiFillCalendar className="calender-image" />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a href={projectUrl} className="project-url">
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
