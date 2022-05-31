const Statistics = ({label, percentage}) => {
    return (
        <div>
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
        </div>
    )
}

export default Statistics;