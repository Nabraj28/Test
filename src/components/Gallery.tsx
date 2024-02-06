// import React from 'react'
import '../../styles/Gallerystyles.css'

export const Gallery = () => {
    const data = [
        { id: 1, src: "/mask.jpg" },
        { id: 2, src: "https://s3-alpha-sig.figma.com/img/a77a/8245/001a1ff9ecf70ecd5064fb1fa0e61dbc?Expires=1708300800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=THViVaytzuXga~0uMtYLcWVIjd2uriUfiaNj0p6PleUtE8xFGOeHxJrDp1-TWjtDKlnp5u2gMnzORInW7Im3Oys38IDVshaM--bUIdFexaJPlCsFpqV0QRYNXlaqky3mgOoUzQKcpqAmuEoNePJLIg~zPm4yXDX4HyA1ZErnavtDgIhaR5CLdUgPzPzJmw2nehrA4YnkHa3F3lTKVTvZkpUbfr6Da57geOrgwAa9oGFa6Q1K~jpNSg4oKTcmMSApiLke7bndx9XE3fqKDdjes-jkGyv0sPeqq6bLNnnAPU7ZoZvkrZxnxL1X1wthU1JmH5R8gawm4XpIdPt6CMBSyQ__" },
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
