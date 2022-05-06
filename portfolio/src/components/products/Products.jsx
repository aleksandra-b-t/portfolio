import Product from '../product/Product';
import './products.css'

const Products = () => {
     return(
         <div className="pl">
             <div className="pl-text">
                 <h1 className="pl-title">Create and inspire</h1>
                 <p className="pl-desc">I am passionate about applying my nical skills to create impactful projects to make change. I continuously focus on self-improvement and pride myself in being agile, organized and thriving in a team environment.</p>
             </div>
             <div className="pl-list">
                 <Product />
                 <Product />
                 <Product />
                 <Product />
                 <Product />
             </div>
         </div>
     )
};

export default Products;