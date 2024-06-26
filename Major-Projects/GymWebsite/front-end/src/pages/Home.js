import React, {useEffect } from 'react'
import WorkoutDetails from '../components/WorkoutDetails.js'
import WorkoutForm from '../components/WorkoutForm.js'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'
import { UseAuthContexte } from '../hooks/UseAuthContexte.js'

export default function Home() {
    // const [workouts, setWorkouts] = useState(null)
    const {state, dispatch} = useWorkoutContext()
    const { user } = UseAuthContexte()
    useEffect(() => {
        const fetchWorkout = async () => {
            const response = await fetch('/api/workouts')
            const json = await response.json()

            if(response.ok){
                dispatch({type: 'SET_WORKOUTS' , payload: json})
            }
        }
        fetchWorkout()
    }, [dispatch, user])

  return (
    <div className='home'>
        {/* <div>hello</div> */}
        <div>
            {state.workouts && state.workouts.map((workout) =>{
                    return (
                        <WorkoutDetails key={workout._id} workouts={workout} />
                    )
                }
            )}
        </div>
        <WorkoutForm/>
    </div>
  )
}
