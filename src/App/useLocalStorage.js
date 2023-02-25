import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [state, dispatch] = React.useReducer(
    reducer,
    initialState({ initialValue })
  );
  const { loading, error, syncItem, item } = state;

  //actions creators
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (item) =>
    dispatch({ type: actionTypes.success, payload: item });
  const onSave = (item) => dispatch({ type: actionTypes.save, payload: item });
  const onSync = () => dispatch({ type: actionTypes.sincronize });

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        if (!localStorageItem) {
          localStorage.setItem("itemName", JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        onSuccess(parsedItem);
      } catch (error) {
        onError(error);
      }
    }, 1500);
  }, [syncItem]);

  const saveItem = (newItem) => {
    try {
      const stringifyItem = JSON.stringify(newItem);
      localStorage.setItem(itemName, stringifyItem);
      onSave(newItem);
    } catch (error) {
      onError(error);
    }
  };

  const sync = () => {
    onSync();
  };

  return { item, saveItem, loading, error, sync };
}

const initialState = ({ initialValue }) => ({
  loading: true,
  error: false,
  syncItem: true,
  item: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sincronize: "SINCRONIZE",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    loading: false,
    error: false,
    syncItem: true,
    item: payload,
  },
  [actionTypes.sincronize]: {
    ...state,
    syncItem: false,
    loading: true,
  },
  [actionTypes.save]: {
    ...state,
    item: payload,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
