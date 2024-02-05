import goBackTopStyles from '../css/goBackTopStyles.module.css'
function GoBackTop(props) {
  return (
    <a href='#main-section' className={goBackTopStyles.container}>
          <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1em"
      width="1em"
      {...props}
    >
      <path d="M12 2C6.485 2 2 6.486 2 12s4.485 10 10 10c5.514 0 10-4.486 10-10S17.514 2 12 2zM7 14l5-6 5 6H7z" />
    </svg>
    </a>
  )
}

export default GoBackTop;
