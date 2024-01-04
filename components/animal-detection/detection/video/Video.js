import React, { useState, useRef, useContext } from 'react';
import { ModelContext } from '../context/model-context';
import MagicDropzone from 'react-magic-dropzone';
import { useDimension } from '../utils/dimension-hook';
import styles from '../../../animal-detection/global.module.css'
import useBoxRenderer from './useBoxRenderer';
import Image from 'next/image';

const Video = () => {
    const { model, labels } = useContext(ModelContext);
    const dimensions = useDimension();
    const [frame, setFrame] = useState();
    const [videoLoaded, setVideoLoaded] = useState(false);
    const videoRef = useRef();
    const canvasRef = useRef();

    useBoxRenderer(model, videoRef, canvasRef, videoLoaded, labels)

    const onDrop = (accepted, rejected, links) => {
        setVideoLoaded(false);
        if (accepted && accepted.length > 0) {
            const reader = new FileReader();
            reader.addEventListener("load", () => {
                videoRef.current.src = reader.result;
                setFrame(`${reader.result}#t=0.1`)
                videoRef.current.onloadeddata = () => {
                    setVideoLoaded(true);
                }
            });
            reader.readAsDataURL(accepted[0]);
        }
    }

    return (
        <React.Fragment>
            <div>
                <div style={{width:'60%',margin:'0 auto'}}>
                    <div className={styles["card"]}>
                        <MagicDropzone className={styles["dropzone"]} accept="video/mp4, video/x-m4v, video/*" multiple={false} onDrop={onDrop}>
                            <div className={styles["center-div-wrap"]}>
                                {frame ? (
                                    <video className={styles["dropzone-image"]} src={frame} width="100" />
                                ) : (
                                    <div>
                                        <div className={styles["center-div"]}>
                                            <Image src='/imgs/upload.png' width="50" height="50" alt="upload" srcSet=''/>
                                        </div>
                                        <div style={{ display: 'block' }}>
                                            <p style={{fontSize:'20px'}}>Drag/drop files over here</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </MagicDropzone>
                    </div>
                </div>
                <div className={styles["center-div"]}>
                        <div style={{
                            width: `${dimensions.width}px`,
                            height: `${dimensions.height}px`,
                        }}>
                            <div className={styles["image-container"]}>
                                <video 
                                    autoPlay
                                    playsInline
                                    muted
                                    width={dimensions.width}
                                    height={dimensions.height} 
                                    className={styles["image-canvas"]}   
                                    ref={videoRef} 
                                />
                                <canvas 
                                    width={dimensions.width}
                                    height={dimensions.height} 
                                    className={styles["image-canvas"]} 
                                    ref={canvasRef}
                                />
                            </div>
                        </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Video;