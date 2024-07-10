import style from './CryptoHistory.module.css';
import transactions from '../../data/transactions.json';
import { format } from 'date-fns';

export const CryptoHistory = () => {
  return (
    <div>
      <h2>CryptoHistory</h2>
      <table className={style.table}>
        <thead className={style.thead}>
          <tr>
            <th className={style.th}>№</th>
            <th className={style.th}>PRICE</th>
            <th className={style.th}>AMOUNT</th>
            <th className={style.th}>DATE</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ id, price, amount, date }, index) => (
            <tr className={style.tr} key={id}>
              <td className={style.td}>{index + 1}</td>
              <td className={style.td}>{price}</td>
              <td className={style.td}>{amount}</td>
              <td className={style.td}>
                {format(new Date(date), 'MM/dd/yyyy, h:mm a')}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
