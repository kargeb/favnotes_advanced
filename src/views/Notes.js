import React from 'react';
import Card from 'components/molecules/Card';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import GridTemplate from 'templates/GridTemplate';

const Notes = ({ notes }) => (
  <GridTemplate pageType="notes">
    {notes.map(note => (
      <Card
        title={note.title}
        content={note.content}
        created={note.created}
        id={note.id}
        key={note.id}
      />
    ))}
  </GridTemplate>
);

Notes.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      // twitterName: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Notes.defaultProps = {
  notes: [],
};

const mapStateToProps = state => {
  const { notes } = state;
  return { notes };
};

export default connect(mapStateToProps)(Notes);

//  ******************* OLD
// import React from 'react';
// import Card from 'components/molecules/Card';
// import GridTemplate from 'templates/GridTemplate';

// const notes = [
//   {
//     id: 1,
//     title: 'Wake me up when Vue ends',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '1 day',
//   },
//   {
//     id: 2,
//     title: 'Como es An Gular?',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '1 day',
//   },
//   {
//     id: 3,
//     title: 'Du bist Reactish',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '5 days',
//   },
//   {
//     id: 4,
//     title: 'Reactuj się kto moze!',
//     content:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
//     created: '10 days',
//   },
// ];

// const Notes = () => (
//   <GridTemplate pageType="notes">
//     {notes.map(note => (
//       <Card
//         cardType="notes"
//         title={note.title}
//         content={note.content}
//         created={note.created}
//         id={note.id}
//         key={note.id}
//       />
//     ))}
//   </GridTemplate>
// );

// export default Notes;
