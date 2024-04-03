export default function LeftTitle({ data }) {
    const { title, desc } = data;

  return (
    <div className="left">
        <h2>{title}</h2>          
        <p className="desc-lg">{desc}</p>          
  </div>
  )
}