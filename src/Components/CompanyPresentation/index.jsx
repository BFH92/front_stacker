import React from 'react';
import { EditCompanyForm } from '../Forms/EditCompanyForm';
const CompanyPresentation = () => {
    return (
        <div className="presentation__main--grid">
            <h2>Presentation</h2>
            <div className="presentation--all">
                <div className="all--items">
                    <ul>
                        <EditCompanyForm/>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default CompanyPresentation