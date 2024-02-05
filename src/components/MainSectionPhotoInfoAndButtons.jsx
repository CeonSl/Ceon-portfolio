import mainSectionStyles from '../css/mainSectionStyles.module.css'
import MainSectionContainerImg from './MainSectionContainerImg';
import MainSectionDecorationsInfo from './MainSectionDecorationsInfo';

function MainSectionPhotoInfoAndButtons() {
  return (
    <div className={mainSectionStyles.containerPhotoInfoAndButtons}>
      <MainSectionContainerImg />
      <div className={mainSectionStyles.containerInfo}>
        <MainSectionDecorationsInfo />
        <h3>Soy <span>Carlos Oropeza</span>,</h3>
        <h2>Full Stack Web Developer</h2>
        <p>Entusiasmado en adquirir <span>nuevos conocimientos</span> y <span>experiencias</span> en el mundo del desarrollo web.</p>
      </div>
    </div>
  )
}

export default MainSectionPhotoInfoAndButtons;
