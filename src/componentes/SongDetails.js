import React from 'react'
import Mensaje from './Mensaje'
import SongArtist from './SongArtist'
import SongLyric from './SongLyric'

const SongDetails = ({search,lyric,bio}) => {
    if (!lyric || !bio) return null;
    return (
        <div>
            {lyric.error || lyric.name === 'AbortErorr'?( 
                <Mensaje msj={`No existe la cancion ${search.song}`} bgColor='#dc3545'/>
            ):( 
                <SongLyric/>
            )}
            {bio.artists?( 
                <SongArtist/>
            ):( 
                <Mensaje msj={`no existe el cantante ${search.artists}`} bgColor='#dc3545'/>
                )}
        </div>
    )
}

export default SongDetails
