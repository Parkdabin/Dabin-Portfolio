import React from 'react';

function ProfileBlock({ header1, header2, content }) {
    return (
        <div className="Profile">
            <div className="headerbox">
                <div className="header1">
                    {header1}
                </div>
                <div className="header2">
                    {header2}
                </div>
            </div>
            <div className="content">{content}</div>
        </div>
    );
}

export default ProfileBlock;