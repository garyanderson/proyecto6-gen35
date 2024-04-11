
const formReviews = ({ setReserveSelected }) => {
  return (
    <article>
        <h3>reserve</h3>
        <section>
            <header>
                <img src={setReserveSelected?.hotel.images[0].url} alt="" />
            </header>
            <h4>{setReserveSelected?.hotel.name}</h4>
            <p>{setReserveSelected.hotel.city.name}, {setReserveSelected.hotel.city.country}</p>
            <ul>
                <li><span>reservation days</span><span>{setReserveSelected.reservationDays}</span></li>
                <li><span>subtotal price</span><span>{setReserveSelected.subtotal}</span></li>
            </ul>
        </section>
        <label  >
            <span>Raiting</span>
            <select name="" id="">
                <option value="1">⭐</option>
                <option value="2">⭐⭐</option>
                <option value="3">⭐⭐⭐</option>
                <option value="4">⭐⭐⭐⭐</option>
                <option value="5">⭐⭐⭐⭐⭐</option>
            </select>
        </label>
        <label  >
            <span>Coments</span>
            <textarea />
        </label>
    </article>
  )
}

export default formReviews