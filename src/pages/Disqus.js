import React, { Component } from "react"
import Disqus from "disqus-react"
import * as Constants from './Constants';

export default class DisqusInserter extends Component {
  render() {
    const disqusShortname = Constants.DISQUS_SHORTNAME
    const disqusConfig = {
      url: Constants.APP_URL,
      identifier: "index",
      title: "Main page"
    }

    return (
      <div className="comments-container">
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}