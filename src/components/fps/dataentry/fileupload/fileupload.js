import React, { useState, useEffect, useCallback } from 'react'
import styles from './fileupload.module.css'
import Dropzone from 'react-dropzone'
import Loader from '../../loader/loader'


export default function FileUpload(props) {

    return (
        <Dropzone
            {...props}
            onDrop={acceptedFiles => console.log(acceptedFiles)}
        >
            {({ getRootProps, getInputProps }) => (
                <section>
                    <div {...getRootProps({ className: styles.dropzone })}>
                        <input {...getInputProps()} />
                        <p className={`icon icon-upload`}>
                            {props.uploadText || "Drag'n'drop file here, or click to select one"}
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
                    <br />
                    <div className={styles.dropzone}>
                        <p className={`icon icon-upload`}>
                            Drag'n'drop files here, or click to select files
                        </p>
                    </div>
                    <div className={styles.progress}>
                        <Loader>Uploading... 2 of 5, 25%</Loader>
                        <div className={styles.line}>
                            <div className={styles.ready} style={{ width: '25%' }}></div>
                        </div>
                        <div className={`icon icon-close ${styles.cancel}`}></div>
                    </div>
                    <div className={styles.uploaded}>
                        <div className={`icon icon-done ${styles.fileName}`}>
                            <span>
                                Uploaded: <strong>3</strong> files</span></div>
                    </div>
                    <ul className={styles.multipleUpload}>
                        <li>
                            <span>
                                <strong>Hello_world.jsx</strong>, 1.2 MB</span>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </li>
                        <li>
                            <span>
                                <strong>Goodbye_Olympic_Bear.docx</strong>, 11.2 MB</span>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </li>
                        <li>
                            <span>
                                <strong>War_and_peace.mov</strong>, 0.21 MB</span>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </li>
                    </ul>
                </section>
    )
}

        </Dropzone >
    )
}