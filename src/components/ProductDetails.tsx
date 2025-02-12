import React from 'react'
import Reviews from './Reviews'
import NumberCount from './NumberCount'
import { PopularProducts } from '../views/includes/Section'
import { Carousel } from 'react-responsive-carousel'
import AddToCart from './AddToCart'
import { ProductType } from './ProductCart'
import useFetch from '../hooks/useFetch'

const ProductDetails = ({product} : {product : ProductType}) => {

    const [loading, data] = useFetch('https://comfortable.dev/user/2');
    console.log(loading, data);

  return (
    <div className='view-product px-5'>
        <div className="details-generals border border-1 fd-hover-border-primary bg-white d-flex text-black p-5 gap-2 mt-5" style={{minHeight : '400px'}}>
            <div className='p-img w-50'>
                <div className="product-img h-50">
                    <Carousel showArrows={false} showIndicators={false} swipeable={true}>
                        <div className="others-img"><img src={"/src/assets/img/product/6.png"} alt="Alt" /></div>
                        <div className="others-img"><img src={"/src/assets/img/product/2.png"} alt="Alt" /></div>
                        <div className="others-img"><img src={"/src/assets/img/product/3.png"} alt="Alt" /></div>
                        <div className="others-img"><img src={"/src/assets/img/product/5.png"} alt="Alt" /></div>
                    </Carousel>
                </div>
            </div>
            <div className="p-details w-50">
                <div className='d-flex gap-2'><Reviews rating={5}/><span className='fd-color-primary'>(25 Reviews)</span></div>
                <h3 className="fw-bold my-4">Vegetables Juice</h3>
                <p className='fw-bold opacity-75'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum modi, praesentium voluptas suscipit tempore blanditiis aut consectetur rem atque architecto exercitationem numquam veritatis recusandae animi? Recusandae consectetur quam suscipit consequatur!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, ipsa assumenda repudiandae incidunt ea est pariatur eveniet ut cupiditate, ...
                </p>
                <div className="d-flex gap-2">
                    <h1 className="fw-bold fd-color-primary">$200</h1>
                    <h2 className="fw-bold align-self-end" style={{textDecoration : "line-through"}}>$300</h2>
                </div><hr />
                <div className="categories-list d-flex gap-2">
                    <h5 className="fw-bold">Categories : </h5>
                    <div><span> Cover,</span><span> Seat,</span><span> Car,</span><span> Parts</span></div>
                </div><hr />
                <div className="p-types d-flex gap-2 align-items-center">
                    <h5 className="fw-bold d-flex gap-2 mb-0">Colors : </h5>
                    <div className='d-flex gap-2'>
                        <span className='p-color bg-danger'></span><span className='p-color bg-warning'></span>
                        <span className='p-color bg-info'></span><span className='p-color bg-primary'></span><span className='p-color bg-secondary'></span>
                    </div>
                </div>
                <div className="p-types d-flex gap-2 align-items-center mt-3">
                    <h5 className="fw-bold d-flex gap-2 mb-0">SIZE : </h5>
                    <div className='d-flex gap-2 opacity-75'>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Small</span>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Medium</span>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Large</span>
                        <span className='border border-1 p-1 rounded-2 cursor-pointer'>Extra Large</span>
                    </div>
                </div>
                <div className='d-flex gap-2 my-4'>
                    <NumberCount product={product} min={1} />
                    <AddToCart product={product} divClass='align-self-center'/>
                </div>
                <div className="p-share d-flex gap-2 align-items-center">
                    <h5 className="fw-bold d-flex gap-2 mb-0">Share : </h5>
                    <div className='d-flex gap-2'>
                        <div><a href="#" className='text-black'><i className="bi bi-facebook"></i></a></div>
                        <div><a href="#" className='text-black'><i className="bi bi-twitter"></i></a></div>
                        <div><a href="#" className='text-black'><i className="bi bi-pinterest"></i></a></div>
                        <div><a href="#" className='text-black'><i className="bi bi-instagram"></i></a></div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-desc p-5 my-5 bg-white border border-1 text-black" style={{minHeight : '400px'}}>
            <div className='tab-title fw-bold d-flex gap-2'>
                <div className='t-t'><a href="#" className='fd-color-primary'>Description</a></div>
                <div className='t-t'><a href="#" className='text-black'>Additional Informations</a></div>
                <div className='t-t'><a href="#" className='text-black'>Reviews</a></div>
            </div><hr />
            <div className="opacity-50 fw-bold mt-2">
                <div className="tab-content">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam!</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam. Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda iste debitis eum quis vitae dolores sequi, quo vel ratione veniam. Placeat, quos! Consequatur possimus voluptas dolore dignissimos aperiam explicabo sed. Id optio, sapiente quo accusamus quae vel nesciunt adipisci nam eos. Rerum, alias adipisci. Nesciunt esse doloremque odit! Molestiae quia hic maxime voluptas, quos modi. Veniam harum aspernatur incidunt totam!</p>
                </div>
            </div>
        </div>
        <div className="related-products text-black my-5">
            <div className="d-flex justify-content-between mb-5">
                <h4>Related Products</h4>
                <div><a href="#" className="fd-btn fw-bold">View All <i className="bi bi-arrow-right"></i></a></div>
            </div>
              <PopularProducts grid={4} />
        </div>
    </div>
  )
}

export default ProductDetails