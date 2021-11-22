import logo from './logo.svg'
import './PumpkinPatch.css'

function PumpkinPatch(props) {
  const { name, image, address } = props
  return (
    <div className="PumpkinPatch">
      <img
        src={`${process.env.PUBLIC_URL}/imgs/${image}`}
        width="300"
        height="300"
        alt="Half Moon Bay, CA"
      />
      <h1>{name}</h1>
      <div>{address}</div>
    </div>
  )
}

export default PumpkinPatch
