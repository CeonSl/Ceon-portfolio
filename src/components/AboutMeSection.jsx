import aboutMeSectionStyles from '../css/aboutMeSectionStyles.module.css'
import AboutMeSectionInfo from './AboutMeSectionInfo';
import AboutMeSectionPhotos from './AboutMeSectionPhotos';

function AboutMeSection() {
  return (
    <>
    <div id='about-me' className={aboutMeSectionStyles.container}>
      <AboutMeSectionInfo/>
      <AboutMeSectionPhotos/>
    </div>
    </>
  )
}

export default AboutMeSection;
