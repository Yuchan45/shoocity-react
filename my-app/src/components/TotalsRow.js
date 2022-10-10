import React from 'react';

function TotalsRow(){
    return(
        <div>
            <header className='totals-header'>
                <h1 className='header-totals-title'>Dashboard</h1>
           </header>
           <section className='container-totals'>
                <div className='container-totals-item'>
                    <h1 className='item-totals-tittle'>Total Products</h1>
                    <p className='item-totals-text'>x</p>
                </div>
                <div className='container-totals-item'>
                    <h1 className='item-totals-tittle'>Total Products</h1>
                    <p className='item-totals-text'>x</p>
                </div>
                <div className='container-totals-item'>
                    <h1 className='item-totals-tittle'>Total Products</h1>
                    <p className='item-totals-text'>x</p>
                </div>
           </section>
        </div>
           
    )
}

export default TotalsRow;