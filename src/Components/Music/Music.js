import axios from 'axios'
import React from 'react'

class Music extends React.Component {

  render() {
    return (
      <div>
        <audio controls="controls">
          <source src='https://cdn8.sefon.pro/files/prev/210/%D0%92%D0%B0%D0%BD%D1%8F%20%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B5%D0%BD%D0%BA%D0%BE%20-%20%D0%92%D0%B5%D0%BD%D0%B5%D1%80%D0%B0-%D0%AE%D0%BF%D0%B8%D1%82%D0%B5%D1%80%20%28192kbps%29.mp3' />
          <source type="audio/mpeg" />
            Your browser does not support the audio element.
        </audio>
      </div >
    )
  }
}


export default Music