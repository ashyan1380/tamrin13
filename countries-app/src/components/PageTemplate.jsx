import React from 'react'
import "./PageTemplate.css"
 const PageTemplate = (props) => {
    return (
        <div className="page-template">
{/* <div className="children"> */}
{props.children}
{/* </div> */}
                    </div>
    )
}
export default PageTemplate
