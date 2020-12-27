import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import IncomeTransactions from './IncomeTransactions';

const IncomeList = () => {

 const { incomeTransactions } = useContext(GlobalContext);

 console.log(incomeTransactions);

 return (
  <div className="transactions transactions-income">
   <h2>Transaction History</h2>
   <ul className="transaction-list">
    {incomeTransactions.map(incomeTransaction => (
     <IncomeTransactions
      incomeTransaction={incomeTransaction}
      key={incomeTransaction.id}
     />
    ))}

   </ul>
  </div>
 );
};

export default IncomeList;
