import React from 'react';

const SummaryCard = ({ title, dateFrom, dateTo, organization, link, description }) => {
    return (

        <div className="summary-card p-4 rounded">
            <p className="summary-date rounded">{dateFrom}{dateTo && ` to ${dateTo}`}</p>
            <p className="title-2">{title}</p>
            <a
                rel="noreferrer"
                target="_blank"
                href={link}
                className="title-3-a"
            >
                {organization}
            </a>
            <p className="summary-desc">
                <ul>
                    {description.map((desc, i) => (
                        <li key={i}>{desc}</li>
                    ))}
                </ul>
            </p>
        </div>

    );
};

export default SummaryCard;