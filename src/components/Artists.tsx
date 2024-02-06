import '../../styles/Artiststyle.css'

export const Artists = () => {

    const data = [
        { id: 1, name: "Touka", src: "/mask.jpg", profession: "Singer" },
        { id: 2, name: "Adarsha Mishra", src: "/comedy.jpg", profession: "Comedian" },
        { id: 3, name: "Taylor Swift", src: "/ts.jpg", profession: "Singer" },
        { id: 4, name: "Touka", src: "/mask.jpg", profession: "Singer" },
        { id: 5, name: "Touka", src: "/mask.jpg", profession: "Singer" },
        { id: 6, name: "Adarsha Mishra", src: "/comedy.jpg", profession: "Comedian" },
        { id: 7, name: "Taylor Swift", src: "/ts.jpg", profession: "Singer" },
        { id: 8, name: "Touka", src: "/mask.jpg", profession: "Singer" },

    ];
    return (
        <div className="maincontainer" >
            {data.map((data) => (

                <div className="subcontainer" key={data.id} >
                    <img src={data.src} alt="mask" className='imgcontainer' />
                    <p className='name' >{data.name}</p>
                    <p className='prof' >{data.profession}</p>
                </div>
            ))
            }
        </div>
    )
}
