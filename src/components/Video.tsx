import "../../styles/Gallerystyles.css"



export const Video = () => {

    return (
        <div>
            <iframe
                width="100%"
                height="400"
                src="https://www.youtube.com/embed/qdk01wkzKzo?si=gNs3qD35NpmaBXR8"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    )
}