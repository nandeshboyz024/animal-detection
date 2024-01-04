import React, { useContext } from 'react';
import { ModelContext } from '../context/model-context';
import Detection from '../image/Detection';
import Video from '../video/Video';
import Realtime from '../realtime/Realtime';
import styles from './Selector.module.css';

const Selector = () => {
    const { selected, selectMode } = useContext(ModelContext);

    return (
        <React.Fragment>
            <div className={styles['top-div']}>
                <div className={styles['section-div']}>
                    {selected === 'Image' ? (
                        <div className={styles['selected-div']} onClick={() => selectMode('Image')}>
                                <div className={styles['selected-text']}>Upload Image</div>
                        </div>
                    ) : (
                        <div className={styles['deselected-div']} onClick={() => selectMode('Image')}> 
                                <div className={styles['deselected-text']}>Upload Image</div>
                        </div>
                    )}
                </div>
                
                <div className={styles['section-div']}>
                    {selected === 'Video' ? (
                            <div className={styles['selected-div']} onClick={() => selectMode('Video')}>
                                <div className={styles['selected-text']}>Upload Video</div>
                            </div>
                        ) : (
                            <div className={styles['deselected-div']} onClick={() => selectMode('Video')}> 
                                <div className={styles["deselected-text"]}>Upload Video</div>
                            </div>
                        )}
                </div>

                <div className={styles['section-div']}>
                    {selected === 'Realtime' ? (
                        <div className={styles['selected-div']}onClick={() => selectMode('Realtime')}>
                                <div className={styles['selected-text']}>Open Camera</div>
                        </div>
                    ) : (
                        <div className={styles['deselected-div']} onClick={() => selectMode('Realtime')}>
                            <div className={styles['deselected-text']}>Open Camera</div>
                        </div>
                    )}
                </div>
            </div>

            {selected === 'Image' && (
                <Detection />
            )}
            {selected === 'Video' && (
                <Video />
            )}
            {selected === 'Realtime' && (
                <Realtime />
            )}

        </React.Fragment>
    )
}
export default Selector;