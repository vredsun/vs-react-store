# vs-react-store
Стор для React@16.8 на "новом" контексте и хуках

## Установка
```node
npm install --save vs-react-store
```

## Использование
### 1. Создание редьюсера (**createReducer**)

**createReducer** принимает два аргумента
- функция, возвращающая начальное состояние стора
- экшены
- необязательный коллбэк, вызывающийся при измненении стора

```typescript
import { createReducer } from 'vs_react_store';

type StoreType = {
  some_number: number;
  some_string: string;
};

const CHANGE_SOME_NUMBER = 'CHANGE_SOME_NUMBER';
const CHANGE_SOME_STRING = 'CHANGE_SOME_STRING';

const default_value = {
  some_number: 1,
  some_string: 'i wanna be the guy',
};

const reducer = createReducer<StoreType>(
  () => {
    // возвращает дефолтное (начальное) значение стора
    return default_value;
  },
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

Таким образом (на текущий момент) **createVsProvider** имеет 1 **обязательный** параметра ([**React.useReducer (reducer)**](https://reactjs.org/docs/hooks-reference.html#usereducer))

Далее необходимо поместить провайдер в корень вашего приложения

```typescript
const VsStoreProvider = createVsProvider(reducer);

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

```typescript
const selectSomeKey = (state: StoreType) => state.some_number;

const App = React.memo(
  () => {
    const some_number = useSelector(selectSomeKey);

    return (
      <span>{some_number}</span>
    );
  },
);
```

### Изменение данных в сторе (**useDispatch**)
Для изменения данных из стора используется хук **useDispatch**

```typescript
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
