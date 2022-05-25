import './Card.css'

export default function Card({cat: {id, name, email}}) {
    // 此处发生了两次解构，可以在父组件使用{...monster}先进行一次解构
    return (
        <div className="cardBox">
            <img 
            src={`https://robohash.org/${id}?set=set4&size=180x180`}
            alt={name} />
          <h2>{name}</h2>
          <p>{email}</p>
        </div>
    )
}
