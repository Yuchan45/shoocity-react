import React /*{ useState, useEffect }*/from 'react';
import Footer from './Footer';
import TotalsRow from './TotalsRow';
import LastCreatedRow from './LastCreatedRow';
import NavBar from './NavBar';
import '../css/chart.css'
function Chart(){
    /*
    const [tableRowsData, setTableRowsData] = useState(["algo"])

    useEffect(() => {
        fetch("http://localhost:3001/api/users")
        .then((res) => res.json())
        .then((data) => {
            setTableRowsData(data.users)
        })
        .catch((err) => console.log(err));
    }, []); */
    return(
        <div className='container-dashboard'>
            <NavBar/>
            <TotalsRow/>
            <LastCreatedRow/>
            <Footer/>

        </div>
    )
}

export default Chart;