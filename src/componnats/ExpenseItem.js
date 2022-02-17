import "./ExpenseItem.css";

function ExpenseItem() {
  const ExpesnseDate = new Date(2021, 2, 28);
  const expesnseTitle = "car insurance";
  const expesnseAmount = 29300.11;

  return (
    <div className="expense-item">
      <div> {ExpesnseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{expesnseTitle}</h2>
        <div className="expense-item__price"> ${expesnseAmount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
