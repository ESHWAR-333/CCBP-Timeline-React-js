import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {data} = props
  const {courseTitle, description, duration, tagsList} = data

  return (
    <div className="course-time-line-card-container">
      <div className="course-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="course-duration">
          <AiFillClockCircle className="clock-image" />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <div className="tag-items-list-container">
        {tagsList.map(each => (
          <p key={each.id} className="tag-item">
            {each.name}
          </p>
        ))}
      </div>
    </div>
  )
}

export default CourseTimelineCard
