import React from 'react';
import { getKeyName } from '../camelot-wheel/camelot-wheel';

export default function NowPlaying({ nowPlaying }) {
  if (nowPlaying.name)
    return (
      <div>
        <h2>
          {nowPlaying.name} by {nowPlaying.artist.artistName}
        </h2>
        {nowPlaying.trackFeatures && (
          <>
            <p>
              key ={' '}
              {getKeyName(
                nowPlaying.trackFeatures.key,
                nowPlaying.trackFeatures.mode
              )}{' '}
              tempo = {nowPlaying.trackFeatures.tempo} time signature ={' '}
              {nowPlaying.trackFeatures.time_signature}
            </p>
          </>
        )}
        <img src={nowPlaying.albumArt} style={{ height: 150 }} alt={nowPlaying.artist.artistName} />
      </div>
    );
  return null;
}
