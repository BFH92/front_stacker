import React from 'react';
import { EditUserForm } from '../Forms/EditUserForm';

const UserPresentation = () => {
    return (
        <div className="presentation__main--grid">
            <h2>Presentation</h2>
            <div className="presentation--all">
                <div className="all--items">
                    <ul>
                        <EditUserForm />
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserPresentation