import React from 'react'
//import React, { Fragment } from 'react'
//import { buildUrl } from 'react-instafeed'

// // 🔥️ These are in your code (not this repo)
// import useAbortableFetch from '@hooks/useAbortableFetch'
// import Image from '@components/Image'

export default function Instagram () {
  // const { json, loading, error, abort } = useAbortableFetch(buildUrl(options))
  // if (loading) return 'Loading...'
  // if (error) return `Error: ${error}`
  // if (!json) return null

  const { data } = json
  //const { data, meta, pagination } = json

  // const feed = new Instafeed({
  //   accessToken: 'your-token'
  // });
  // feed.run();

  return (
    <>
      {// eslint-disable-next-line no-unused-vars
      data?.map(({ caption, id, images, tags }, index) => {
          const image = images[options.resolution]
          return (
              <Image
                key={index}
                url={image.url}
                title={caption.text}
                caption={caption.text}
                width={image.width}
                height={image.height}
              />
          )
        })}
    </>
  )
}