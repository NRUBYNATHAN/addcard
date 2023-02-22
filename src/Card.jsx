import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';

export function Card({ data,id }) {
const navigate=useNavigate()
  return (
    <div className="data">
      <img className="img" src={data.img} />
      <div className="details">
        <p>{data.item}</p>
        <p>{data.rating}</p>
        <p>{data.rate}</p>
<Button  variant="contained" onClick={()=>navigate(`/addcard/${id}`)}>Add To Card</Button>
      </div>
    </div>
  );
}
