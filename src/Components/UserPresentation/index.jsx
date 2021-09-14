import React from 'react';
import { useParams } from 'react-router-dom';

const UserPresentation = () => {
    return (
        <div className="presentation__main--grid">
            <h2>Presentation</h2>
            <div className="presentation--all">
                <div className="all--items">
                    <ul>
                        {/*<li>{user.first_name}</li>*/}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default UserPresentation