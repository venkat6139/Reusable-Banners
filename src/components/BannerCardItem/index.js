import './index.css'

const Banner = props => {
  const {bannerDetails} = props
  const {headerText, description, className} = bannerDetails
  return (
    <li className={className}>
      <div>
        <h1 className="heading">{headerText}</h1>
        <p className="paragraph">{description}</p>
        <button type="button">Show More</button>
      </div>
    </li>
  )
}

export default Banner
