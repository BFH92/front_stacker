import React from 'react';
import { useParams } from 'react-router-dom';
import { EditCompanyPresentation } from '../EditCompanyPresentation';

const CompanyPresentation = () => {
    return (
        <div className="presentation__main--grid">
            <h2>Presentation</h2>
            <div className="presentation--all">
                <div className="all--items">
                    <ul>
                        <EditCompanyPresentation />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompanyPresentation