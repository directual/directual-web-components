import React, { useState } from 'react'
import styles from './fileupload.module.css'
import Dropzone from 'react-dropzone'
import Loader from '../../loader/loader'


export default function FileUpload(props) {

    const [files,setFiles] = useState()

    return (
        <React.Fragment>
            <FilePreview />
            <Dropzone
                multiple={false   }
                {...props}
                onDrop={acceptedFiles => setFiles(acceptedFiles)}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps({ className: styles.dropzone })}>
                            <input {...getInputProps()} />
                            <p className={`icon icon-upload`}>
                                {props.uploadText || "Drop file here, or click to select one"}
                            </p>
                        </div>
                        <div className={styles.progress}>
                            <Loader>Uploading file... 25%</Loader>
                            <div className={styles.line}>
                                <div className={styles.ready} style={{ width: '25%' }}></div>
                            </div>
                            <div className={`icon icon-close ${styles.cancel}`}></div>
                        </div>
                        <div className={styles.uploaded}>
                            <div className={`icon icon-done ${styles.fileName}`}>
                                <span>
                                    Uploaded: <strong>Hello_world.mov</strong>, 1.2 MB</span></div>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </div>
                        {/* <br />
                    multiple files:
                    <div className={styles.dropzone}>
                        <p className={`icon icon-upload`}>
                            Drop files here, or click to select files
                        </p>
                    </div>
                    <div className={styles.progress}>
                        <Loader>Uploading... 2 of 5, 25%</Loader>
                        <div className={styles.line}>
                            <div className={styles.ready} style={{ width: '25%' }}></div>
                        </div>
                        <div className={`icon icon-close ${styles.cancel}`}></div>
                    </div>
                    
                    <ul className={styles.multipleUpload}>
                        <li><strong>Uploaded 3 files:</strong></li>
                        <li>
                            <span>
                                Hello_world.jsx, 1.2 MB</span>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </li>
                        <li>
                            <span>
                                Goodbye_Olympic_Bear.docx, 11.2 MB</span>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </li>
                        <li>
                            <span>
                                War_and_peace.mov, 0.21 MB</span>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </li>
                    </ul> */}
                    </section>
                )
                }

            </Dropzone >
        </React.Fragment>
    )
}

function FilePreview(props) {
    return (
        <div className={styles.filePreview}>

        </div>
    )
}