import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from "./VideoCard"

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            <h2>Recommended</h2>
            <div className="recommendedVideos__videos">
                <VideoCard
                    title="'Watch Before They DELETE This!' - Elon Musk's URGENT WARNING (2021)"
                    views="2.3 million"
                    timestamp="3 Days ago"
                    channelImage="https://yt3.ggpht.com/dDQBxzG4sL5Vsw4j4xfccwJfsCoUcXncrShuWUAk4TK-IPUdTyjLonMirLT8qSB8w4la6llydg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Naveed"
                    image="https://i.ytimg.com/an_webp/Kbe3FKeCd1A/mqdefault_6s.webp?du=3000&sqp=CIDOkokG&rs=AOn4CLBbvlSQUaAkIzU1lPlqnfAaP_xUcQ"
                />

                <VideoCard
                    title="Become a programmer in 10 mins"
                    views="2.3 million"
                    timestamp="3 Days ago"
                    channelImage="https://yt3.ggpht.com/dDQBxzG4sL5Vsw4j4xfccwJfsCoUcXncrShuWUAk4TK-IPUdTyjLonMirLT8qSB8w4la6llydg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Naveed"
                    image="https://i.ytimg.com/an_webp/PJC-oRDwwY8/mqdefault_6s.webp?du=3000&sqp=CK2KkYkG&rs=AOn4CLAyYKYrAUWzSxh4EZtB55HTvz1zpw"
                />

                <VideoCard
                    title="Become a programmer in 10 mins"
                    views="2.3 million"
                    timestamp="3 Days ago"
                    channelImage="https://yt3.ggpht.com/dDQBxzG4sL5Vsw4j4xfccwJfsCoUcXncrShuWUAk4TK-IPUdTyjLonMirLT8qSB8w4la6llydg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Naveed"
                    image="https://i.ytimg.com/an_webp/Kbe3FKeCd1A/mqdefault_6s.webp?du=3000&sqp=CIDOkokG&rs=AOn4CLBbvlSQUaAkIzU1lPlqnfAaP_xUcQ"
                />

                <VideoCard
                    title="Become a programmer in 10 mins"
                    views="2.3 million"
                    timestamp="3 Days ago"
                    channelImage="https://yt3.ggpht.com/dDQBxzG4sL5Vsw4j4xfccwJfsCoUcXncrShuWUAk4TK-IPUdTyjLonMirLT8qSB8w4la6llydg=s68-c-k-c0x00ffffff-no-rj"
                    channel="Naveed"
                    image="https://i.ytimg.com/an_webp/rN0HrbDDmZ8/mqdefault_6s.webp?du=3000&sqp=CL2NkYkG&rs=AOn4CLBZ6we_Crph52OBKiJcMaT-ekhguw"
                />
                
            </div>
        </div>
    )
}

export default RecommendedVideos
