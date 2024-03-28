import React, {useId} from 'react'

function InputBox({
    label, amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions=[],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false
})
{ 
  const amountInputId = useId()   
  return (
    <div className='container'>
        <div className='row'>
            <label htmlFor={amountInputId} className='form-label'>{label}</label>
            <input 
            id ={amountInputId}
            type="number"
            className='input-box'
            placeholder='Amount'
            disabled= {amountDisable}
            value={amount}
            onChange={(e)=>{onAmountChange && onAmountChange(Number(e.target.value))}}
             />
        </div>
        <div className='container'>
        <p className="paragraph">Currency Type</p>
        <select 
        className='form-select'
        value={selectCurrency}
        onChange={(e)=>onCurrencyChange && onCurrencyChange(e.target.value)}
        disabled={currencyDisable}
        >
           {currencyOptions.map((currency)=> (
             <option key={currency} value={currency}>{currency}</option>
           ))}
        </select>
        </div>
    </div>
  )
}

export default InputBox


