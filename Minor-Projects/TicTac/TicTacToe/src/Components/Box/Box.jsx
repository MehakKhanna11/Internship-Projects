import './Box.css'
function Box({id,value,onClick}){
    return <button key={id} className={`box ${value ==="X"?"x":"o"}`} onClick={onClick}>{value}</button>
}
export default Box;