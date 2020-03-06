# vs-react-store
Стор для React@16.8 на "новом" контексте и хуках

## Установка
```node
npm install --save vs-react-store
```

## Использование
### 1. Создание редьюсера (**createReducer**)

**createReducer** принимает два аргумента
- экшены
- необязательный коллбэк, вызывающийся при измненении стора

```javascript
import { createReducer } from 'vs_react_store';

type StoreType = {
  some_number: number;
  some_string: string;
};

const CHANGE_SOME_NUMBER = 'CHANGE_SOME_NUMBER';
const CHANGE_SOME_STRING = 'CHANGE_SOME_STRING';

const reducer = createReducer<StoreType>(
  {
    [CHANGE_SOME_NUMBER]: (state, action) => {
      return {
        ...state,
        some_number: action.payload.some_number,
      }
    },
    [CHANGE_SOME_STRING]: (state, action) => {
      return {
        ...state,
        some_string: action.payload.some_string,
      }
    },
  },
  (state) => {
    console.info('state is changed');
  },
);
```

### Инициализация провайдера/ стора (**createVsProvider**)
Стор строится на контексте реакта, который в свою очередь используется хук **React.useReducer**
По сути **createVsProvider** прокидывает аргументы в параметры хука

Таким образом (на текущий момент) **createVsProvider** имеет 3 **обязательных** параметра ([**React.useReducer**](https://reactjs.org/docs/hooks-reference.html#usereducer))
1) reduced
2) defaulv_value
3) initStore

Далее необходимо поместить провайдер в корень вашего приложения

```javascript
const default_value = {
  some_number: 1,
  some_string: 'i wanna be the guy',
};

const initStore = (default_value_temp) => {
  return {
    ...default_value,
    some_number: 0,
  };
};

const VsStoreProvider = createVsProvider(reducer, default_value, initStore);

const AppWrap = () => {
  return (
    <VsStoreProvider>
      <App />
    </VsStoreProvider>
  );
};
```

### Получение данных их стора (**useSelector**)
Для получения данных из стора используется хук **useSelector**

```javascript
const selectSomeKey = (state: StoreType) => state.some_number;

const App = React.memo(
  () => {
    const some_number = useSelector(some_number);

    return (
      <span>{some_number}</span>
    );
  },
);
```

### Изменение данных в сторе (**useDispatch**)
Для изменения данных из стора используется хук **useDispatch**

```javascript
const selectSomeKey = (state: StoreType) => state.some_number;

const changeSomeNumber = (number) => ({
  type: CHANGE_SOME_NUMBER,
  payload: {
    some_number,
  },
});

const App = React.memo(
  () => {
    const dispatch = useDispatch();
    const some_number = useSelector(some_number);

    return (
      <span onClick={() => dispatch(changeSomeNumber(some_number + 1))}>{some_number}</span>
    );
  },
);
```
