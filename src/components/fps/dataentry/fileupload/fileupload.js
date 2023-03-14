import React, { useEffect, useState, useRef } from 'react'
import styles from './fileupload.module.css'
import Dropzone from 'react-dropzone'
import Loader from '../../loader/loader'
import Input from '../input/input'
import Backdrop from '../../backdrop/backdrop'
import { relativeTimeRounding } from 'moment'
import Hint from '../../hint/hint'
import { dict } from '../../locale'
import _ from "lodash"

export default function FileUpload(props) {

    const [uploading, setUploading] = useState(false)
    const lang = props.locale ? props.locale.length == 3 ? props.locale : 'ENG' : 'ENG'

    function bytesToSize(bytes) {
        const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
        if (!bytes) {
            return '0 Byte'
        }
        const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))
        return Math.round(bytes / Math.pow(1024, i)) + ' ' + sizes[i]
    }

    const toArray = string => {
        if (!string) return []
        if (typeof string == 'string ') { return string.split(",") }
        else {
            return string
        }
    }

    const [files, setFiles] = useState(toArray(props.defaultValue))
    const [oldView, setOldView] = useState(!props.allowUpload)

    useEffect(() => setFiles(toArray(props.defaultValue)), [props.defaultValue])

    const updateFiles = newFiles => {

        console.log("updateFiles")
        console.log(newFiles)
        // console.log(Array.isArray(newFiles))

        const resultFileString = Array.isArray(newFiles) ? newFiles.join(",") : newFiles

        if (newFiles.length == 0) { props.onChange && props.onChange("") }
        if (Array.isArray(newFiles)) { setFiles(newFiles) } else { setFiles(newFiles.split(',')) }
        console.log(resultFileString)
        props.onChange && props.onChange(resultFileString)
    }

    const saveFiles = (newFiles) => {
        let resultFileList = [...files]

        if (newFiles.length == 0) { props.onChange && props.onChange(null); return undefined }

        newFiles.forEach((file, i) => {
            resultFileList.push('https://api.directual.com/fileUploaded/' + file.finalFileName)
        })
        const resultFileString = resultFileList.join(",")
        setFiles(resultFileList)
        props.onChange && props.onChange(resultFileString)
    }

    const [error, setError] = useState(null)

    return (
        <React.Fragment>
            {oldView && props.edit && <div className={styles.uploadWrapper}>
                {props.allowUpload && <a onClick={() => setOldView(!oldView)} className={styles.switchView}>upload to Directual storage</a>}
                <Input
                    label={props.label}
                    tip={props.tip}
                    description={props.description}
                    height={48}
                    nomargin
                    onChange={updateFiles}
                    placeholder={props.multiple ? "Files URLs, comma separated, no spaces" : "File URL"}
                    type='file' defaultValue={files} />
            </div>}

            <div className={styles.fileUpload} style={{ marginBottom: props.nomargin ? 0 : 22 }}>
                {(!oldView || !props.edit) && <React.Fragment>
                    {(props.multiple || files.length == 0) && props.edit && <a onClick={() => setOldView(!oldView)} className={styles.switchView}>paste file URL</a>}
                    {props.label && <label>{props.label}{props.required && '*'}</label>}
                    {props.description && <div className={styles.description}>{props.description}</div>}
                    {(props.multiple || files.length == 0) && props.edit &&
                        <Dropzone
                            multiple={props.multiple ? true : false}
                            {...props}
                            accept={props.images ? 'image/*' : null}
                            onDrop={(acceptedFiles, rej, event) => {
                                setUploading(true)
                                let counter = 0 
                                let uploadedFiles = []
                                acceptedFiles.forEach(file => {
                                    const body = new FormData
                                    body.append("file", file)
                                    fetch(props.host, {
                                        method: 'POST',
                                        body,
                                    }).then(res => {
                                        if (res.status != 200) {
                                            setUploading(false)
                                            setError('Upload error: ' + res.status + ' ' + res.statusText)
                                        }
                                        console.log(res)
                                        res.json().then(result => {
                                            counter = counter + 1
                                            uploadedFiles.push(result.result)
                                            if (counter == acceptedFiles.length) {
                                                setUploading(false)
                                                saveFiles(uploadedFiles)
                                            }
                                        })
                                    })
                                        .catch(err => setError(err))
                                })
                            }}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    {!uploading && <div {...getRootProps({ className: styles.dropzone })}>
                                        <input {...getInputProps()} />
                                        <p className={`icon icon-upload`}>
                                            {props.uploadText ||
                                                props.multiple ? _.get(dict[lang], 'dropMany') || "Drop files here, or click to select files" :
                                                _.get(dict[lang], 'dropOne') || "Drop a file here, or click to select one"
                                            }
                                        </p>
                                    </div>}
                                    {uploading &&
                                        <div className={styles.progress}>
                                            <Loader>{_.get(dict[lang], 'uploading') || "Uploading files..."}</Loader>
                                        </div>}

                                    {/* {files && files.length && <ul className={styles.multipleUpload}>
                            <li><strong>{files.length} file{files.length > 1 ? 's' : ''} being uploaded:</strong></li>
                            {files.map(file => <li key={file.name}>
                                <span>
                                    {file.name}, {bytesToSize(file.size)}</span>
                                <div className={`icon icon-delete ${styles.delete}`}></div>
                            </li>)}

                        </ul>} */}
                                </section>
                            )
                            }

                        </Dropzone >
                    }
                </React.Fragment>}
                <FileList
                    fileList={files}
                    images={props.images}
                    edit={props.edit}
                    lang={lang}
                    onDelete={index => {
                        console.log('deleting file: ' + index)
                        if (typeof files == 'string') {
                            updateFiles([])
                            return
                        }
                        const saveNewFiles = [...files]
                        saveNewFiles.splice(index, 1)
                        updateFiles(saveNewFiles)
                    }}
                />
                {error && <Hint error margin={{ top: 12, bottom: 1 }}>{JSON.stringify(error)}</Hint>}
            </div>

        </React.Fragment>
    )
}

function FileList({ fileList, images, onDelete, edit, lang }) {

    // console.log("fileList1")
    // console.log(fileList)

    fileList = fileList ?
        fileList
        : []
    fileList = Array.isArray(fileList) ? fileList : fileList.split(',')
    
    // console.log("fileList2")
    // console.log(fileList)

    const [largeView, setLargeView] = useState(null)

    if (fileList.length == 0) return <div />

    return <React.Fragment>

        {(largeView || largeView == 0) && <React.Fragment>
            <ShowImage
                imageUrl={fileList[largeView]}
                close={() => { setLargeView(null) }}
                lang={lang}
                swipable={fileList.length > 1}
                swipe={i => {
                    let saveIndex = largeView + i
                    if (saveIndex > fileList.length - 1) { saveIndex = 0 }
                    if (saveIndex < 0) { saveIndex = fileList.length - 1 }
                    setLargeView(saveIndex)
                }}
            />
            <Backdrop top onClick={() => { setLargeView(null) }} />
        </React.Fragment>}

        {images ? <div className={styles.imageList}>
            {fileList.length > 0 && Array.isArray(fileList) ? fileList.map((image, i) => <ImagePreview
                key={i}
                edit={edit}
                imageUrl={image}
                openImage={() => setLargeView(i)}
                onDelete={() => onDelete(i)}
            />) : fileList && fileList.split(",").map((image, i) => <ImagePreview
                key={i}
                edit={edit}
                imageUrl={image}
                openImage={() => setLargeView(i)}
                onDelete={() => onDelete(i)}
            />)
            }
        </div> :
            <div className={styles.fileList}>
                {fileList.length > 0 && Array.isArray(fileList) ? fileList.map((file, i) => <FilePreview
                    key={i}
                    edit={edit}
                    fileUrl={file}
                    onDelete={() => onDelete(i)}
                />) : fileList && fileList.split(",").map((image, i) => <ImagePreview
                    key={i}
                    edit={edit}
                    imageUrl={image}
                    openImage={() => setLargeView(i)}
                    onDelete={() => onDelete(i)}
                />)}
            </div>}

    </React.Fragment>
}

