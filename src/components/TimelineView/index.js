// Write your code here
import {Chrono} from 'react-chrono'
import ProjectTimelineCard from '../ProjectTimelineCard'
import CourseTimelineCard from '../CourseTimelineCard'
import './index.css'

//const items = [{title: '2018'}, {title: '2019'}]

const TimelineView = props => {
  const {timelineItemsList} = props
  //const items = {timelineItemsList}

  const verifyitem = each => {
    if (each.categoryId === 'COURSE') {
      return <CourseTimelineCard courseDetails={each} key={each.id} />
    }
    return <ProjectTimelineCard projectDetails={each} key={each.id} />
  }

  return (
    <div className="chrono-container">
      <h1>MY JOURNEY OF CCBP 4.0</h1>

      <Chrono
        theme={{secondary: 'white'}}
        items={timelineItemsList}
        mode="VERTICAL_ALTERNATING"
        darkMode={{enabled: true}}
      >
        {timelineItemsList.map(each => verifyitem(each))}
      </Chrono>
    </div>
  )
}

export default TimelineView
