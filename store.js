let stateData = null;

const storeNormalisedData = (data = []) => {
  let result = {};
  data.forEach((item, index) => {
    result[item.title] = item;
    if (item.subMenu) {
      const a = storeNormalisedData(item.subMenu);
      result = { ...result, ...a };
    }
  });
  return result;
};

export const appState = {
  getState: () => stateData,
  initializeStore: (menuData) => {
    stateData = storeNormalisedData(menuData);
  },
  getById: (id) => stateData[id],
  updateState: (id, extraProps = {}) => {
    stateData[id] = {
      ...stateData[id],
      ...extraProps,
    };
  },
};
