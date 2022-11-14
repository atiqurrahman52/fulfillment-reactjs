import React from 'react';
import CareerHeader from './CareerHeader';
import Culture from './Culture';
import Job from './Job';
import Position from './Position';
import ProcessFaq from './ProcessFaq';
import ProcessForm from './ProcessForm';

const Career = () => {
    return (
        <div className='pt-28'>
            <CareerHeader />
            <Culture />
            <Position />
            <Job />
            <div className=''>
            <ProcessFaq />
            <ProcessForm />
            </div>
           
        </div>
    );
};

export default Career;