function ShowImage({ imageUrl, swipe, swipable, close, lang }) {
    const leftButton = useRef(null);
    const rightButton = useRef(null);
    const image = useRef(null);
    const imageName = useRef(null);

    // press 'Esc' for closing a popup:
    const handleUserKeyPress = (e) => {
        e.key == 'Escape' && close()
        e.key == 'ArrowLeft' && swipe(-1)
        e.key == 'ArrowRight' && swipe(1)
    }

    useEffect(() => {
        window.addEventListener('keydown', handleUserKeyPress);
        return () => { window.removeEventListener('keydown', handleUserKeyPress); };
    }, [handleUserKeyPress]);
    //----------------------

    useOutsideAlerter(image);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (!leftButton.current.contains(event.target) &&
                    !rightButton.current.contains(event.target) &&
                    !ref.current.contains(event.target)
                    //&& !imageName.current.contains(event.target)
                ) {
                    close()
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [ref]);
    }

    return <div className={styles.showImage}>
        {swipable ? <div className={`${styles.toLeft} icon icon-back`} ref={leftButton} onClick={() => swipe(-1)} /> : <div ref={leftButton} />}
        <div className={styles.imageWrapper}>
            <img ref={image} src={imageUrl} />
            {/* <span ref={imageName} className={styles.imageName}>{imageUrl}</span> */}
        </div>
        {swipable ? <div className={`${styles.toRight} icon icon-forward`} ref={rightButton} onClick={() => swipe(1)} /> : <div ref={rightButton} />}
    </div>
}

function ImagePreview({ imageUrl, onDelete, openImage, edit }) {
    return <div className={styles.imagePreview}>
        <img src={imageUrl}
            onClick={() => openImage()}
        />
        {edit && <div className={`icon icon-close ${styles.deleteImage}`}
            onClick={e => {
                e.stopPropagation()
                onDelete()
            }}
        />}
    </div>
}

function FilePreview({ fileUrl, onDelete, edit }) {

    const getResolution = line => {
        const regex = /\....?.?.?$/g;
        const found = line.match(regex);
        return found ? found[0].substring(1) : '?'
    }

    return <div className={styles.fileWrapper}>
        <div className={styles.resolutionWrapper}>
            {getResolution(fileUrl)}
        </div>
        <div className={styles.fileUrl}>
            <a href={fileUrl} target="_blank">{fileUrl}</a>
        </div>
        {edit && <div className={`${styles.delete} icon icon-delete`} onClick={onDelete} />}
    </div>
}

export function DropFiles(props) {
    return (
        <React.Fragment>
            <div className={styles.fileUpload} style={{ marginBottom: props.nomargin ? 0 : 22 }}>
                <label>{props.label}{props.required && '*'}</label>
                {props.description && <div className={styles.description}>{props.description}</div>}
                <Dropzone
                    // multiple={props.multiple ? true : false}
                    // accept={props.accept}
                    // onDrop={props.onDrop}
                    {...props}
                >
                    {({ getRootProps, getInputProps }) => (
                        <section>
                            {!props.uploading && <div {...getRootProps({ className: styles.dropzone })}>
                                <input {...getInputProps()} />
                                <p className={`icon icon-upload`}>
                                    {props.uploadText || "Drop a file here, or click to select one"}
                                </p>
                            </div>}
                            {props.uploading &&
                                <div className={styles.progress}>
                                    <Loader>Uploading files...</Loader>
                                </div>}
                        </section>
                    )
                    }
                </Dropzone >
            </div>

        </React.Fragment>
    )
}