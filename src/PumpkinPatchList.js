import PumpkinPatch from './PumpkinPatch';
import './PumpkinPatchList.css'

function PumpkinPatchList() {
  return (
    <div className="PumpkinPatchList">
      <PumpkinPatch
        name="Pastorino's Pumpkin Farm"
        address="12391 San Mateo Rd, Half Moon Bay"
        image="pastorino.jpeg"
      />
      <PumpkinPatch
        name="24/7 Pumpkins"
        address="123 Halloween St, Pumpkin Town"
        image="pumpkin-1.jpg"
      />
      <PumpkinPatch
        name="Spooky Pumpkins Depo"
        address="666 Spooky Ave, Pumpkin Town"
        image="pumpkin-2.jpg"
      />
      <PumpkinPatch
        name="Pumpkin Nursery"
        address="420 Orange St, Pumpkin Town"
        image="pumpkin-3.jpg"
      />
      <PumpkinPatch
        name="Perfect Pumpkins"
        address="123 Orange St, Pumpkin Town"
        image="pumpkin-4.jpg"
      />
    </div>
  )
}

export default PumpkinPatchList
