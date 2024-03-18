import React, { useRef, useState } from 'react'
import JoditEditor from "jodit-react"
import { Modal } from 'react-bootstrap'
import { Button } from 'react-bootstrap'

const ContentEditor = (props) => {
    const editor = useRef("")
    const [content, setContent] = useState("")
    // const plainText = htmlContent.replace(/<[^>]*>/g, '');
    const plaintext=content.replace(/<[^>]*>/g,'');

    return (
       
        <Modal
            {...props}
            size='xl'
            aria-labelledby="contained-modal-title-vcenter"
            centered 
            // className="mw-100%"
            // style={{width:"80%",height:"80vh",maxWidth:"800px",maxHeight:"600px",marginTop:"200px"}}
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Modal heading
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='section'>
                    <div className='container'>
                        <div className='input-box'>
                            <label htmlFor="">Title</label>
                            <input type="text" className='form-control' placeholder='Title Name' />
                        </div>
                        <div className='input-box'>
                            <JoditEditor
                                ref={editor}
                                value={content}
                                onChange={newContent => { setContent(newContent) }}
                            />
                        </div>
                        <div><label htmlFor="">Post Category</label>
                        {/* <p>{content}</p> */}
                        <input type="text" className='form-control' value={plaintext} />
                        </div>
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ContentEditor
