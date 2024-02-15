import { Iframe } from "./Video.styled"

const Video = () => {

    return (
        <Iframe
            src="https://www.youtube.com/embed/qdk01wkzKzo?si=gNs3qD35NpmaBXR8"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
        />
    )
}

export default Video

