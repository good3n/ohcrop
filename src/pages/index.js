import React, { useState, useRef } from "react"
import AvatarEditor from "react-avatar-editor"
import Resizer from "react-image-file-resizer"
import { copyImageToClipboard } from "copy-image-clipboard"
import Layout from "../components/layout"

const IndexPage = () => {
  const [oldImage, setOldImage] = useState("")
  const [newImage, setNewImage] = useState("")
  const editor = useRef(null)

  const handleCopy = image => {
    copyImageToClipboard(image)
      .then(() => {
        console.log("Image Copied")
      })
      .catch(e => {
        console.log("Error: ", e.message)
      })
  }

  const resizeFile = file =>
    new Promise(resolve => {
      Resizer.imageFileResizer(
        file, // is the file of the image which will resized.
        280, // max width
        360, // max height
        "JPEG", // is the compressFormat of the resized new image.
        70, // is the quality of the resized new image.
        0, // is the degree of clockwise rotation to apply to uploaded files EXIF data, if available.
        uri => {
          // is the callBack function of the resized new image URI.
          resolve(uri)
          setNewImage(uri)
        },
        "base64", // is the output type of the resized new image.
        280 // min width
        // 360 // min height
      )
    })

  const handleChange = async event => {
    try {
      const file = event.target.files[0]
      setOldImage(file)
      const image = await resizeFile(file)
      console.log(image)
    } catch (err) {
      console.log(err)
    }
  }

  const newSize = parseFloat(new Blob([newImage]).size / 1024).toFixed(2)
  const oldSize = parseFloat(oldImage.size / 1024).toFixed(2)
  const savings = parseFloat(((oldSize - newSize) / oldSize) * 100).toFixed(2)

  return (
    <Layout>
      <div className="upload">
        <input type="file" onChange={e => handleChange(e)} />
      </div>
      {oldImage ? (
        <>
          <AvatarEditor
            ref={editor}
            image={newImage}
            width={280}
            height={360}
            border={50}
            color={[255, 255, 255, 0.6]} // RGBA
            scale={1}
            rotate={0}
          />
          <div className="sizes">
            <p className="old">{`${oldSize}kb`}</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
            {newSize ? (
              <p className="new">
                {`${newSize}kb`} ({savings}% saved)
              </p>
            ) : null}
          </div>
        </>
      ) : null}
      {newImage ? (
        <button
          onClick={() => {
            if (editor) {
              // This returns a HTMLCanvasElement, it can be made into a data URL or a blob,
              // drawn on another canvas, or added to the DOM.
              const canvas = editor.current.getImage()
              // console.log(canvas)

              // If you want the image resized to the canvas size (also a HTMLCanvasElement)
              const canvasScaled = editor.current.getImageScaledToCanvas()
              handleCopy(canvasScaled.toDataURL())
              console.log(canvasScaled.toDataURL())
            }
          }}
        >
          Copy
        </button>
      ) : null}
    </Layout>
  )
}

export default IndexPage
