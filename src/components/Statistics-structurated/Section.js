import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
  return (
    <section className="statistics">
      {title && <h2 className="title">{title}</h2>}
      {children}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default Section;

///у файлі App

// import Section from 'components/Statistics-divided/Section'
// import StatisticsList from 'components/Statistics-divided/StatisticsList';

// export const App = () => {
//   return (
//     <div>

//       {/* <Profile
//         username={user.username}
//         tag={user.tag}
//         location={user.location}
//         avatar={user.avatar}
//         stats={user.stats}
//       /> */}

//       <Section title="Upload stats">
//         <StatisticsList stats={data}/>
//       </Section>

//     </div>

//   );
// };
