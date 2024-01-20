import {useState} from 'react';
import './App.css';

function App() {

  //flag for dropdown menu
  const [ isDropdownVisible , setIsDropdownVisible]= useState(false);
  //list of items
  const [itemList,setItemList]=useState([
    {
      name:"HTML and CSS",
      value:"htmlcss"
    },
    {
      name:"React JS",
      value:"reactjs"
    },
    {
      name:"Node JS",
      value:"nodejs"
    },
    {
      name:"Data Structure and Algorithm",
      value:"dsa"
    }

  ]);

  //reference of selected item by user
   const[selectedItemIndex,setSelectedItemIndex]=useState(null);



  return (
    <div className="App">
        <div className='Heading'> Dropdown</div>
        <div className='custom-dropdown'>
          <div className={ "custom-dropdown-selection " +(isDropdownVisible ? "visible" : "") }
          onClick={e => {
            setIsDropdownVisible(!isDropdownVisible);
          }}>
            {
              selectedItemIndex !== null ? itemList[selectedItemIndex].name : "Please select an item"
            }
          </div>
          {/* dropdown item list */}
          {
            isDropdownVisible ?(   
              <div className='item-holder'>
                {
                  itemList.map((item,index) =>
                  ( 
                    <div key={item.value} className='dropdown-item' onClick={ e=> {
                      setSelectedItemIndex(index);
                      setIsDropdownVisible(false);
                    }}>
                      {
                        item.name
                      }
                      </div>
                  ))
                }
              </div>
            ) : <></>
          }

        </div> 
      
    </div>
  );
}

export default App;
