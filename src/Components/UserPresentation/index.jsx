import React from 'react';
import { useParams } from 'react-router-dom';
import { EditUserPresentation } from '../EditUserPresentation';

const UserPresentation = () => {
    return (
        <div className="presentation__main--grid">
            <h2>Presentation</h2>
            <div className="presentation--all">
                <div className="all--items">
                    <ul>
                        <EditUserPresentation />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserPresentation