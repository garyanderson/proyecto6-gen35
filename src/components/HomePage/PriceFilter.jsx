import { useForm } from "react-hook-form"
import '../style/Filters.css'

const PriceFilter = ({ setFromTo }) => {

   const { handleSubmit, register, reset } = useForm()

    const submit = data => {
      const from = data.from
      const to = data.to

      setFromTo({
        from: from === '' ? 0 : +from,
        to: to === '' ? Infinity : Number(to)
      })
    }

  return (
    <section>
      <h3>Price</h3>
      <form onClick={handleSubmit(submit)}>
        <label>
          <span>From</span>
          <input {...register('from')} type="number" />
        </label>
        <label>
          <span>To</span>
          <input {...register('to')} type="number" />
        </label>
        <button>Apply</button>
      </form>
    </section>
  )
}

export default PriceFilter