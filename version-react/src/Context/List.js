import React, {
  createContext,
  useContext,
  useRef,
  useReducer,
} from "react";


const defaultPlayers = [
  {
    id: 1,
    playername: "이대호",
    team: "롯데 자이언츠",
    position: "지명타자",
    like: false,
  },
  {
    id: 2,
    playername: "손아섭",
    team: "롯데 자이언츠",
    position: "우익수",
    like: false,
  },
  {
    id: 3,
    playername: "김원중",
    team: "롯데 자이언츠",
    position: "마무리 투수",
    like: false,
  },
];

function listReducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return state.concat(action.player);
    case "LIKE":
      return state.map((player) =>
        player.id === action.id ? { ...player, like: !player.like } : player
      );
  }
}

const ListStateContext = createContext();
const ListMakeActionContext = createContext();
const ListNextIdContext = createContext();

const ListProvider = (props) => {
  const { children } = props;

  const [state, makeAction] = useReducer(listReducer, defaultPlayers);
  const nextId = useRef(4);

  return (
    <ListStateContext.Provider value={state}>
      <ListMakeActionContext.Provider value={makeAction}>
        <ListNextIdContext.Provider value={nextId}>
          {children}
        </ListNextIdContext.Provider>
      </ListMakeActionContext.Provider>
    </ListStateContext.Provider>
  );
};

const useListState = () => useContext(ListStateContext);
const useListMakeAction = () => useContext(ListMakeActionContext);
const useNextId = () => useContext(ListNextIdContext);

export { useListMakeAction,useListState,useNextId, ListProvider };
