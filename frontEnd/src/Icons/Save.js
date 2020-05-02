import React from 'react'
import styles from '../styles/save.module.css'

const useState = React.useState;

        const Save = () => {


          const [saveCount, saveUpdates] = useState(0)
          function addSave (){
            saveUpdates(function(prev){
              return prev + 1;
            })
          }
            return(
                <div className={styles.saveOptions}>
                <div className={styles.save}>
                <svg onClick={addSave}  className={styles.saveIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M16 2v17.582l-4-3.512-4 3.512v-17.582h8zm2-2h-12v24l6-5.269 6 5.269v-24z"/></svg>
                </div>
                <p className={styles.saveTooltip}>{saveCount} saved</p>

              <div className={styles.preview}>
              <svg   className={styles.previewIcon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/></svg>
              </div>
              <p className={styles.previewTooltip}>Preview</p>

                </div>
            )
        }
 export default Save