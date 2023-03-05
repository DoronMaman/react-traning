import { useContext, useState } from "react";
import { Item, ItemContext } from "./item-context";
import './item-list.css';

const ItemList = () => {
    const { items, deleteItem } = useContext(ItemContext);
    const { addItem } = useContext(ItemContext);
    const [itemName, setItemName] = useState('');
    const [itemDescription, setItemDescription] = useState('');

    const handleAddItem = () => {
        const newItem = {
            id: Math.floor(Math.random() * 100),
            name: itemName,
            description: itemDescription,
        };
        addItem(newItem);
        setItemName('');
        setItemDescription('');
    };

    return (
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>NAME</th>
                    <th>DISCRIPTION</th>
                    <th>DELETE</th>
                </tr>
                {items.map((item: Item) => (
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <button onClick={() => deleteItem(item.id)}>Delete</button>

                    </tr>
                ))}

            </table>
            <div className="style-div">
                <h1>ADD USER</h1>
                <label>User Name</label>
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                />
                <label>Discription</label>

                <input
                    type="text"
                    value={itemDescription}
                    onChange={(e) => setItemDescription(e.target.value)}
                />
                <button className="button-add" onClick={handleAddItem}>Add Item</button>
            </div>
            {/* <ul>
                {items.map((item: Item) => (
                    <li key={item.id}>
                        {item.name}
                        <button onClick={() => deleteItem(item.id)}>Delete</button>
                    </li>
                ))}
            </ul> */}
        </>
    );
};
export default ItemList;


