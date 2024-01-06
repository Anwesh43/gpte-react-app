import logo from './logo.svg';
import { useState, useMemo, useEffect } from 'react';
import CardContainer, { CardData } from './components/CardContainer';
import storeApi, { Product } from './services/storeApi';

function App() {
  const [toggle, setToggle] = useState(false)
  const [cards, setCards] = useState<CardData[]>([])
  const storeApiService = useMemo(() => storeApi(), [])
  useEffect(() => {
    
    const getCards = async () => {
      const products = await storeApiService.getProductCards()
      console.log("Products", products)  
      setCards(products.map((p : Product) => ({
        title: p.title, 
        imageUrl: p.image, 
        subtitle: p.description
      })))
    }
    getCards()
  }, [])
  return (
    <div className='w-full flex items-center flex-col justify-start'>
      <div onClick = {() => {
        setToggle(!toggle)
      }} className={`transition-colors rounded-sm bg-green-500 hover:bg-orange-500 w-full h-[30px] flex justify-center items-center ${toggle ? 'animate-spin' : ''}`}>
        Products
      </div>
      <CardContainer cards={cards}/>
    </div>
  );
}

export default App;
