import React from 'react';

const Card = ({ title, children, className = '' }) => {
    return (
        <div className={`card ${className}`}>
            {title && <h3 className="card-title">{title}</h3>}
            <div className="card-content">
                {children}
            </div>
            <style jsx="true">{`
        .card-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--color-text-primary);
          margin-bottom: var(--spacing-md);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
      `}</style>
        </div>
    );
};

export default Card;
