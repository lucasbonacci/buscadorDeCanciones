import React, {useState,useEffect}from 'react'
import Loader from './Loader'
import SongDetails from './SongDetails'
import SongForm from './SongForm'
import {helpHttp} from '../helper/helpHttp'

const SongSearch = () => {
    const [search, setSearch] = useState(null)
    const [lyric, setLyric] = useState(null)
    const [bio, setBio] = useState(null)
    const [loading, setLoading]= useState(false)

    useEffect(()=>{
        if(search === null) return;

        const fetchData = async () =>{
            const {artist, song} = search

            let artistUrl=`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artist}`
            let songUrl=`https://api.lyrics.ovh/v1/${artist}/${song}`

            setLoading(true)

            const [artistRes, songRes] = await Promise.all([
                helpHttp().get(artistUrl), 
                helpHttp().get(songUrl)
            ])

            console.log(artistRes, songRes)
            setBio(artistRes)
            setLyric(songRes)
            setLoading(false)
           
        }

        fetchData()
    }, [search])

    const handleSearch = (data) =>{
        //console.log(data)
        setSearch(data)
    }

    return (
        <div>
            <h1>songsearch</h1> 
            {loading && <Loader/>}
            <SongForm 
                handleSearch={handleSearch}/>
                {search && !loading && (
                    <SongDetails 
                    search={search} 
                    lyric={lyric} 
                    bio={bio}/>
                )}
        </div>
    )
}

export default SongSearch