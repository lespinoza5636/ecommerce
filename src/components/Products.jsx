import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products( { products } ){
    return (
        <main className='products'>
        <ul>
            {
                products.map(producto => {
                    return <li key={producto.id}>
                        <img src="{product.thumbnail}" alt="{producto.title}" />
                        <div>
                            <strong>
                                {producto.title}
                            </strong>
                        </div>
                        <div>
                            <button>
                                <AddToCartIcon />
                            </button>
                        </div>
                    </li>
                })
            }
        </ul>
    </main>
    )
}