import Item from './Item';

const ItemList = ({ items }) => {


    return (
        <>
        {
          items.length ? 
                items.map(item => (
                <Item
                        key={item.id}
                        id={item.id}
                        start={0}
                        title={item.title}
                        dateAdded={item.dateAdded}
                        channel={item.channel}
                        thumbnail={item.image}
                        description={item.description}
                        price={item.price}
                        stock={item.stock}
                        initial={1} 
                        
                />
              ))
              : <p>Cargando mates....</p>
        }
        </>
    );
}

export default ItemList;