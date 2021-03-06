async function getSearchResults(query, datasource) {
  const encodedQueryString = encodeURIComponent(query);

  const result = await datasource.get(
    `search?q=${encodedQueryString}&type=track&limit=10`
  );

  const searchResults = result.tracks.items.map(track => {
    const art = track.album.images[0] && track.album.images[0].url;
    return {
      artist: track.artists[0].name,
      id: track.id,
      name: track.name,
      uri: track.uri,
      art: art
    };
  });

  return searchResults;
}

export default getSearchResults;
