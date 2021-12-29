import React from 'react'
import "./SearchPage.css"
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined"
import ChannelRow from './ChannelRow'
import VideoRow from './VideoRow'

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon/>
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow
            image="https://yt3.ggpht.com/ytc/AKedOLRbdv3Di8paQyrgMF_VwFXPkhwVzcW59Vgo8dTsyw=s176-c-k-c0x00ffffff-no-rj-mo"
            channel="Clever Programmer"
            verified
            sus="660K"
            noOfVideos={384}
            description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
            />
            <hr/>
            <VideoRow
                views="1.4M"
                subs="65k"
                description="Do you want to learn coding for free?"
                timestamp="2 days ago"
                channel="Clever Programmer"
                title="Lets build a Project"
                image="https://i.ytimg.com/an_webp/KA_8eOIsjn4/mqdefault_6s.webp?du=3000&sqp=CMqclIkG&rs=AOn4CLAK9p8HkoFqokG95F_x5Sn4GA133A"
            />
            <VideoRow
                views="1.4M"
                subs="65k"
                description="Do you want to learn coding for free?"
                timestamp="2 days ago"
                channel="Clever Programmer"
                title="Lets build a Project"
                image="https://i.ytimg.com/an_webp/KA_8eOIsjn4/mqdefault_6s.webp?du=3000&sqp=CMqclIkG&rs=AOn4CLAK9p8HkoFqokG95F_x5Sn4GA133A"
            />
            <VideoRow
                views="1.4M"
                subs="65k"
                description="Do you want to learn coding for free?"
                timestamp="2 days ago"
                channel="Clever Programmer"
                title="Lets build a Project"
                image="https://i.ytimg.com/an_webp/KA_8eOIsjn4/mqdefault_6s.webp?du=3000&sqp=CMqclIkG&rs=AOn4CLAK9p8HkoFqokG95F_x5Sn4GA133A"
            />
            <VideoRow
                views="1.4M"
                subs="65k"
                description="Do you want to learn coding for free?"
                timestamp="2 days ago"
                channel="Clever Programmer"
                title="Lets build a Project"
                image="https://i.ytimg.com/an_webp/KA_8eOIsjn4/mqdefault_6s.webp?du=3000&sqp=CMqclIkG&rs=AOn4CLAK9p8HkoFqokG95F_x5Sn4GA133A"
            />
            <VideoRow
                views="1.4M"
                subs="65k"
                description="Do you want to learn coding for free?"
                timestamp="2 days ago"
                channel="Clever Programmer"
                title="Lets build a Project"
                image="https://i.ytimg.com/an_webp/KA_8eOIsjn4/mqdefault_6s.webp?du=3000&sqp=CMqclIkG&rs=AOn4CLAK9p8HkoFqokG95F_x5Sn4GA133A"
            />
            <VideoRow
                views="1.4M"
                subs="65k"
                description="Do you want to learn coding for free?"
                timestamp="2 days ago"
                channel="Clever Programmer"
                title="Lets build a Project"
                image="https://i.ytimg.com/an_webp/KA_8eOIsjn4/mqdefault_6s.webp?du=3000&sqp=CMqclIkG&rs=AOn4CLAK9p8HkoFqokG95F_x5Sn4GA133A"
            />
        </div>
        
    )
}

export default SearchPage
