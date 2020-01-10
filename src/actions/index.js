export const removeItem = (itemType, id) => {
  return {
    type: 'REMOVE_ITEM',
    payload: {
      itemType,
      id,
    },
  };
};

export const addItem = (itemType, itemContent) => {
  const getID = () =>
    `_${Math.random()
      .toString(36)
      .substr(2, 9)}`;

  return {
    type: 'ADD_ITEM',
    payload: {
      itemType,
      item: {
        id: getID(),
        ...itemContent,
      },
    },
  };
};

// id: 1,
// title: 'Wake me up when Vue ends',
// content:
//   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora
// twitterName: 'reactjs',
// articleUrl: 'https://youtube.com',
// created: '1 day',

// return {
//   type: 'ADD_ITEM',
//   payload: {
//     itemType,
//     id: getID(),
//     itemContent,
//   },
// };
