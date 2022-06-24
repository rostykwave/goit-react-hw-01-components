import PropTypes from 'prop-types';
import { getRandomHexColor } from 'utills/getRandomHexColor';
import { Item, Label, Percentage, Section, StatList, Title } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Section>
      <Title >{title}</Title>
      <StatList>
        {stats.map(({ id, label, percentage }) => (
          <Item
            key={id}
            style={{ backgroundColor: getRandomHexColor() }}
          >
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </Item>
        ))}
      </StatList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
