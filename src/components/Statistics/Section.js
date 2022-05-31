import StatisticsList from 'components/Statistics/StatisticsList';

const Section = ({title, stats}) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
        
            <StatisticsList
                stats={stats}
            />
        </section>
    )
}

export default Section;