import mainSectionStyles from '../css/mainSectionStyles.module.css'
import myPhoto from '../imgs/Ceon_Img.jpeg'
import MainSectionDecorations from './MainSectionDecorations'

const MainSectionContainerImg = () => {
  return (
      <div className={mainSectionStyles.containerImg}>
        <img src={myPhoto} alt='ceon' title='ceon' />
        <MainSectionDecorations/>
      </div>
  )
}

export default MainSectionContainerImg
