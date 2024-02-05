import mainSectionStyles from '../css/mainSectionStyles.module.css'

const MainSectionDecorations = () => {
  return (
    <>
        <div className={mainSectionStyles.decorationUpLeft}> 
          <div className={mainSectionStyles.decorationUpLeft1}/>  
          <div className={mainSectionStyles.decorationUpLeft2}/>  
          <div className={mainSectionStyles.decorationUpLeft3}/>  
        </div>
        <div className={`${mainSectionStyles.decorationUpLeft} ${mainSectionStyles.copyDecorationUpLeft}`}> 
          <div className={`${mainSectionStyles.decorationUpLeft1}`}/>
          <div className={`${mainSectionStyles.decorationUpLeft2}`}/>
          <div className={`${mainSectionStyles.decorationUpLeft3}`}/>
        </div>
        <div className={mainSectionStyles.decorationDownRight}> 
          <div className={mainSectionStyles.decorationDownRight1}/>
          <div className={mainSectionStyles.decorationDownRight2}/>
          <div className={mainSectionStyles.decorationDownRight3}/>
        </div>
        <div className={`${mainSectionStyles.decorationDownRight} ${mainSectionStyles.copyDecorationDownRight}`}> 
          <div className={`${mainSectionStyles.decorationDownRight1}`}/>
          <div className={`${mainSectionStyles.decorationDownRight2}`}/>
          <div className={`${mainSectionStyles.decorationDownRight3}`}/>
        </div>
    </>
  )

}

export default MainSectionDecorations
