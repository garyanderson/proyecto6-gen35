import FormReviews from "../components/ReservationPage/FormReviews"
import ReserveCard from "../components/ReservationPage/ReserveCard"
import UseCrud from "../hooks/UseCrud"
import { useEffect, useState } from "react"

const ReservationPage = () => {

    const [reserveSelected, setReserveSelected] = useState()
    const {response, getApi, createApi, deleteApi, updateApi} = UseCrud()    

    useEffect(() => {
        const url = 'https://hotels-api.academlo.tech/bookings'
        getApi(url)
    }, [])
    
    console.log(response)

  return (
    <section>
        <FormReviews 
            setReserveSelected={setReserveSelected}
        />
        <h2>reservations</h2>
        <div>
            {
              response?.map(reserve => (
                <ReserveCard
                key={reserve.id}
                reserve={reserve}
                setReserveSelected={setReserveSelected}
                />
              ))              
            }
        </div>
    </section>
  )
}

export default ReservationPage