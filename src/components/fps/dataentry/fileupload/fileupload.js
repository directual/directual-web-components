import React, { useState } from 'react'
import styles from './fileupload.module.css'
import Dropzone from 'react-dropzone'
import Loader from '../../loader/loader'


export default function FileUpload(props) {

    const [files, setFiles] = useState()

    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (!bytes) {
            return '0 Byte'
        }
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
        return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
    }

    return (
        <React.Fragment>
            <Dropzone
                multiple={props.multiple}
                {...props}
                onDrop={acceptedFiles => {
                    setFiles(acceptedFiles)
                    console.log(acceptedFiles)
                    acceptedFiles.forEach(file => {
                        const body = new FormData
                        body.append("file", file)
                        fetch('https://files.directual.app/api/upload', {
                            method: 'POST',
                            body,
                            // headers: {
                            //     'Content-Type': 'multipart/form-data; charset=utf-8; boundary=__X_PAW_BOUNDARY__'
                            // },
                        }).then(res => {
                            console.log('успех')
                            console.log(res)
                        })
                    })
                }}
            >
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps({ className: styles.dropzone })}>
                            <input {...getInputProps()} />
                            <p className={`icon icon-upload`}>
                                {props.uploadText ||
                                    props.multiple ? "Drop files here, or click to select files" :
                                    "Drop a file here, or click to select one"}
                            </p>
                        </div>
                        {files && files.length && !props.multiple &&
                            <div className={styles.progress}>
                                <Loader>Uploading file... 0%</Loader>
                                <div className={styles.line}>
                                    <div className={styles.ready} style={{ width: '25%' }}></div>
                                </div>
                                <div className={`icon icon-close ${styles.cancel}`} onClick={() => setFiles(null)}></div>
                            </div>}
                        {/* {files && files.length && props.multiple &&
                        <div className={styles.uploaded}>
                            <div className={`icon icon-done ${styles.fileName}`}>
                                <span>
                                    Uploaded: <strong>Hello_world.mov</strong>, 1.2 MB</span></div>
                            <div className={`icon icon-delete ${styles.delete}`}></div>
                        </div>} */}

                        {files && files.length && props.multiple &&
                            <div className={styles.progress}>
                                <Loader>Uploading... 1 of {files.length}, 0%</Loader>
                                <div className={styles.line}>
                                    <div className={styles.ready} style={{ width: '25%' }}></div>
                                </div>
                                <div className={`icon icon-close ${styles.cancel}`}></div>
                            </div>}

                        {files && files.length && <ul className={styles.multipleUpload}>
                            <li><strong>{files.length} file{files.length > 1 ? 's' : ''} being uploaded:</strong></li>
                            {files.map(file => <li key={file.name}>
                                <span>
                                    {file.name}, {bytesToSize(file.size)}</span>
                                <div className={`icon icon-delete ${styles.delete}`}></div>
                            </li>)}

                        </ul>}
                    </section>
                )
                }

            </Dropzone >
        </React.Fragment>
    )
}