import './app-filter.css';

const AppFilter = (props) => {
   const buttonsData = [
      { name: 'all', lable: 'Всі співробітники' },
      { name: 'promotion', lable: 'На підвищення' },
      { name: 'moreThen1000', lable: 'З/П більше 1000$' }
   ]

   const buttons = buttonsData.map(({ name, lable }) => {
      const active = props.filter === name;
      const clazz = active ? 'btn-light' : 'btn-outline-light'

      return (
         <button
            className= {`btn ${clazz}`}
            type="button"
            key={name}
            onClick={() => props.onFilterSelect(name)}>
            {lable}
         </button>
      )
   })

   return (
      <div className="btn-grup">
         {buttons}
      </div>
   )
}

export default AppFilter;