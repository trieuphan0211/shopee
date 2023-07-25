import React from 'react';

export const Loading = () => {
    return (
        <div className="modal-dialog modal-dialog-centered " style={{ maxWidth: '548px' }}>
            <div
                className="modal-content overflow-hidden"
                style={{
                    borderRadius: '10px',
                    padding: '50px',
                }}
            >
                <div className="d-flex flex-column align-items-center">
                    <div className="container">
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </div>
        </div>
    );
};
