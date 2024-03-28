import { useState } from 'react'
import useCurrencyInfo from './hooks/useCurrencyInfo';
import InputBox from './components/InputBox';

function App() {

  const[amount, setAmount] = useState(0);
  const[from, setFrom] = useState("usd");
  const[to, setTo] = useState("npr");
  const[convertedAmount, setConvertedAmount] = useState(0);

  // const currency = 'usd';
  const currencyInfo = useCurrencyInfo(from);

  const Options = Object.keys(currencyInfo)
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  return (
    <>
    <InputBox/>
    </>
  )
}

export default App;
