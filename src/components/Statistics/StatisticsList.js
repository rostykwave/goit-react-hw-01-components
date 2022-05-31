import PropTypes from 'prop-types';
import Statistics from 'components/Statistics/Statistics';

const StatisticsList = ({stats}) => {
    return (
        <ul className="stat-list">
            {stats.map(({id, label, percentage}) => (
                <li className="item" key={id}>
                    <Statistics
                        label={label}
                        percentage={percentage}
                    />
                </li>
            ))}
        </ul>
        
    )
}

export default StatisticsList;