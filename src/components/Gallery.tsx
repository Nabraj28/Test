// import React from 'react'
import '../../styles/Gallerystyles.css'

export const Gallery = () => {
    const data = [
        { id: 1, src: "/mask.jpg" },
        { id: 2, src: "/bh.jpg" },
        { id: 3, src: "/ts.jpg" },
    ]
    return (
        <>

            <div className='gallerycon'  >
                {data.map((data) => (
                    <img key={data.id} src={data.src} alt="" className='imggallery' />
                ))
                }
            </div>
        </>
    )
}
