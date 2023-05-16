import {NavLink} from "react-router-dom";
import SongItem from "./SongItem";
import Title from "./Title";

function Section({ title, more = false, items ,songs}) {

    return (
        <section>
            <Title title={title} more={more} />
            <div className="grid grid-cols-5 gap-x-6">
                {items.map(item => <SongItem item={item} key={item.track.id} />)}
                {/* {songs.map(song => <SongItem song={song}  />)} */}

            </div>
        </section>
    )
}

export default Section
