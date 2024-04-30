import mouse from '../../img/logitech-g502.png';
import '../../css/Product.css'
import { CardProduct } from '../products/comp/CardProduct';
import { Footer } from '../Footer'
import { useEffect } from "react";
import { useState } from "react";

export const ProductView = () => {

  const [products, setProducts] = useState([]);

	const fetchData = async() => {
		try{
			const response = await fetch('src/data/productos.json')
			const data = await response.json()
			setProducts(data)
		}catch(error){
			console.error(error)
		}
	};

	console.log(products)

	useEffect(() => {
		fetchData()
	},[]);

  return (
    <>
    <div className="mx-auto flex flex-col h-[55vh]">
      <div className="flex-1 grid grid-cols-12 gap-4 p-1 ">
        <div className="col-span-12 rounded-lg bg-gray-element sm:col-span-8 flex items-center justify-center">
          <img src={mouse} className="productImg" alt="Imagen" />
        </div>
        <div className="col-span-12 rounded-lg bg-blue-bizio p-16 sm:col-span-4 flex flex-col justify-center ">
          <h1 className="productViewTitle text-blac text-4xl uppercase mb-4">product title</h1>
          <p className="productViewDesc mb-4 text-gray-element">Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Et at culpa laboriosam facilis eius aliquid quam omnis eos 
          quibusdam qui.
          </p>
          <p className="productViewPrice mb-4 text-black text-3xl">$99.99 USD</p>
          <div className="productViewButtons">
            <button className="productViewButton bg-black">add to cart</button>
            <button className="productViewButton bg-black">buy</button>
          </div>
        </div>
      </div>
    </div>

    <div className='mx-auto mt-[8em] mb-[8em] text-white uppercase flex justify-center flex-col  align-middle text-center'>
      <h2 className='text-2xl'>related products</h2>
      <div className="mx-auto max-w-6xl grid-cols-1 gap-6 p-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex justify-center">
      {products.slice(0, 4).map(product => (
      <CardProduct key={product.id} imagen={product.image} desc={product.name} precio={product.price} />
      ))}
      </div>
    </div>
    <Footer />
    </>
  );
};


	
	
	