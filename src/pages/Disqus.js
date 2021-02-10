import React from "react"
import Disqus from "disqus-react"
import * as Constants from '../constants';

const DisqusInserter = () => {
  return (
    <div className="comments-container">
    <Disqus.DiscussionEmbed
    shortname={Constants.DISQUS_SHORTNAME}
    config={{
      url: Constants.APP_URL,
      identifier: "index",
      title: "Main page"
    }}
    />
    </div>
    )
  }
  export default DisqusInserter;
  