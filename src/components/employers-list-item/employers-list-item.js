import './employers-list-item.css';

const EmployersListItem = (props) => {

   let { name, salary, onDelete, onToggleProp, increase, promotion, onSalaryChange } = props;

   let classNames = 'list-group-item d-flex justify-content-between';
   if (increase) {
      classNames += ' increase';
   }
   if (promotion) {
      classNames += ' like';
   }

   onSalaryChange = (e) => {
      const salaryChange = e.target.value.slice(0, -1);
      this.setState({ salary: salaryChange });
      this.props.onSalaryChange(this.props.name, salaryChange);
   }

   return (
      <li className={classNames}>
         <span className="list-group-item-label" onClick={onToggleProp} data-toggle="promotion">{name}</span>
         <input type="text" className="list-group-item-input" defaultValue={salary + '$'} onInput={(e) => onSalaryChange(e)} />
         <div className='d-flex justify-content-center align-items-center'>
            <button type="button"
               className="btn-cookie btn-sm "
               onClick={onToggleProp}
               data-toggle="increase">
               <i className="fas fa-cookie"></i>
            </button>

            <button type="button"
               className="btn-trash btn-sm "
               onClick={onDelete}>
               <i className="fas fa-trash"></i>
            </button>
            <i className="fas fa-star"></i>
         </div>
      </li>
   )
}

export default EmployersListItem;