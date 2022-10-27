import classes from "./NumbersList.module.scss";

const NumbersList = (props) => {
  return (
    <table className={classes.table}>
      <tr>
        <th>PAR</th>
        <th>IMPAR</th>
      </tr>
      {props.numbers.map((number) =>
        number.number % 2 === 0 ? (
          <tr key={number.id}>
            <td style={{color: number.number === 2 ?'red':'black' }}>{number.number}</td>
            <td></td>
          </tr>
        ) : 
        (
          <tr key={number.id}>
            <td className={number.number === 3 ? {color: 'red'}: null}></td>
            <td>{number.number}</td>
          </tr>
        ) 
      )}
    </table>
  );
};

export default NumbersList;
