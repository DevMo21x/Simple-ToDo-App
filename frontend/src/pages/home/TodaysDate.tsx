import dayjs from "dayjs"
const TodaysDate = () => { 

  return (
    <div>
      <p>{dayjs().format('MMMM dddd D')}</p>
    </div>
  )

}


export default TodaysDate