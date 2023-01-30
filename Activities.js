import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';



// useEffect to execute this function as soon as page loads, then store the data in state with setActivity()
function Activities() {
    function loadActivity() {
        setIsLoading(true)
        fetch('https://www.boredapi.com/api/activity')
        .then((response) => response.json())
        .then((data) => {
        setActivities([...activities, data]);
        setIsLoading(false)
        });
           
    }

    const [activities, setActivities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    // execute the loadActivity funtion as soon as the page loads
    useEffect(() => {
        loadActivity();
    }, []);

    if (activities.length === 0) {
        return <h3>Loading...</h3>
    }

    return (
        <div>
            <h1>Things I can do when bored...</h1>
            <ul>
                {activities.map((activity, index) => <li key={activity.key}>{activity.activity}</li>)}
            </ul>
            <Button disabled={isLoading} id="button" onClick={loadActivity}>Load Another</Button>
        </div>
    );  
}



export default Activities;