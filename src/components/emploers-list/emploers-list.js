import EmployersListItem from '../employers-list-item/employers-list-item';
import './emploers-list.css';

const EmployersList = ({ data, onDelete, onToggleProp,onSalaryChange }) => {

   const elements = data.map(item => {
      const { id, ...itemProps } = item;
      return (
         <EmployersListItem
            key={id}
            /*name={item.name} salary={item.salary}*/
            {...itemProps}
            onDelete={() => { onDelete(id) }}
            onSalaryChange={onSalaryChange}
            onToggleProp={(e) => onToggleProp(id, e.currentTarget.getAttribute('data-toggle'))} />
      )
   })

   return (
      <ul className="app-list list-group">
         {elements}
      </ul>
   )
}

export default EmployersList;