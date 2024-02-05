import projectsSectionStyles from '../css/projectsSectionStyles.module.css'

function Project({shape, imgSrc}) {
  return (
    <>
      <div className={`${projectsSectionStyles.containerProject} ${shape}`}>
        <img src={imgSrc}></img> 
      </div>
    </>
  )
}

export default Project;
