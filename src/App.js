import { useForm } from 'react-hook-form';
import { CustomActiveShapePieChart } from './components/CustomActiveShapePieChart';
import { useMemo, useState } from 'react';
import { SimpleBarChart } from './components/SimpleBarChart';
import * as SC from './styled';

const convertData = (text) => {
  if (!text) return;

  const map = new Map();
  let res = [];

  text.split('').forEach((el) => {
    const element = el !== ' ' ? el : 'Пробел';
    map.set(element, (map.get(element) ?? 0) + 1);
  });

  map.forEach((value, name) => {
    res.push({
      name,
      value,
    });
  });

  return res;
};

function App() {
  const [text, setText] = useState('');

  const { handleSubmit, register, reset } = useForm();

  const onSubmit = (data) => {
    if (!data) return;

    setText(data.text);
    reset();
  };

  const data = useMemo(() => convertData(text), [text]);

  return (
    <SC.Container>
      <h1>Введите текст</h1>
      <h4>Узнайте количество вхождений каждой буквы</h4>

      <SC.StyledForm onSubmit={handleSubmit(onSubmit)}>
        <SC.StyledInput {...register('text')} />
      </SC.StyledForm>

      {data && (
        <SC.ChartsContainer>
          <SC.ChartItem>
            <CustomActiveShapePieChart data={data} />
          </SC.ChartItem>

          <SC.ChartItem>
            <SimpleBarChart data={data} />
          </SC.ChartItem>
        </SC.ChartsContainer>
      )}
    </SC.Container>
  );
}

export default App;
