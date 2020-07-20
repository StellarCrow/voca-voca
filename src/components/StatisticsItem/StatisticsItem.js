import React from 'react';

export const StatisticsItem = ({count, title}) => {
    return (
        <div className='statistics-item'>
            <div className="statistics-item__count">
                {count}
            </div>
            <div className="statistic-item__title">
                {title}
            </div>
        </div>
    )
};
