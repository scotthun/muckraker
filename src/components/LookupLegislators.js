import Typography from '@material-ui/core/Typography';
import LookupModule from './LookupModule.js'
import Spacer from './Spacer'
import './LookupLegislators.css'

export default function LookupLegislators(){

  return (
    <div id="legislatorContainer">
      <Typography variant='h3' id='legislator'>Lookup Legislator</Typography>
      <Spacer />
      <LookupModule />
      <Spacer />
    </div>
  );
}