import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
  className="pizza-block"
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#abb2b5"
    foregroundColor="#918383"
    {...props}
  >
    <circle cx="140" cy="130" r="130" /> 
    <rect x="1" y="275" rx="15" ry="15" width="280" height="27" /> 
    <rect x="0" y="319" rx="15" ry="15" width="280" height="76" /> 
    <rect x="1" y="423" rx="15" ry="15" width="90" height="27" /> 
    <rect x="129" y="411" rx="15" ry="15" width="150" height="45" /> 
    <rect x="235" y="434" rx="0" ry="0" width="8" height="5" /> 
    <rect x="206" y="424" rx="0" ry="0" width="29" height="10" />
  </ContentLoader>
)

export default MyLoader

