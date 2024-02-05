import ProjectsSectionTitle from '../components/ProjectsSectionTitle.jsx'
import Projects from '../components/Projects.jsx'
import projectsSectionStyles from '../css/projectsSectionStyles.module.css'
import { forwardRef } from 'react'

const ProjectsSection = forwardRef((props, ref) => {
  return (<>
      <div id='projects' className={projectsSectionStyles.container}>
        <ProjectsSectionTitle/>
        <Projects ref={ref} isIntersecting={props.isIntersecting}/>
      </div>
    </>)
})

export default ProjectsSection;
